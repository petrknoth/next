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
                  <p className="h4 m-1">Cookie settings</p>
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
                    <span className="h6">
                      <strong>
                        <em>Essential cookies</em>
                      </strong>
                    </span>
                    <br />
                    <span>
                      <em>&nbsp;</em>
                    </span>
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
                  </Col>
                  <Col xs="12" sm="4" className="text-center">
                    <span className="h6">
                      <strong>
                        <em>Enchanced cookies</em>
                      </strong>
                    </span>
                    <br />
                    <span>
                      <em>(we never see this data)</em>
                    </span>
                    <Form>
                      <FormGroup>
                        <div>
                          <CustomInput
                            type="switch"
                            id="exampleCustomSwitch2"
                            name="customSwitch"
                            label="On"
                          />
                        </div>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xs="12" sm="4" className="text-center">
                    <span className="h6">
                      <strong>
                        <em>Analytics</em>
                      </strong>
                    </span>
                    <br />
                    <span>
                      <em>(anonymous)</em>
                    </span>
                    <Form>
                      <FormGroup>
                        <div>
                          <CustomInput
                            type="switch"
                            id="exampleCustomSwitch3"
                            label="Off"
                            disabled
                          />
                        </div>
                      </FormGroup>
                    </Form>
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
