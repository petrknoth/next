import React from 'react'
import { Article, Content, Section, Button } from 'components'
import rdData from 'data/rd.yml'

import { Row, Col } from 'reactstrap'

import './services.scss'
import Testimonial from '../../components/testimonial'

const RdPage = () => (
  <Article nav>
    <h1>{rdData.title}</h1>
    <Section caption={rdData.short.subtitle}>
      <p className="h4 text-center">{rdData.short.subtitle}</p>
      <figure>
        <img
          className="img-fluid"
          src={rdData.short.screenshot}
          alt={`${rdData.short.subtitle}'s screenshot`}
        />
        <figcaption className="text-center">
          <Content markdown>{rdData.short.caption}</Content>
        </figcaption>
      </figure>

      <Row className="pt-5">
        <Col xs="12" md="4">
          <figure className="d-flex align-items-center justify-content-center service-section-logo">
            <img
              className="img-fluid"
              src={rdData.short.logo1}
              alt={`${rdData.short.logo1}'s logo`}
            />
          </figure>
          <span className="h6 text-center d-block">
            {rdData.short.caption1}
          </span>
        </Col>

        <Col xs="12" md="4">
          <figure className="d-flex align-items-center justify-content-center service-section-logo">
            <img
              className="img-fluid"
              src={rdData.short.logo2}
              alt={`${rdData.short.logo2}'s logo`}
            />
          </figure>
          <span className="h6 text-center d-block">
            {rdData.short.caption2}
          </span>
        </Col>

        <Col xs="12" md="4">
          <figure className="d-flex align-items-center justify-content-center service-section-logo">
            <img
              className="img-fluid"
              src={rdData.short.logo3}
              alt={`${rdData.short.logo3}'s logo`}
            />
          </figure>
          <span className="h6 text-center d-block">
            {rdData.short.caption3}
          </span>
        </Col>
      </Row>

      <Content className="py-5" markdown>
        {rdData.short.description}
      </Content>

      <Testimonial {...rdData.short.testimonial} />
    </Section>

    <Section
      caption={rdData.package.title}
      key={rdData.package.title}
      id={rdData.package.title}
    >
      <h2>{rdData.package.title}</h2>
      <p className="h4 ">{rdData.package.subtitle}</p>
      <Content markdown>{rdData.package.description}</Content>
      <div className="text-center">
        <Button color="primary" outline href={rdData.package.button1}>
          {rdData.package.caption1}
        </Button>
        <Button color="primary" href={rdData.package.button2} className="ml-2">
          {rdData.package.caption2}
        </Button>
      </div>
    </Section>

    <Section
      caption={rdData.premium.title}
      key={rdData.premium.title}
      id={rdData.premium.title}
    >
      <h2>{rdData.premium.title}</h2>
      <p className="h4 ">{rdData.premium.subtitle}</p>
      <Content markdown>{rdData.premium.description}</Content>
      <div className="text-center">
        <Button color="primary" outline href={rdData.premium.button1}>
          {rdData.premium.caption1}
        </Button>
        <Button color="primary" href={rdData.premium.button2} className="ml-2">
          {rdData.premium.caption2}
        </Button>
      </div>
    </Section>

    <Section
      caption={rdData.documentation.title}
      key={rdData.documentation.title}
      id={rdData.documentation.title}
    >
      <h2>{rdData.documentation.title}</h2>
      <p className="h4 ">{rdData.documentation.subtitle}</p>
      <Content markdown>{rdData.documentation.description}</Content>
      <div className="text-center">
        <Button color="primary" outline href={rdData.documentation.button1}>
          {rdData.documentation.caption1}
        </Button>
        <Button
          color="primary"
          href={rdData.documentation.button2}
          className="ml-2"
        >
          {rdData.documentation.caption2}
        </Button>
      </div>
    </Section>
  </Article>
)

export default RdPage