import React, { Component } from 'react'
import {
  CustomInput,
  Form,
  FormGroup,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
} from 'reactstrap'
import Link from '../link'
import './cookies.scss'

class Cookies extends Component {
  constructor(props) {
    super(props)
    this.applyCookies = this.applyCookies.bind(this)
  }

  applyCookies() {
    console.log('apply cookies & close tab')
    this.props = false
  }

  render() {
    const action = () => console.log('Form action performed')
    const method = 'POST'
    const onSubmit = e => {
      e.preventDefault()
      console.log('Submit button pressed - onSubmit() - cookies component')
      const x = document.getElementById('cookies-settings')
      if (x.classList.contains('cookies-settings'))
        x.classList.add('cookies-settings-hide')
      else console.log('there are no cookies-settings class')
    }

    if (!this.props) return null
    return (
      <Form action={action} method={method} onSubmit={onSubmit}>
        <Card id="cookies-settings" className="slideInUp cookies-settings">
          <CardHeader className="cookies-header">Cookie settings</CardHeader>
          <CardBody>
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
          </CardBody>
          <CardFooter>
            <div className="text-md-center">
              <Button
                id="apply-cookies-btn2"
                title="Apply cookies"
                onClick={onSubmit}
                color="primary"
                type="button"
                className="mr-3"
              >
                Save & Close
              </Button>
              <Link href="~privacy#cookies">Read more</Link>
            </div>
          </CardFooter>
        </Card>
      </Form>
    )
  }
}

export default Cookies
