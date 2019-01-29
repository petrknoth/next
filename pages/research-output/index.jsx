import React from 'react'
import './research.scss'
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Article, Content, Section } from 'components'
import researchData from '../../data/research.yml'

const ResearchOutput = () => (
  <Article nav tag="main">
    <h1>{researchData.title}</h1>

    <Section id="featured-articles" caption="Featured articles" tag="div">
      <Row>
        <Col xs="12" sm="9" tag="section">
          <h2>{researchData.featuredarticles.title}</h2>
          <Content markdown>{researchData.featuredarticles.content}</Content>
        </Col>
      </Row>
    </Section>

    <Section id="all-articles" caption="All articles">
      <h2>{researchData.allarticles.title}</h2>
      <Section>
        <h3>{researchData.allarticles.vision.title}</h3>
        <Row>
          <Col xs="12" sm="9" tag="section">
            <Content markdown>
              {researchData.allarticles.vision.content}
            </Content>
            <UncontrolledDropdown className="text-right">
              <DropdownToggle caret color="primary" outline>
                Cite
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </Section>
    </Section>
  </Article>
)

export default ResearchOutput
