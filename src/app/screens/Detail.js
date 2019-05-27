import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovie, fetchStart } from '../actions/index'
import FormSearch from '../components/FormSearch'
import Loader from '../components/Loader'
import ShowError from '../components/ShowError'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"

class Detail extends React.Component {

  componentDidMount = () => {
    const { match, fetchMovie, fetchStart } = this.props
    fetchStart()
    fetchMovie(match.params.id)
  }

  render () {
    const { loading, movie, error } = this.props.movies
    const detail = movie ? (movie):{}
    const listGenres = detail.genres ? (
      detail.genres.map((item) =>
        <span key={item.id}> {item.name} </span>
      )) : null
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Loader loading={loading}/>
            <Col>
              <ShowError error={error}/>
              <h1>{detail.title}</h1>
              <Row>
              { detail.poster_path ? (
                <Col md={4}>
                  <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`} />
                </Col>
              ):null}
              <Col md={8}>
                <p>{detail.overview}</p>
                { listGenres }<br />
                { detail.release_date ? (
                  <p>Release date: {detail.release_date}</p>
                ):null}

                {!loading ?(
                <Link to="/">
                  <Button variant="dark">Back</Button>
                </Link>
                ):null }
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (movie) => {
  return movie
}

const mapDispathToProps = (dispatch) => {
  return bindActionCreators({
    fetchMovie,
    fetchStart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Detail)