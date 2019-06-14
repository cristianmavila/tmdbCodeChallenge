import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovies, fetchStart, SearchMovie } from '../actions/index'
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap'

class FormSearch extends React.Component {

  state = {
    textSearch: '',
    sent: false
  }

  handleSearch = (event) => {
    this.setState({ textSearch: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({ sent: true });
    this.props.fetchStart()
    this.props.SearchMovie(this.state.textSearch)
    event.preventDefault()
  }

  clearSearch = () => {
    this.props.fetchStart()
    this.props.fetchMovies()
    this.setState({
      sent: false,
      textSearch: ''
    });
  }

  render = () => {
    return (
      <Container>
        <form id='loginForm' onSubmit={this.handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for a movie"
              aria-label="Search for a movie"
              value= { this.state.textSearch }
              onChange = { this.handleSearch }
            />
            <InputGroup.Append>
              <Button
                variant="dark"
                type="submit">Search</Button>
              { this.state.sent ? (
              <Button
                variant="link"
                onClick={this.clearSearch}
                type="button">Clear</Button>
              ): null }
            </InputGroup.Append>
          </InputGroup>
        </form>
      </Container>
    )
  }
}

const mapDispathToProps = (dispatch) => {
  return bindActionCreators({
    SearchMovie,
    fetchStart,
    fetchMovies
  }, dispatch)
}

export default connect(null, mapDispathToProps)(FormSearch)