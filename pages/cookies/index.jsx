import React from 'react'
import { Row, Col } from 'reactstrap'
import { Article, Content, Section } from 'components'
import cookiesData from 'data/cookies.yml'
import './cookies-page.scss'

const CookiesPage = () => (
  <Article container nav tag="main">
    <h1>{cookiesData.title}</h1>

    <Section id="cookie-setting" caption="Your cookie settings" tag="div">
      <Row>
        <Col xs="12" lg="9" tag="section">
          <div className="cookies-page">
            <p className="h5">{cookiesData.settings.title}</p>
            <Content markdown>{cookiesData.settings.description}</Content>
            <Content markdown>{cookiesData.settings.option1.title}</Content>
            <Content markdown>
              {cookiesData.settings.option1.description}
            </Content>
            <Content markdown>{cookiesData.settings.option2.title}</Content>
            <Content markdown>
              {cookiesData.settings.option2.description}
            </Content>
            <Content markdown>{cookiesData.settings.option3.title}</Content>
            <Content markdown>
              {cookiesData.settings.option3.description}
            </Content>
          </div>
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
          <Content markdown>{cookiesData.use.option1.description}</Content>
          <Content markdown>{cookiesData.use.option1.table}</Content>
          <Content markdown className="mt-5">
            {cookiesData.use.option2.title}
          </Content>
          <Content markdown>{cookiesData.use.option2.description}</Content>
          <Content markdown>{cookiesData.use.option2.table}</Content>
          <Content markdown className="mt-5">
            {cookiesData.use.option3.title}
          </Content>
          <Content markdown>{cookiesData.use.option3.description}</Content>
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
)

export default CookiesPage
