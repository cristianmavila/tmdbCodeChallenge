# Coding Assignment for the TMDb

That application will provide a sample PHP api connected with TMDB api, so it's totally possible to implement refactory in the future. In our frontend we're are using ReactJS 16, Redux, Axios and Jest to test some components. In my honest opinion in the next step i could be put my PHP code inside a controller.

## How to install it and run:
```bash
docker-compose up -d
npm install
npm start
```

## For testing purposes only
```bash
npm run test
```

## Build a version to production
```bash
npm run build:prod
```

Be carefull if your docker default url is localhost, if don't have change yep, you can change here src/app/actions/index