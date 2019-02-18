import React from 'react'
import {
  Article,
  Content,
  Section,
  Button,
  KeyFeatureList,
  KeyFeature,
} from 'components'
import rdData from 'data/rd.yml'

import './services.scss'
import Testimonial from '../../components/testimonial'

const RdPage = () => (
  <Article nav>
    <h1>{rdData.title}</h1>
    <p className="h4 text-center pt-5">{rdData.tagline}</p>

    <figure>
      <img
        className="img-fluid"
        src={rdData.screenshot.source}
        alt={`${rdData.title}'s screenshot`}
      />
      <figcaption className="text-center">
        <Content markdown>{rdData.screenshot.caption}</Content>
      </figcaption>
    </figure>

    <KeyFeatureList className="pt-5">
      {rdData.features.map(({ title, picture }) => (
        <KeyFeature title={title} icon={picture} key={title}>
          <Content markdown>{title}</Content>
        </KeyFeature>
      ))}
    </KeyFeatureList>

    <Content className="py-5" markdown>
      {rdData.description}
    </Content>

    <Testimonial {...rdData.testimonial} />

    <Section caption={rdData.package.title} id="#what-is-included">
      <h2>{rdData.package.title}</h2>
      <Content markdown>{rdData.package.description}</Content>
      <div className="text-center">
        <Button
          color="primary"
          outline
          href={rdData.package.actions.primary.url}
        >
          {rdData.package.actions.primary.caption}
        </Button>
        <Button
          color="primary"
          href={rdData.package.actions.secondary.url}
          className="ml-2"
        >
          {rdData.package.actions.secondary.caption}
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
        <Button
          color="primary"
          outline
          href={rdData.premium.actions.primary.url}
        >
          {rdData.premium.actions.primary.caption}
        </Button>
        <Button
          color="primary"
          href={rdData.premium.actions.secondary.url}
          className="ml-2"
        >
          {rdData.premium.actions.secondary.caption}
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
        <Button
          color="primary"
          outline
          href={rdData.documentation.actions.primary.url}
        >
          {rdData.documentation.actions.primary.caption}
        </Button>
        <Button
          color="primary"
          href={rdData.documentation.actions.secondary.url}
          className="ml-2"
        >
          {rdData.documentation.actions.secondary.caption}
        </Button>
      </div>
    </Section>
  </Article>
)

export default RdPage
