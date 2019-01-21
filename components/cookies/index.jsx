import React from 'react'
import { Button, CustomInput, Form, FormGroup } from 'reactstrap'
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
    // if (!this.state.isOpen) return null
    if (!this.props) return null
    return (
      <div className="cookies-settings p-3">
        <span className="cookies-header m-1">Cookie settings</span>
        <Button
          id="apply-cookies-btn1"
          color="primary"
          type="button"
          title="Apply cookies"
          onClick={this.props.applyCookies}
          outline
        >
          Save
        </Button>

        <div className="py-3">
          <Form>
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
          </Form>
          <Button
            id="apply-cookies-btn2"
            title="Apply cookies"
            onClick={this.applyCookies}
            color="primary"
            type="button"
            className="d-block my-3 ml-3"
          >
            Save
          </Button>
          <a href="privacy#cookies">Read more about how we use cookies</a>
        </div>
      </div>
    )
  }
}

export default Cookies
