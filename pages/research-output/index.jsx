import React from 'react'
import './research.scss'
import {
  Row,
  Col,
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
import { Article, Content, Section } from 'components'
import researchData from '../../data/research.yml'

const ResearchOutput = () => (
  <Article nav tag="main">
    <h1>{researchData.title}</h1>

    <Section id="featured-articles" caption="Featured articles">
      <Row>
        <Col xs="12" lg="9" tag="section">
          <h2>{researchData.featuredarticles.title}</h2>
          <Content markdown>{researchData.featuredarticles.content}</Content>
        </Col>
      </Row>
    </Section>

    <Section id="all-articles" caption="All articles">
      <h2>{researchData.allarticles.title}</h2>

      <Section id="core-vision" caption="CORE vision">
        <h3>{researchData.allarticles.vision.title}</h3>
        <Row>
          <Col xs="12" lg="9" tag="section">
            <Card className="card-border">
              <CardHeader className="card-header">
                <Content markdown>
                  {researchData.allarticles.vision.cardheader}
                </Content>
              </CardHeader>
              <CardBody color="primary">
                <CardTitle>
                  <Content markdown>
                    {researchData.allarticles.vision.cardtitle}
                  </Content>
                </CardTitle>
                <CardText>
                  <Content markdown>
                    {researchData.allarticles.vision.cardtext}
                  </Content>
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
          </Col>
        </Row>
      </Section>
    </Section>
  </Article>
)

export default ResearchOutput
