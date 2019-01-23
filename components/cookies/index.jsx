import React from 'react'
import { Button, CustomInput, Form, FormGroup } from 'reactstrap'
import Link from '../link'
import './cookies.scss'

// import { bind } from 'decko'

class Cookies extends React.Component {
  constructor(props) {
    super(props)
    this.applyCookies = this.applyCookies.bind(this)
  }

  applyCookies() {
    console.log('apply cookies & close tab')
    this.props = false
  }

  // state = { isOpen: true }
  // @bind
  // applyCookies() {
  //   console.log('apply cookies & close tab')
  //   this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  // }

  render() {
    const action = () => console.log('Form action performed')
    const method = 'POST'
    const onSubmit = () => console.log('Submit button pressed')

    // if (!this.state.isOpen) return null
    if (!this.props) return null
    return (
      <div className="cookies-settings p-3">
        <span className="cookies-header m-1">Cookie settings</span>

        <div>
          <Form action={action} method={method} onSubmit={onSubmit}>
            <FormGroup>
              <CustomInput
                id="essential-cookies"
                name="essential-cookies"
                type="switch"
                label="Essential cookies"
                checked
                disabled
              />
              <details className="ml-4">
                <summary>What are these?</summary>
                <p>
                  <strong>Required</strong> to make the site work, and to save
                  the options you make here
                </p>
              </details>
            </FormGroup>
            <FormGroup>
              <CustomInput
                id="analytics"
                name="analytics"
                type="switch"
                label="Analytics"
              />
              <details className="ml-4">
                <summary>What are these?</summary>
                <p>
                  Lets us (anonymously) track site usage, so that we can measure
                  performance and make improvements.
                </p>
              </details>
            </FormGroup>
            <FormGroup>
              <Button
                id="apply-cookies-btn2"
                title="Apply cookies"
                onClick={onSubmit}
                color="primary"
                type="button"
                className="mx-3"
              >
                Save & Close
              </Button>
              <Link href="~privacy#cookies">Read more</Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}

export default Cookies
