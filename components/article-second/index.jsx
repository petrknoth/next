import React from 'react'
import './article-second.scss'
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

const ArticleSecond = () => (
  <Section id="core-aggregation" caption="CORE aggregation">
    <h3>{researchData.allarticles.aggregation.title}</h3>
    <Card className="article-second-card mb-4">
      <CardBody color="primary">
        <CardTitle>
          <Content markdown>
            {researchData.allarticles.aggregation.cardtitle1}
          </Content>
        </CardTitle>
        <CardText>
          <Content markdown>
            {researchData.allarticles.aggregation.cardtext1}
          </Content>
        </CardText>
        <CardText>
          <Row>
            <Col xs="12" sm="7" md="8">
              <Content className="article-notation p-1" markdown>
                {researchData.allarticles.aggregation.cardfooter1}
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
    <Card className="article-second-card">
      <CardBody color="primary">
        <CardTitle>
          <Content markdown>
            {researchData.allarticles.aggregation.cardtitle2}
          </Content>
        </CardTitle>
        <CardText>
          <Content markdown>
            {researchData.allarticles.aggregation.cardtext2}
          </Content>
        </CardText>
        <CardText>
          <Row>
            <Col xs="12" sm="7" md="8">
              <Content className="article-notation p-1" markdown>
                {researchData.allarticles.aggregation.cardfooter2}
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

export default ArticleSecond
