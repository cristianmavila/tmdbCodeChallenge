<?php

use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;

return function (App $app) {

    $container = $app->getContainer();

    $app->get('/', function (Request $request, Response $response, array $args) use ($container) {
        return $container->get('renderer')->render($response, 'index.phtml', $args);
    });

    $app->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });

    $app->add(function ($req, $res, $next) {
        $response = $next($req, $res);
        return $response
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET');
    });

    $app->group('/movie', function () {

        $clientguzzle = new Client([
            'base_uri' =>'https://api.themoviedb.org/3/'
        ]);

        $apikey = '1f54bd990f1cdfb230adb312546d765d';

        $this->get('/list', function (Request $request, Response $response, array $args) use ($clientguzzle, $apikey) {
            try {
                $res = $clientguzzle->request('GET', 'movie/upcoming?api_key='.$apikey);
                $body = json_decode($res->getBody()->getContents(), true);
                return $response->withJson($body, 200);
            } catch (RequestException $e) {
                return $response->withJson([], 404);
            }
        });

        $this->get('/{movieid}/detail', function (Request $request, Response $response, array $args) use ($clientguzzle, $apikey) {
            try {
                $res = $clientguzzle->request('GET', 'movie/'.$args['movieid'].'?api_key='.$apikey);
                $body = json_decode($res->getBody()->getContents(), true);
                return $response->withJson($body, 200);
            } catch (RequestException $e) {
                return $response->withJson([], 404);
            }
        });

        $this->get('/search/{fullname}', function (Request $request, Response $response, array $args) use ($clientguzzle, $apikey) {
            try {
                $res = $clientguzzle->request('GET', 'search/movie?query='.urlencode($args['fullname']).'&api_key='.$apikey);
                $body = json_decode($res->getBody()->getContents(), true);
                return $response->withJson($body, 200);
            } catch (RequestException $e) {
                return $response->withJson([], 404);
            }
        });
    });
};