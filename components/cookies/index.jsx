import React, { Fragment } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  CustomInput,
  Form,
  FormGroup,
  UncontrolledCollapse,
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
                      &nbsp;
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
                    <Button
                      className="no-text-decoration mb-1"
                      color="link"
                      type="button"
                      id="toggler1"
                    >
                      &#9654; &nbsp; What are these?
                    </Button>
                    <UncontrolledCollapse toggler="#toggler1">
                      <p>
                        <strong>Required</strong> to make the site work, and to
                        save the options you make here
                      </p>
                    </UncontrolledCollapse>
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
                    <Button
                      className="no-text-decoration mb-1"
                      color="link"
                      type="button"
                      id="toggler2"
                    >
                      &#9654; &nbsp; What are these?
                    </Button>
                    <UncontrolledCollapse toggler="#toggler2">
                      <p>
                        Let the site remember certain choices you make, to make
                        tasks easier.
                      </p>
                    </UncontrolledCollapse>
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
                    <Button
                      className="no-text-decoration mb-1"
                      color="link"
                      type="button"
                      id="toggler3"
                    >
                      &#9654; &nbsp; What are these?
                    </Button>
                    <UncontrolledCollapse toggler="#toggler3">
                      <p>
                        Help us measure site performance and make improvements.
                      </p>
                    </UncontrolledCollapse>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col xs="12" sm="4" className="text-center" />
                  <Col xs="12" sm="4" className="text-center">
                    <Button
                      color="primary"
                      type="button"
                      className="btn-block mt-3"
                    >
                      Save
                    </Button>
                  </Col>
                  <Col
                    xs="12"
                    sm="4"
                    className="text-sm-right text-center my-3"
                  >
                    <Button color="link" type="button">
                      Read more about how we use cookies
                    </Button>
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
