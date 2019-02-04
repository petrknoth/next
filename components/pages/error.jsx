import React, { Component } from 'react'
import { Button } from '../base'
import { Article } from '../layout'

class ErrorPage extends Component {
  static getInitialProps({ res, err }) {
    // eslint-disable-next-line no-nested-ternary
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Article>
        <h1>Uh-oh</h1>
        <p>The page you were looking for could not be found.</p>
        <p>To help you find what you are looking for, why not</p>
        <p>
          <Button href="~home" color="primary">
            Go back to the homepage
          </Button>
          {' or '}
          <Button href="~contact" color="primary" outline>
            Contact us
          </Button>
        </p>
      </Article>
    )
  }
}

export default ErrorPage
