import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { bind } from 'decko'

import { Hero, KeyFeature, KeyFeatureList, Switcher, Content } from 'components'
import { Page, Section } from 'components/layout'
import { JoinSection } from 'components/sections'
import SearchForm from 'components/search'
import Link from 'components/link'

import page from 'data/home.yml'
import { sections as pageSections } from 'data/endorsements.yml'

import { extractTestimonials } from './about/endorsements'

import './index.scss'

const TestimonialsSwitcher = ({ items, limit, ...restProps }) => (
  <Switcher interval={10000} {...restProps}>
    {items
      .slice(0, limit)
      .filter(({ organization }) => organization)
      .map(({ id, content, author, organization }) => (
        <Switcher.Item
          id={id}
          title={organization.name}
          picture={`/static/images/logos/${organization.logo}`}
          key={id}
          className="home-switcher"
        >
          <blockquote className="blockquote">
            <Content markdown>{content}</Content>
            <footer className="blockquote-footer">
              {author.name}, {author.position}
            </footer>
          </blockquote>
        </Switcher.Item>
      ))}
  </Switcher>
)

class TestimonialsSection extends Component {
  state = { itemHash: '' }

  @bind
  handleItemChange(id) {
    this.setState({ itemHash: id ? `#${id}` : '' })
  }

  render() {
    const {
      id,
      title,
      description,
      items,
      limit,
      more,
      ...restProps
    } = this.props
    const { itemHash } = this.state
    return (
      <Section id={id} {...restProps}>
        <h3>{title}</h3>
        <p>{description}</p>
        <TestimonialsSwitcher
          items={items}
          limit={limit}
          onChange={this.handleItemChange}
        />
        {more && (
          <div className="mt-3 text-center">
            <Link href={`~endorsements${itemHash}`} passHref>
              <Button color="primary" outline>
                {more}
              </Button>
            </Link>
          </div>
        )}
      </Section>
    )
  }
}

const IndexPage = () => (
  <Page title={page.title} heading={null}>
    <Hero headline={page.hero.headline} tagline={page.hero.tagline}>
      <Section tag="div">
        <SearchForm placeholder="Search over 100,000,000 articles" />
      </Section>
    </Hero>

    <Section className="pb-section-lg">
      <h2 className="sr-only">{page.features.title}</h2>
      <KeyFeatureList>
        {page.features.children.map(({ title, description, picture }) => (
          <KeyFeature title={title} icon={picture} key={title}>
            <Content markdown>{description}</Content>
          </KeyFeature>
        ))}
      </KeyFeatureList>
    </Section>

    <JoinSection id="join-us" {...page.join} />

    <Section id="endorsements" className="home-endorsements-section">
      <h2 className="text-center">{page.endorsements.title}</h2>

      <TestimonialsSection
        id="enterprise-companies"
        title={page.endorsements.enterprise.title}
        description={page.endorsements.enterprise.description}
        items={extractTestimonials(
          pageSections.enterpriseCompanies.organizations.items
        )}
        limit={page.endorsements.enterprise.limit}
        more={page.endorsements.enterprise.more}
      />

      <TestimonialsSection
        id="academic-institutions"
        className="home-academic-institutions-section"
        title={page.endorsements.academic.title}
        description={page.endorsements.academic.description}
        items={extractTestimonials(
          pageSections.academicInstitutions.organizations.items
        )}
        limit={page.endorsements.enterprise.limit}
        more={page.endorsements.academic.more}
      />
    </Section>

    <Section id="partner-projects">
      <h2 className="text-center">{page.partnerProjects.title}</h2>
      <TestimonialsSwitcher
        items={extractTestimonials(pageSections.partners.organizations.items)}
      />
    </Section>
  </Page>
)

export default IndexPage
