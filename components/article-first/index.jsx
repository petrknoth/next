import React from 'react'
import './article-first.scss'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap'
import { Content, Section } from 'components'
import researchData from '../../data/research.yml'

const ArticleFirst = () => (
  <Section id="core-vision" caption="CORE vision">
    <h3>{researchData.allarticles.vision.title}</h3>
    <Card className="card-border">
      <CardHeader className="card-header">
        <Content markdown>{researchData.allarticles.vision.cardheader}</Content>
      </CardHeader>
      <CardBody color="primary">
        <CardTitle>
          <Content markdown>
            {researchData.allarticles.vision.cardtitle}
          </Content>
        </CardTitle>
        <CardText>
          <Content markdown>{researchData.allarticles.vision.cardtext}</Content>
        </CardText>
        <UncontrolledDropdown className="text-right">
          <DropdownToggle caret color="primary" outline>
            Cite
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>BibTex</DropdownItem>
            <DropdownItem>Full citation</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardBody>
    </Card>
  </Section>
)

export default ArticleFirst
