import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap';

const Loader = (props) => {
  const loading = props.loading
  return (
    loading ? (
      <Container>
        <Row>
          <Col>Loading...</Col>
        </Row>
      </Container>
    ):null
  )
}

Loader.propTypes = {
  loading: PropTypes.bool
}

export default Loader