{% extends 'CoreWebBundle::coreweblayout.html.twig' %} {% block title %}CORE{% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/index.scss' %}   {% endstylesheets %} {% endblock %} {% block content\_header '' %} {% block content %} {{ parent() }}

{% include "CoreSearchBundle:Components:searchformheader.html.twig" %}

# Aggregating the world’s open access research papers

We offer seamless access to millions of open access research papers, enrich the collected data for text-mining and provide unique services to the research community.

[Read more]({{ path('_core_about_main') }}) [Join us]({{path('_core_join')}})

[

{% image '@CoreCommonBundle/Resources/public/images/globe\_index.png' %} ![CORE Services home image]({{ asset_url }}) {% endimage %}

Powerful insights for data providers

]({{path('_core_services_main')}}#dashboard)

[

{% image '@CoreCommonBundle/Resources/public/images/api\_index.png' %} ![CORE API home image]({{ asset_url }}) {% endimage %}

Unique datasets and API to conduct research

]({{path('_core_services_main')}}#api)

## Testimonials

{% image '@CoreWebBundle/Resources/public/images/testimonials/ben\_johnson\_home.jpeg' %}

![Ben Johnson]({{ asset_url }})

{% endimage %}

Ben Johnson  
_HEFCE Research Policy Adviser_

The aggregation services that CORE provides make a very valuable contribution to the evolving open access environment in the UK

{% image '@CoreWebBundle/Resources/public/images/testimonials/william\_brown\_home.jpeg' %}

![William Brown]({{ asset_url }})

{% endimage %}

William Cullerne Bown  
_CEO ResearchResearch.com_

The CORE repository, available in bulk, was a breakthrough. Now our algorithms outperform even those from huge publishers.

{% image '@CoreWebBundle/Resources/public/images/testimonials/yvonne\_budden\_home.jpeg' %}

![Yvonne Budden]({{ asset_url }})

{% endimage %}

Yvonne Budden  
_Chair of the United Kingdom Council of Research Repositories (UKCoRR)_

CORE is providing a valuable service in support of repositories by aggregating the content repositories hold and curate individually and by providing additional end user services to an impressive collection of Open Access scholarly material.

[{% image '@CoreWebBundle/Resources/public/images/left-arrow.png'%} ![arrow left]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %} Previous ](#testimonialsCarousel) [{% image '@CoreWebBundle/Resources/public/images/right-arrow.png'%} ![arrow right]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %} Next](#testimonialsCarousel) 

[Read what others have to say...]({{path('_core_about_endorsements')}}#testimonials)

## Companies

using CORE technologies

[{% image '@CoreWebBundle/Resources/public/images/companies/ropenscilab-logo-1.png'%} ![ROpenScience]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Ropensci) 

[{% image '@CoreWebBundle/Resources/public/images/companies/unsilo\_logo\_square.jpg'%} ![Unsilo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Unsilo) 

[{% image '@CoreWebBundle/Resources/public/images/companies/iris.ai\_logo\_black.png'%} ![IRISAI]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#IRISAI) 

[{% image '@CoreWebBundle/Resources/public/images/companies/research-logo.png'%} ![Researchresearch]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#ResearchResearch) 

[{% image '@CoreWebBundle/Resources/public/images/companies/rygbee-logo.jpg'%} ![Rygbee]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Rygbee) 

[{% image '@CoreWebBundle/Resources/public/images/companies/ritc-logo.png'%} ![Ritc]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Ritc) 

[{% image '@CoreWebBundle/Resources/public/images/companies/logo\_4-c.png'%} ![4science]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#4science) 

[{% image '@CoreWebBundle/Resources/public/images/companies/wheesbee-logo.png'%} ![Wheesbee]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Whesbee) 

[{% image '@CoreWebBundle/Resources/public/images/companies/naver-logo.svg'%} ![Naver]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#naver) 

[Read more...]({{path('_core_about_endorsements')}}#companies)

## Institutions

using CORE technologies

[{% image '@CoreWebBundle/Resources/public/images/institutions/StrathclydeUniversity.png'%} ![Strathclyde University logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Strathclyde) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/University\_of\_Sheffield-logo.png'%} ![University of Sheffield logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Sheffield) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/WR\_Leeds\_908x360.png'%} ![Leeds University logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Leeds) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/WR\_York\_500x225.png'%} ![University of York logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#York) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/the-open-uni-logo.png'%} ![The Open University logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#OpenUni) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/York\_St\_John\_University\_logo.svg.png'%} ![York St. John university logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#StJohn) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/cambridge.png'%} ![University of Cambridge logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Cambridge) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/hygiene.png'%} ![London School of Hygiene and Tropical Medicine logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Hygiene) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/stMarys.png'%} ![St Mary's University logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#StMarys) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/trieste.png'%} ![Trieste logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Trieste) 

[{% image '@CoreWebBundle/Resources/public/images/institutions/zurich.png'%} ![Zurich logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](/about/endorsements#Zurich) 

[Read more...]({{path('_core_about_endorsements')}}#recomUsedIn)

## Partner projects

[{% image '@CoreWebBundle/Resources/public/images/partners/OpenAIREplus-logo.png'%} ![OpenAIRE logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://www.openaire.eu/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/coar-logo-2.png'%} ![COAR logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://www.coar-repositories.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/irus-logo.png'%} ![IRUS logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](http://irus.mimas.ac.uk/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/opendoar-logo.png'%} ![OpenDOAR logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](http://www.opendoar.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/orcid-logo-1.png'%} ![ORCID logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](http://orcid.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/rioxx-logo.png'%} ![RIOXX logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](http://rioxx.net/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/FOSTER-share-header.png'%} ![FOSTER logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://www.fosteropenscience.eu/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/logo-okmaps.png'%} ![OKmaps logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://openknowledgemaps.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/OpenAccessButtonLogo.png'%} ![Open Access Button logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://openaccessbutton.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/BritishLibrary.svg.png'%} ![British Library logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://www.bl.uk/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/doaj.jpg'%} ![DOAJ logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://doaj.org/) 

[{% image '@CoreWebBundle/Resources/public/images/partners/mooc-logo.png'%} ![DOAJ logo]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}](https://opensciencemooc.eu/) 

## News

{% for item in blog\_items %}*   [{{ item.title }}]({{ item.link }}) ({{item.pubDate |date("m/d/Y")}})
{% endfor %}

{% endblock %}