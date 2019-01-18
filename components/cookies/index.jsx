import React, { Fragment } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  CustomInput,
  Form,
  FormGroup,
} from 'reactstrap'
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
          <Container>
            <div className="cookies px-3">
              <Row>
                <Col xs="12" sm="6" className="text-left">
                  <p className="hero-text text-left m-1">Cookie settings</p>
                </Col>
                <Col xs="12" sm="6" className="text-right">
                  <Button
                    color="link"
                    type="button"
                    title="Close"
                    onClick={this.close}
                  >
                    Save and close
                  </Button>
                </Col>
              </Row>
              <div className="switch-block py-3">
                <Row>
                  <Col xs="12" sm="4" className="text-center">
                    <p className="h6">
                      <strong>
                        <em>Essential cookies</em>
                      </strong>
                      <br />
                      <em>&nbsp;</em>
                    </p>
                    <Form>
                      <FormGroup>
                        <div>
                          <CustomInput
                            type="checkbox"
                            id="exampleCustomCheckbox3"
                            label=""
                            checked
                          />
                        </div>
                      </FormGroup>
                    </Form>
                    <p className="text-justify">
                      <strong>Required</strong> to make the site work, and to
                      save the options you make here
                    </p>
                  </Col>
                  <Col xs="12" sm="4" className="text-center">
                    <p className="h6">
                      <strong>
                        <em>Enchanced cookies</em>
                      </strong>
                      <br />
                      <em>(we never see this data)</em>
                    </p>
                    <Form>
                      <FormGroup>
                        <div>
                          <CustomInput
                            type="switch"
                            id="exampleCustomSwitch2"
                            name="customSwitch"
                            label="Off/On"
                          />
                        </div>
                      </FormGroup>
                    </Form>
                    <p className="text-justify">
                      Let the site remember certain choices you make, to make
                      tasks easier.
                    </p>
                  </Col>
                  <Col xs="12" sm="4" className="text-center">
                    <p className="h6">
                      <strong>
                        <em>Analytics</em>
                      </strong>
                      <br />
                      <em>(anonymous)</em>
                    </p>
                    <Form>
                      <FormGroup>
                        <div>
                          <CustomInput
                            type="switch"
                            id="exampleCustomSwitch3"
                            label="Off/On"
                          />
                        </div>
                      </FormGroup>
                    </Form>
                    <p className="text-justify">
                      Help us measure site performance and make improvements.
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
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
