import React from 'react'
import { Button } from 'reactstrap'
import { Article, Content, Section } from 'components'
import rdData from 'data/rd.yml'

const RdPage = () => (
  <Article nav>
    <h1>{rdData.title}</h1>

    {rdData.sections.map(rdGroup => (
      <Section key={rdGroup.id} id={rdGroup.id} caption={rdGroup.title}>
        <h2 className="text-center">{rdGroup.title}</h2>

        <h4 className="h4 text-center">{rdGroup.propositiontitle}</h4>

        <figure className="d-flex align-items-center justify-content-center">
          <img
            src={rdGroup.propositionscreenshot}
            alt={`${rdGroup.propositiontitle}'s screenshot`}
          />
        </figure>

        <Content className="text-center" markdown>
          {rdGroup.propositiondescription}
        </Content>

        <Content markdown>{rdGroup.includeddescription}</Content>

        <div className="text-center">
          <Button color="primary" outline href={rdGroup.includedbutton}>
            {rdGroup.includedcaption}
          </Button>
          <Button
            color="primary"
            href={rdGroup.includedbutton}
            className="ml-2"
          >
            {rdGroup.includedcaption}
          </Button>
        </div>
      </Section>
    ))}
  </Article>
)

export default RdPage
