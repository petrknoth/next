import React from 'react'
import { Button } from 'reactstrap'
import { Content } from '../content'
import { Section } from '../layout'
import Link from '../link'

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
    <Link href={action.url} passHref>
      <Button outline color="primary">
        {action.caption}
      </Button>
    </Link>
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
