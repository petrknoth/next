{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block title %}About - {{ parent() }}{% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/join.scss' %}   {% endstylesheets %} {% endblock %} {% block intro\_title %} Join CORE {%endblock%} {% block intro\_content %}

Do you have a repository or an open access journal that you would like to be included in the CORE collection? Send us an email with the repository/journal OAI base URL [here](mailto:theteam@c%6Fre.ac.u%6B).

---

## Frequently asked questions

### Is my repository or archive eligible for inclusion in CORE?

The only requirement for a repository to be included in CORE is to provide its content as [Open Access]({{path('_core_about_main')}}).

### How do I register my repository, journal or archive with CORE?

CORE uses information from various registries, such as [OpenDOAR](http://www.opendoar.org/), to include new repositories, journals and archives into CORE. Currently we are adding new repositories into the CORE system on a daily/weekly basis. If your repository, journal or archive is already registered with some authoritative registry, you do not need to do anything and CORE will include your content in the future. However, if your repository, journal or archive has not yet been registered or you would just like to prioritise the inclusion of your content into CORE, please [get in touch]({{ path('_core_contact') }}) and we will try to help. We can speed up the process of content inclusion and also notify the relevant registries (if this has not been done yet).

### What are the technical requirements for being aggregated?

In order to realise the data transfer and regular data updates of CORE and your system, CORE uses the Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH). If you contact us with the request for including your content in CORE, please let us know your OAI-PMH base URL. While registering the OAI-PMH endpoint is the only activity needed to aggregate your content into CORE, unfortunately, the sole existence of the OAI-PMH endpoint on your side does not necessarily imply that full-text content will be correctly harvested by CORE. Although OAI-PMH is a standard, its implementation across different systems often differs significantly. Our experience shows that we are able in a vast majority of cases to aggregate repository metadata without any issues. However, since CORE is mainly a full-text aggregation system, it is important that CORE can access also the full-texts of resources. You can ensure a thorough full-text integration of your system with CORE by following our [recommendations]({{ path('_core_recommendations') }}). Your compliance with these recommendations will likely have an impact on your ranking in commercial academic systems, will enable the measuring of the amount of content and impact of your system and will also help increase the visibility of your content.

### How difficult it is to satisfy these recommendations?

It should be fairly easy to configure your system so that it satisfies these recommendations. We would expect this might take about one hour for a typical repository and in some repository systems, such as [EPrints](http://www.eprints.org/), most of these recommendations are followed by default and their proper implementation should only be checked.

{% endblock %}