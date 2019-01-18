import React, { Fragment } from 'react'
import { Button, CustomInput, Form, FormGroup } from 'reactstrap'
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
          <div className="cookies p-3">
            <span className="hero-text text-left m-1">Cookie settings</span>
            <Button
              color="primary"
              type="button"
              title="Close"
              onClick={this.close}
              outline
            >
              Save
            </Button>

            <div className="py-3">
              <Form>
                <FormGroup>
                  <CustomInput
                    type="switch"
                    label="Essential cookies"
                    checked
                    disabled
                  />
                  <details className="ml-3" style={{ display: 'none' }}>
                    <summary>What are these?</summary>
                    <p>
                      <strong>Required</strong> to make the site work, and to
                      save the options you make here
                    </p>
                  </details>
                </FormGroup>
                <FormGroup>
                  <CustomInput
                    type="switch"
                    id="exampleCustomSwitch"
                    label="Analytics"
                  />
                  <details className="ml-3" style={{ display: 'none' }}>
                    <summary>What are these?</summary>
                    <p>
                      Lets us (anonymously) track site usage, so that we can
                      measure performance and make improvements.
                    </p>
                  </details>
                </FormGroup>
              </Form>
              <Button
                onClick={this.close}
                color="primary"
                type="button"
                className="d-block mt-3 ml-3"
              >
                Save
              </Button>
              <Button color="link" type="button" className="d-block mt-3">
                Read more about how we use cookies
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
