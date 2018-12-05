## CORE API

{% image '@CoreWebBundle/Resources/public/images/api-core.png' %} ![CORE API image]({{ asset_url }}) {% endimage %}

CORE harvests, maintains, enriches and makes available metadata and full-text content (typically a PDF) from many Open Access journals and repositories. This makes it a useful access point for those who would like to develop applications making use of this content. To support these activities, CORE is providing a free API.

If you use CORE in your work, we kindly request you to cite one of our [publications]({{ path('_core_about_research_outputs') }}).

### Documentation

The documentation, along with live examples can be found [here]({{ path('al_swagger_ui_home') }}).

You can also view some practical examples using the CORE API in this [TDM course](https://www.fosteropenscience.eu/node/2263).

### Expected use

We expect the API can be used, for example, to:

*   Perform text mining to enrich metadata of Open Access publications or to even perform different kinds of semantic analysis of publications.
*   Semantically annotate (by means of crowdsourcing, collaborative sharing or natural language processing) the publications to drive the emergence of nano-publications in certain research fields.
*   Link publications to research data.
*   Carry out impact and citation analysis in the Open Access domain.
*   Many other services that need quick and easy access to the content of research publications, etc.

### Where to start

Please register [here]({{ path('apikeys_register') }}) to receive an API key and start testing the [live examples]({{ path('al_swagger_ui_home') }}).

A good starting point to start coding with our API is to follow the iPython notebook available [on Github](https://github.com/oacore/or2016-api-demo).

In collaboration with [rOpenSci](https://ropensci.org/) you can find [here](https://github.com/ropenscilabs/cored) an R client for the CORE API.

### Quota

We apply a quota to the API to allow fair access and a high response time to our services. Please [get in touch]({{ path('_core_contact') }}) if you require accessing our API at a faster rate.  
The quota for each method are listed in the following tables:

#### Global methods

{% for key, value in limitsGlobal %} {% endfor %}

**Method**

**Request type**

**Limit**

{{ key }}

{{value\[0\] }}

{{value\[1\] }}

  

#### Article methods

{% for key, value in limitsArticles %} {% endfor %}

**Method**

**Request type**

**Limit**

{{ key }}

{{value\[0\] }}

{{value\[1\] }}

  

#### Journal methods

{% for key, value in limitsJournals %} {% endfor %}

**Method**

**Request type**

**Limit**

{{ key }}

{{value\[0\] }}

{{value\[1\] }}

  

#### Repository methods

{% for key, value in limitsRepositories %} {% endfor %}

**Method**

**Request type**

**Limit**

{{ key }}

{{value\[0\] }}

{{value\[1\] }}

  

In case you require different limits please [contact us]({{ path('_core_contact') }}).

### CORE data as Linked Open Data (LOD)

Apart from the CORE API, CORE also provides data as LOD for enthusiasts. The documentation is available at the [datahub](https://datahub.io/dataset/core). Please note the data is not synced regularly. We encourage all developers to use the CORE API v2.