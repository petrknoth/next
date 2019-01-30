import React from 'react'
import './article-found.scss'
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap'
import { Content, Section } from 'components'
import researchData from '../../data/research.yml'

const ArticleFound = () => (
  <Section id="core-found" caption="CORE found">
    <p className="h5 mt-4">1 article found</p>
    <Card className="article-second-card mb-4">
      <CardBody color="primary">
        <CardTitle>
          <Content markdown>{researchData.allarticles.found.cardtitle}</Content>
        </CardTitle>
        <CardText>
          <Content markdown>{researchData.allarticles.found.cardtext}</Content>
        </CardText>
        <CardText>
          <Row>
            <Col xs="12" sm="7" md="8">
              <Content className="article-notation p-1" markdown>
                {researchData.allarticles.found.cardfooter}
              </Content>
            </Col>
            <Col xs="12" sm="5" md="4">
              <UncontrolledDropdown className="text-sm-right mt-2 mt-lg-0">
                <Button color="primary" outline>
                  PDF
                </Button>{' '}
                <DropdownToggle caret color="primary">
                  Cite
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>BibTex</DropdownItem>
                  <DropdownItem>Full citation</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Col>
          </Row>
        </CardText>
      </CardBody>
    </Card>
  </Section>
)

export default ArticleFound
