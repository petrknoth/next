import React from 'react'
import { Button } from '../base'
import { Section, Content } from '../layout'

const renderSections = (sections, Component) =>
  sections.map(({ id, title, ...restProps }) => (
    <Component key={id} id={id} title={title} {...restProps} />
  ))

const DescriptionSection = ({
  id,
  title,
  description = null,
  content = null,
  children = null,
  action = null,
  sections = [],
  subsectionComponent = DescriptionSection,
}) => {
  const actionComponent = action && (
    <Button href={action.url} color="primary" outline>
      {action.caption}
    </Button>
  )

  const bodyComponent = children || (
    <Content markdown>{content || description}</Content>
  )

  return (
    <Section id={id}>
      <h2>{title}</h2>
      {bodyComponent}
      {actionComponent}
      {renderSections(sections, subsectionComponent)}
    </Section>
  )
}

export default DescriptionSection
