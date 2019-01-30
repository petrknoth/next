import React from 'react'
import './research.scss'
import { Row, Col } from 'reactstrap'
import { Article, Content, Section } from 'components'
import researchData from '../../data/research.yml'
import ArticleFirst from '../../components/article-first'
import ArticleSecond from '../../components/article-second'
import ArticleThird from '../../components/article-third'

const ResearchOutput = () => (
  <Article nav tag="main">
    <h1>{researchData.title}</h1>

    <Section id="featured-articles" caption="Featured articles">
      <Row>
        <Col xs="12" lg="9">
          <h2>{researchData.featuredarticles.title}</h2>
          <Content markdown>{researchData.featuredarticles.content}</Content>
        </Col>
      </Row>
    </Section>
    <Section id="all-articles" caption="All articles">
      <Row>
        <Col xs="12" lg="9">
          <ArticleFirst />
          <ArticleSecond />
          <ArticleThird />
        </Col>
      </Row>
    </Section>
  </Article>
)

export default ResearchOutput
