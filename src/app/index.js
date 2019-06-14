import React from "react"
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import Home from './screens/Home'
import Detail from './screens/Detail'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Card }  from 'react-bootstrap'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Container>
        <Card style={{margin: 20}}>
          <Card.Body>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" component={Detail} />
            </Router>
          </Card.Body>
        </Card>
      </Container>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))