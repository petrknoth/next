import React from 'react'
import { Button } from '../base'
import { Content, Section } from '../layout'

import './join.scss'

const JoinSection = ({
  id,
  title,
  lead,
  action,
  note,
  className = '',
  ...restProps
}) => (
  <Section id={id} className={`join-section ${className}`} {...restProps}>
    <h2>{title}</h2>
    <Content className="join-section-lead" markdown>
      {lead}
    </Content>
    <Button href="~join" className="join-core-button" size="lg">
      {action}
    </Button>
    <footer className="join-section-note">
      <Content markdown>{note}</Content>
    </footer>
  </Section>
)

export default JoinSection
