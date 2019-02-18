import React from 'react'
import { Article, Content, Section, Button } from 'components'
import rdData from 'data/rd.yml'

const RdPage = () => (
  <Article nav>
    <h1>{rdData.title}</h1>
    <Section caption={rdData.short.subtitle}>
      <h4 className="h4 text-center">{rdData.short.subtitle}</h4>
      <figure className="d-flex align-items-center justify-content-center">
        <img
          className="img-fluid"
          src={rdData.short.screenshot}
          alt={`${rdData.short.subtitle}'s screenshot`}
        />
      </figure>
      <Content className="text-center" markdown>
        {rdData.short.description}
      </Content>
    </Section>

    <Section
      caption={rdData.included.title}
      key={rdData.included.title}
      id={rdData.included.title}
    >
      <h2>{rdData.included.title}</h2>
      <h4 className="h4 ">{rdData.included.subtitle}</h4>
      <Content markdown>{rdData.included.description}</Content>
      <div className="text-center">
        <Button color="primary" outline href={rdData.included.button1}>
          {rdData.included.caption1}
        </Button>
        <Button color="primary" href={rdData.included.button2} className="ml-2">
          {rdData.included.caption2}
        </Button>
      </div>
    </Section>

    <Section
      caption={rdData.premium.title}
      key={rdData.premium.title}
      id={rdData.premium.title}
    >
      <h2>{rdData.premium.title}</h2>
      <h4 className="h4 ">{rdData.premium.subtitle}</h4>
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
      <h4 className="h4 ">{rdData.documentation.subtitle}</h4>
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
