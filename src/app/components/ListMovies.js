import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Container, Button, Row, Col } from 'react-bootstrap'

const ListMovies = (props) => {
  const itemList = props.movies.results ? (props.movies.results.map((item) =>
    <Col key={item.id} xs={6} md={3}>
      <Link to={`/detail/${item.id}`}>
        { item.poster_path ? (
          <img style={{width: '100%'}} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
        ): null }
        <strong style={{
          marginBottom: 20,
          display: 'block',
          marginTop: 10
        }}>{item.title}</strong>
      </Link>
    </Col>
  )):null
  return (
    <Container>
      <Row>
        {itemList}
      </Row>
    </Container>
  )
}

ListMovies.propTypes = {
  movies: PropTypes.object,
};

export default ListMovies