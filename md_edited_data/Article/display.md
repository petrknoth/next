{% extends "CoreWebBundle::coreweblayout.html.twig" %} {% block title %}{{ article.title|escape }} - CORE {% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/display.scss' %}   {% endstylesheets %} {% endblock %} {% block head %}   {% for author in article.authors %}   {% endfor %} {% if article.year is not empty %}   {% endif %} {% if article.description is not empty %}  {% endif %} {% if article.types is not empty %} {% for type in article.types %}  {% endfor %} {% endif %} {% if article.topics is not empty %} {% for topic in article.topics %}  {% endfor %} {% endif %} {% if article.publisher is not empty %}  {% endif %} {% if article.doi is not empty %}  {% endif %} {% if article.subIds is empty %} {% if article.oai is not empty %}  {% endif %} {% endif %} {% if pdfStatus ==1 %} {#{% if article.pdfUrl is not empty %}#}   {#{% endif%}#} {% endif %} {% endblock %} {% block javascripts %} {{ parent() }} {% javascripts '@CoreSearchBundle/Resources/public/js/search\_details.js' '@CoreSearchBundle/Resources/public/js/get\_citation.js' '@CoreWebBundle/Resources/public/js/contrib/jquery.url.min.js' %}  {% endjavascripts %} {% if haveLocationData %}   google.charts.load('current', { 'packages': \['geochart'\] // Note: you will need to get a mapsApiKey for your project. // See: https://developers.google.com/chart/interactive/docs/basic\_load\_libs#load-settings }); google.charts.setOnLoadCallback(drawRegionsMap); function drawRegionsMap() { var data = google.visualization.arrayToDataTable(\[ \['LATITUDE', 'LONGITUDE'\], \[{{ latitude }}, {{ longitude }}\] \]); var options = { region: '{{ country\_code }}', displayMode: 'markers', colorAxis: {colors: \['green'\]}, tooltip: {trigger: 'none'}, showZoomOut: true }; var chart = new google.visualization.GeoChart(document.getElementById('visualization\_graph')); google.visualization.events.addListener(chart, 'error', function (error){ $('#graphvisualization').hide(); }); chart.draw(data, options); }  {% endif %}  { "@context": "http://schema.org", "@graph": \[ { "@type": "BreadcrumbList", "itemListElement": \[{ "@type": "ListItem", "position": 1, "item": { "@id": "https://core.ac.uk", "name": "CORE" } }, {% if article.repositories is not empty %} { "@type": "ListItem", "position": 2, "item": { "@id": "https://core.ac.uk/search?q=repositories.id:({{ article.repository.id }})", "name": "{{ article.repository.name|escape('html') }}" } }, {% endif %} { "@type": "ListItem", "position": 3, "item": { "@id": "https://core.ac.uk/display/{{ article.id }}", "name": "{{ article.title }}", "image":"https://core.ac.uk/image/{{ article.id }}/large" } } \] }, { "@type": "ScholarlyArticle", "@id":"https://core.ac.uk/display/{{ article.id }}", "headline": "{{ article.title|escape }}", {% if article.description is not empty %} "description": "{{ article.description|escape('html') }}", {% endif %} {% if article.doi is not empty %} "sameAs":"{{ article.doi|escape('html') }}", {% endif %} "name": "{{ article.title|escape('html') }}", "author": \[ {% for author in article.authors %} { "@type": "Person", "name": "{{ author|escape('html') }}" } {{ not loop.last ? ',' }} {% endfor %} \], {% if article.year is not empty and article.year > 0 %} "datePublished": {{ article.year }}, {% endif %} {% if isPdfAvailable %} "isAccessibleForFree":true, {% endif %} {% if article.topics is not empty %} "keywords": \[ {% for topic in article.topics %} "{{ topic|escape('html') }}" {{ not loop.last ? ',' }} {% endfor %}\], {% endif %} {% if article.topics is not empty %} "about": \[ {% for topic in article.topics %} "{{ topic|escape('html') }}" {{ not loop.last ? ',' }} {% endfor %} \], {% endif %} {% if article.repositories is not empty %} "provider":{ "@type": "Organization", "name" : "{{ article.repository.name|escape('html') }}" }, {% endif %} {% if article.publisher is not empty %} "publisher":{ "@type": "Organization", "name":"{{ article.publisher|escape('html') }}" }, {% endif %} "image":"https://core.ac.uk/image/{{ article.id }}/large" } \] }  {% endblock %} {% block content %}

{% include "CoreSearchBundle:Components:searchformheader.html.twig" %}

![](/image/{{ article.id }}/large)

{% if haveLocationData %}

Location of Repository

{% endif %}

## {{ article.title }}

By {{ article.authorsString }}

{% if isPdfAvailable %}

[{% image '@CoreWebBundle/Resources/public/images/pdf\_icon.png' %} ![Downloads cached PDF from CORE]({{ asset_url }}) {% endimage %} Get PDF {% if article.formattedSize != null %}({{ article.formattedSize|default('n/a') }}) {% endif %}](/reader/{{ article.id }}) 

{% endif %} {% if fullTextRestricted %} _Full text removed upon author's request_ {% endif %} {% if article.doi is defined and article.doi is not empty and article.doi is not null %}

No static citation data No static citation data Cite 

*   [BibTex](#)
*   [Full citation](#)

{% endif %}

{% if article.description is not empty %}

### Abstract

{{ article.description }}

{% endif %} {% if article.types is not empty %}

Type: {% for type in article.types %} {{ type }}{% if not loop.last %},{% endif %} {% endfor %}

{% endif %} {% if article.topics is not empty %}

Topics: {% for topic in article.topics %} {{ topic }}{% if not loop.last %},{% endif %} {% endfor %}

{% endif %} {% if article.publisher is not empty %}

Publisher: {{ article.publisher }}

{% endif %} {% if article.year is not empty and article.year > 0 %}

Year: {{ article.year }}

{% endif %} {% if article.doi is not empty %}

DOI identifier: {{ article.doi }}

{% endif %} {% if article.subIds is empty and article.id is not empty %}

OAI identifier: {{ article.oai }}

{% endif %} {% if article.repositories is not empty %}

Provided by: [{{ article.repository.name }}](/search?q=repositories.id:({{ article.repository.id }}))

{% endif %} {% if article.journal is not empty %}

Journal: [{#{article.journal.title}#}](/search/journal.identifiers:({#{article.journal.identifier}#}))

{% endif %} {% if description is not empty %}

Description of the dataset: {{ description }}

{% endif %} {% if isPdfAvailable %} {% if pdfOrigin is defined and pdfOrigin is not empty %}

Downloaded from [{{ pdfOrigin }}]({{ pdfOrigin }})

{% endif %} {% elseif fullTextRestricted %} Download PDF: Full text removed upon author's request  
{% elseif urls is not empty %} Download PDF:  
Sorry, we are unable to provide the full text but you may find it at the following location(s): {% for url in urls %}*   [{{ url|length > 30 ? url|slice(0, 30) ~ '...' : url }}]({{ url }}) (external link)
{% endfor %} {% else %} Sorry, our data provider has not provided any external links therefore we are unable to provide a link to the full text. {% endif %}

### Suggested articles

(function (d, s, idScript, idRec, userInput) { var js, fjs = d.getElementsByTagName(s)\[0\]; if (d.getElementById(idScript)) return; js = d.createElement(s); js.id = idScript; js.src = '/recommender/embed.js'; fjs.parentNode.insertBefore(js, fjs); localStorage.setItem('idRecommender', idRec); localStorage.setItem('userInput', JSON.stringify(userInput)); var link = d.createElement('link'); link.setAttribute('rel', 'stylesheet'); link.setAttribute('type', 'text/css'); link.setAttribute('href', '/recommender/embed.css');{# link.setAttribute('href', '/recommender/embed-default-style.css');#} d.getElementsByTagName('head')\[0\].appendChild(link); }(document, 'script', 'recommender-embed', 'ffffff', {}));

{#{% if article.repositoryDocument.textStatus==1 and not fullTextRestricted %}#} {#

#} {#

### Preview

#} {##} {#<p>Your browser does not support iframes.</p>#} {##} {#

#} {#{% endif %}#} {% if article.citations is not empty %}

### Citations

{% for citation in article.citations %} {% if citation.refDocId is not empty %}1.  [{{ citation.citationText }}](/display/{{ citation.refDocId }}/tab/citations) {% if citation.doi is not empty %} [{% image '@CoreCommonBundle/Resources/public/images/doi.gif' %} ![doi]({{ asset_url }} "DOI") {% endimage %} ](http://dx.doi.org/{{ citation.doi|e }}) {% endif %}
{% else %}2.  {{ citation.citationText }} {% if citation.doi is not empty %} [{% image '@CoreCommonBundle/Resources/public/images/doi.gif' %} ![doi]({{ asset_url }} "DOI") {% endimage %} ](http://dx.doi.org/{{ citation.doi|e }}) {% endif %}
{% endif %} {% endfor %}

{% endif %}  

To submit an update or takedown request for this paper, please submit an [Update/Correction/Removal Request]({{ path('_core_display_form', {).

{% endblock %}