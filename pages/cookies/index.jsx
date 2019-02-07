import React from 'react'
import { Row, Col, Form, FormGroup, CustomInput, Button } from 'reactstrap'
import { Article, Content, Section } from 'components'
import cookiesData from 'data/cookies.yml'
import './cookies-page.scss'

class CookiesPage extends React.Component {
  constructor(props) {
    super(props)
    this.applyCookie = this.applyCookie.bind(this)
  }

  applyCookie() {
    console.log('apply cookies & close tab')
    this.props = false
  }

  render() {
    const action = () => console.log('Form action performed')
    const method = 'POST'
    const onSubmit = e => {
      e.preventDefault()
      console.log('Submit button pressed onSubmit() - cookies page')
    }

    if (!this.props) return null
    return (
      <div>
        <Article container nav tag="main">
          <h1>{cookiesData.title}</h1>

          <Section id="cookie-page" caption="Your cookie settings" tag="div">
            <Row>
              <Col xs="12" lg="9" tag="section">
                <Form action={action} method={method} onSubmit={onSubmit}>
                  <div className="cookies-settings-page p-4">
                    <p className="h5">{cookiesData.settings.title}</p>
                    <Content markdown>
                      {cookiesData.settings.description}
                    </Content>
                    <Row className="pt-3">
                      <Col xs="6" sm="4" tag="section">
                        <FormGroup>
                          <CustomInput
                            id="essential-cookies-page"
                            name="essential-cookies-page"
                            type="switch"
                            label="Essential cookies"
                            checked
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="6" sm="8" tag="section">
                        <FormGroup>
                          <Content markdown>
                            {cookiesData.settings.option1.description}
                          </Content>
                        </FormGroup>
                        <hr />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" sm="4" tag="section">
                        <FormGroup>
                          <CustomInput
                            id="enhanced-cookies-page"
                            name="enhanced-cookies-page"
                            type="switch"
                            label="Enhanced cookies"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="6" sm="8" tag="section">
                        <FormGroup>
                          <Content markdown>
                            {cookiesData.settings.option2.description}
                          </Content>
                        </FormGroup>
                        <hr />
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="6" sm="4" tag="section">
                        <FormGroup>
                          <CustomInput
                            id="analytics-cookies-page"
                            name="analytics-cookies-page"
                            type="switch"
                            label="Analytics"
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="6" sm="8" tag="section">
                        <FormGroup>
                          <Content markdown>
                            {cookiesData.settings.option3.description}
                          </Content>
                        </FormGroup>
                        <FormGroup>
                          <div className="text-right">
                            <Button
                              id="apply-cookies-btn4"
                              title="Apply cookies"
                              onClick={onSubmit}
                              color="primary"
                              type="button"
                            >
                              Save
                            </Button>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Col>
            </Row>
          </Section>

          <Section id="use-cookies" caption="How we use cookies" tag="div">
            <Row>
              <Col xs="12" lg="9" tag="section">
                <h3>{cookiesData.use.title}</h3>
                <Content markdown>{cookiesData.use.description}</Content>
                <Content markdown className="mt-5">
                  {cookiesData.use.option1.title}
                </Content>
                <Content markdown>
                  {cookiesData.use.option1.description}
                </Content>
                <Content markdown>{cookiesData.use.option1.table}</Content>
                <Content markdown className="mt-5">
                  {cookiesData.use.option2.title}
                </Content>
                <Content markdown>
                  {cookiesData.use.option2.description}
                </Content>
                <Content markdown>{cookiesData.use.option2.table}</Content>
                <Content markdown className="mt-5">
                  {cookiesData.use.option3.title}
                </Content>
                <Content markdown>
                  {cookiesData.use.option3.description}
                </Content>
                <Content markdown>{cookiesData.use.option3.table}</Content>
              </Col>
            </Row>
          </Section>

          <Section id="privacy-notice" caption="Privacy notice" tag="div">
            <Row>
              <Col xs="12" lg="9" tag="section">
                <h3>{cookiesData.privacy.title}</h3>
                <Content markdown>{cookiesData.privacy.description}</Content>
              </Col>
            </Row>
          </Section>
        </Article>
      </div>
    )
  }
}

export default CookiesPage
