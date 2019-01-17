import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import './cookies.scss'
import { bind } from 'decko'

class CookiesHandler extends React.Component {
  state = { isClosed: true }

  @bind
  close() {
    this.setState(({ isClosed }) => ({ isClosed: !isClosed }))
  }

  render() {
    const { isClosed } = this.state
    return (
      <Fragment>
        {isClosed && (
          <div className="cookies">
            <div className="text-right">
              <Button
                color="link"
                type="button"
                title="Close"
                onClick={this.close}
              >
                X
              </Button>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

const Cookies = () => (
  <Fragment>
    <CookiesHandler />
  </Fragment>
)

export default Cookies
