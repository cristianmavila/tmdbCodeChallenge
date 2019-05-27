import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Row, Col } from 'react-bootstrap'

const ShowError = (props) => {
  return (
    props.error ? (
      <Row>
        <Col>
          <Alert variant="danger">
            {props.error}
          </Alert>
        </Col>
      </Row>
    ): null
  )
}

ShowError.propTypes = {
  error: PropTypes.string
}

export default ShowError