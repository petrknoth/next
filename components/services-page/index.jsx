import React from 'react'
import {
  Article,
  Content,
  Section,
  Button,
  KeyFeatureList,
  KeyFeature,
} from 'components'

import './services-page.scss'
import Testimonial from '../testimonial'

const ServicesPages = ({
  title,
  tagline,
  screenshot,
  features,
  testimonial,
  freePackage,
}) => (
  <Article nav>
    <h1>{title}</h1>
    <p className="lead">{tagline}</p>

    <figure>
      <img
        className="img-fluid"
        src={screenshot.source}
        alt={`${title}'s screenshot`}
      />
      <figcaption className="text-center">
        <Content markdown>{screenshot.caption}</Content>
      </figcaption>
    </figure>

    <KeyFeatureList className="pt-5">
      {features.map(feature => (
        <KeyFeature
          title={feature.title}
          icon={feature.picture}
          key={feature.title}
        >
          <Content markdown>{feature.title}</Content>
        </KeyFeature>
      ))}
    </KeyFeatureList>

    <Content className="py-5" markdown>
      {features.description}
    </Content>

    <Testimonial {...testimonial} />

    <Section caption={freePackage.title} id="#what-is-included">
      <h2>{freePackage.title}</h2>
      <Content markdown>{freePackage.description}</Content>
      <div className="text-center">
        <Button color="primary" outline href={freePackage.actions.primary.url}>
          {freePackage.actions.primary.caption}
        </Button>
        <Button
          color="primary"
          href={freePackage.actions.secondary.url}
          className="ml-2"
        >
          {freePackage.actions.secondary.caption}
        </Button>
      </div>
    </Section>
  </Article>
)

export default ServicesPages
