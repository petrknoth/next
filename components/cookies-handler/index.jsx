import React, { Fragment } from 'react'
import { Button, CustomInput, Form, FormGroup } from 'reactstrap'
import './cookies-handler.scss'
import { bind } from 'decko'

class CookiesHandler extends React.Component {
  state = { isOpen: true }

  @bind
  close() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <Fragment>
        {isOpen && !null && (
          <div className="cookies p-3">
            <span className="cookies-header m-1">Cookie settings</span>
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
                  <details className="ml-4">
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
                  <details className="ml-4">
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
              <a
                href="https://www.google.com/"
                className="d-block mt-3 text-center"
              >
                Read more about how we use cookies
              </a>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

export default CookiesHandler
