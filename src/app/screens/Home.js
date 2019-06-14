import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMovies, fetchStart } from '../actions/index'
import ListMovies from '../components/ListMovies'
import FormSearch from '../components/FormSearch'
import Loader from '../components/Loader'
import ShowError from '../components/ShowError'

class Home extends React.Component {

  componentDidMount = () => {
    this.props.fetchStart()
    this.props.fetchMovies()
  }

  render () {
    const { loading, movies, error } = this.props.movies

    return (
      <React.Fragment>
        <FormSearch />
        <Loader loading={loading}/>
        <ShowError error={error}/>
        <ListMovies movies={movies}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (movies) => {
  return movies
}

const mapDispathToProps = (dispatch) => {
  return bindActionCreators({
    fetchMovies,
    fetchStart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispathToProps)(Home)