## FAQs

### Join CORE

*   [Is my repository, journal or archive harvested by CORE?](#faq-01-01)
    
    If you wonder whether your repository, journal or archive is harvested by CORE, check our data providers [list]({{ path('_core_repositories') }}).
    
*   [How do I register my repository, journal or archive with CORE?](#faq-01-02)
    
    CORE uses information from various registries, such as [OpenDOAR](http://opendoar.org/) and [DOAJ](https://doaj.org/), to include new repositories, journals and archives into CORE. If your repository, journal or archive is already registered with some authoritative registry, you don't need to do anything. If your repository, journal or archive has not been registered yet get in [touch]({{ path('_core_contact') }}).
    
*   [Where are the repositories that CORE harvests located?](#faq-01-03)
    
    CORE is an international service and it harvests repositories from various locations around the world. This information is displayed in a map and can be accessed [here]({{ path('_core_menu_providers') }}).
    

### Aggregation: general

*   [How often does CORE harvest the repositories?](#faq-02-01)
    
    CORE does not harvest all the repositories that exist in our database with the same frequency. If you have a question regarding a specific repository do get in [touch with us]({{ path('_core_contact') }}).
    
*   [What types of scientific outputs does CORE provide?](#faq-02-02)
    
    CORE harvests all metadata records in a repository, but it is in position to harvest full-text records in PDF only. We are working though to include other file types, such as HTML webpages, images etc.
    
*   [My repository has plenty of metadata records, but not all of them have an open access full-text. Can it be harvested by CORE?](#faq-02-03)
    
    Yes it can, provided that the repository offers its content as [Open Access]({{ path('_core_about_main') }}).
    
*   [There is a mistake in my article, can you upload a new version?](#faq-02-04)
    
    CORE works at the level of repositories and cannot update specific records. You can upload the new record into your institutional repository/journal and CORE will synchronise it at the next scheduled re-harvesting.
    
*   [How is CORE different from Google Scholar?](#faq-02-05)
    
    Google Scholar is a search engine with scholarly research papers but it is not designed to aggregate repository and journal systems. More specifically:
    
    *   Google Scholar crawls and indexes research papers that can be found on the web and links to the original source, while CORE harvests and caches the full-text.
    *   Google Scholar limits its access only at the [granularity level](http://www.dlib.org/dlib/november12/knoth/11knoth.html), i.e. its search engine, whereas CORE is in position to extend access to raw data and, apart from the CORE search engine.
    *   Google Scholar offers both closed access and open access resources, while CORE offers open access resources only, enabling immediate access to full-text.
    *   The audience is different. Even though CORE has a search engine where users can retrieve scientific literature, it focuses also on other research stakeholders, such as text miners and repository managers, and offers services designed for them, such as the [CORE API]({{ path('_core_services_main') }}#api) and [Datasets]({{ path('_core_services_main') }}#dataset).
    
*   [There isn’t a “Download” button in the CORE display page, how can I access the full-text?](#faq-02-06)
    
    CORE harvests content that is available open access elsewhere, i.e. repositories and open access journals. When the “Download” button is missing, it means that the full-text is not available from the hosting service and CORE displays only the metadata of this record.
    

### Aggregation: technical

*   [What are the technical requirements for being aggregated?](#faq-03-01)
    
    In order to realise the data transfer and regular data updates of CORE and your system, CORE uses a variety of protocols to ingest the content. The easiest way to get your content integrated with CORE is the [OAI-PMH protocol](https://www.openarchives.org/pmh/). If you wish to join CORE get in [touch]({{ path('_core_contact') }}).
    
*   [How difficult is it to satisfy the CORE harvesting recommendations?](#faq-03-02)
    
    We would expect this might take about one hour for a typical repository and in some repository systems, such as EPrints, most of these recommendations are followed by default. You can find more details [here]({{ path('_core_recommendations') }}).
    
*   [Which metadata formats does CORE support?](#faq-03-03)
    
    We mainly support oai\_dc, the mainstream metadata format used in the [OAI-PMH Protocol](http://www.openarchives.org/OAI/openarchivesprotocol.html), utilising the [Dublin Core](http://dublincore.org/documents/dcmi-terms/) vocabulary, a popular vocabulary for bibliographic data. We also support [RIOXX](http://rioxx.net/), a richer metadata protocol, used mostly by the UK repositories.
    
*   [Can CORE just index our content, but not store it on its servers?](#faq-03-04)
    
    To provide its service, it is essential for CORE to be able to store a cached copy of the harvested content. This is needed to verify open access sources, offer analytical services, support for text-mining, recommendation tools, etc. By cashing a copy of the harvested resource, CORE is not different from many commercial and non-commercial, academic and non-academic, search engines including [Google](http://www.google.com/) or [CiteSeerX](http://citeseerx.ist.psu.edu/index). The primary difference from such systems is that CORE caches only copies of open access content. More information on the benefits of this approach is available in the “[CORE: Three Access Levels to Underpin Open Access](http://www.dlib.org/dlib/november12/knoth/11knoth.html)” article.
    
*   [How can my repository opt out from being harvested by CORE?](#faq-03-05)
    
    CORE uses information from various registries, such as [OpenDOAR](http://opendoar.org/), to include new repositories, journals and archives into CORE. If the circumstances have changed in your repository, you can restrict harvesting and crawling activities by modifying your rules in your “robots.txt” file by using the [Standard for Robots Exclusion](http://www.robotstxt.org/orig.html). This will also guarantee the content cannot be cached by search engines and harvesting systems. In addition, you could withdraw your repository from all open access registries lists; when this takes place, please [notify us]({{ path('_core_contact') }}).
    

### Aggregation: removing full-text

*   [How does CORE ensure that the harvested content is Open Access?](#faq-04-01)
    
    CORE aggregates content from repositories registered in [OpenDOAR](http://www.opendoar.org/about.html), journals registered in [DOAJ](http://www.doaj.org/) or those that requested their content to be aggregated. This means that all the content sources aggregated by CORE must be open access as this is a requirement for the providers to be included in these registries. According to the official [BOAI definition of open access](http://www.opensocietyfoundations.org/openaccess/boai-10-recommendations), CORE is allowed to, _"distribute, search, or link to the full texts of articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the Internet itself. The only constraint on reproduction and distribution, and the only role for copyright in this domain is to give authors control over the integrity of their work and the right to be properly acknowledged and cited."_
    
*   [CORE harvests copyrighted material from my repository](#faq-04-02)
    
    CORE’s system is fully automated and relies on data made available in a machine readable form. If your repository hosts full-text with a restrictive license that prohibits harvesting, this needs to be properly communicated in a machine readable form. All non open access items should be blocked in the robots.txt file. If this information is provided in the metadata for each record and CORE exposes the full-text, please get in [touch with us]({{ path('_core_contact') }}).
    
*   [A full-text record is deleted from my repository, but is still available in CORE](#faq-04-03)
    
    CORE’s system is fully automated and relies on data made available in a machine readable form. Our system understands that the full-text of a record was removed only when the record is marked as deleted in the metadata of your repository. See [here](#faq-04-04) how to take down full-text from CORE.
    
*   [How do I notify CORE to take down full-text content?](#faq-04-04)
    
    If there is full-text content that appears in CORE but not in the hosting service you can take it down via the [CORE Repositories Dashboard]({{ path('_core_services_main') }}#dashboard) anytime without notifying us. If you don’t have access to the Dashboard visit [this page]({{ path('_core_display_form') }}).
    

### CORE services

*   [How do I register for an API key?](#faq-05-01)
    
    To register a new key to access the CORE API interface please use the form provided [here]({{ path('apikeys_register') }}).
    
*   [Can I use the CORE API in a company/project?](#faq-05-02)
    
    If you plan to use the CORE API we kindly ask the following:
    
    *   attribute CORE by including in your website [this snippet](#faq-06-05),
    *   send us [an email]({{ path('_core_contact') }}) with a brief summary on how you are using the CORE API,
    *   grant us permission to present this summary to our funders and/or display it on our website,
    *   allow us to list your company’s name, URL and logo on our [website]({{ path('_core_about_endorsements') }})
    
*   [Does CORE offer a higher download quota of the CORE API?](#faq-05-03)
    
    Yes, this is possible but there is usually a cost associated with it. Please [email us]({{ path('_core_contact') }}) the name of your company/organisation, business entity, the number of requests you estimate to send and how often you will send them and we will get back to your with a quote.
    
*   [Can I use the CORE dataset for commercial purposes?](#faq-05-04)
    
    Please note the dataset has been created from information that was publicly available on the Internet. Every effort has been made to ensure this dataset contains only open access content. We have included only content from repositories and journals that are listed in registries where the condition for inclusion is the provision of content under open access compatible license. However, as metadata are often inconsistent, licensed information is often not machine readable, and repositories from time to time leak information that is not open access, we cannot take any responsibility for the license of the content in the dataset. It is therefore up to the user of this dataset to ensure that the way in which they use the dataset does not breach copyright. The dataset is in no way intended for the purposes of reading the original publications, but for machine processing only.
    
*   [How often is the CORE dataset updated?](#faq-05-05)
    
    We aim to generate a new public dataset at least once a year. If you need a more recent dataset, please [get in touch]({{ path('_core_contact') }}) with us as we might be able to arrange it.
    
*   [How can I download the CORE Recommender?](#faq-05-06)
    
    If you have access to the CORE Repositories Dashboard, log into the [Dashboard]({{ path('_core_services_main') }}#dashboard) to get the instructions on how to download the [CORE Recommender]({{ path('_core_services_main') }}#recommender). Otherwise, visit our recommender [registration page]({{ path('recommenders_register') }}), where you will also find the installation instructions.
    
*   [I am not pleased with the similar papers suggested by the CORE Recommender when I look at my papers. How can I change that?](#faq-05-07)
    
    The CORE recommender uses the popular [content-based filtering system](https://blog.core.ac.uk/2016/10/04/core-recommender/). The similar resources that appear in the CORE Recommender and their quality are highly impacted by the metadata information supplied by the repository of origin. If that information is incorrect or incomplete, you should contact the repository of origin. To improve the recommendations, you can use the feedback button, with which you can remove any undesirable articles.
    
*   [How big is your data in sheer disk space?](#faq-05-08)
    
    CORE has around 15 terabytes (Tb) of raw textual data (metadata, pdfs, processed pdfs text), 1.5Tb of indexed data (each replica) and 1.5Tb of database data.
    
*   [Can I use the CORE API for commercial purposes?](#faq-05-09)
    
    Yes, you can use the CORE API for commercial purposes, but you need to contact us first and let us know about it. Commercial use of our API could increase the traffic in our servers and we would like to be aware of the expected traffic.
    

### General information about CORE

*   [I need a high resolution logo for CORE. Where can I find it?](#faq-06-01)
    
    {% image output="resources/corelogo\_hires.png" '@CoreWebBundle/Resources/public/images/corelogo\_hires.png' %} [Download]({{ asset_url }}) {% endimage %} a high resolution logo of CORE.
    
*   [Where can I find CORE’s brochure?](#faq-06-02)
    
    You can find CORE’s brochure {% image '@CoreWebBundle/Resources/public/images/CORE-leaflet-2017-V3.pdf'%} [here]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}.
    
*   [Where can I find CORE’s leaflet?](#faq-06-03)
    
    You can find CORE’s leaflet {% image '@CoreWebBundle/Resources/public/images/CORE-flyer-updated-july2017.pdf'%} [here]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}.
    
*   [How can I embed the “harvested by CORE” snippet on my website?](#faq-06-04)
    
    {% image '@CoreWebBundle/Resources/public/images/harvested-by-core-orange.png'%} ![harvested-by-core]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}
    
        <img src="https://core.ac.uk/images/harvested-by-core-orange.png">
    
*   [How can I embed the “powered by CORE” snippet on my website?](#faq-06-05)
    
    {% image '@CoreWebBundle/Resources/public/images/powered-by-core-orange.png'%} ![powered-by-core]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}
    
        <img src="https://core.ac.uk/images/powered-by-core-orange.png">
    
*   [Do you need to cite CORE?](#faq-06-06)
    
    Visit our [research page]({{ path('_core_about_research_outputs') }}).