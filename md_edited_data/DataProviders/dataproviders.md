
CORE aggregates research papers from data providers from all over the world including institutional repositories, subject-repositories and journal publishers. This process, which is called harvesting, allows us to offer search, text-mining and analytical capabilities over not only metadata, but also the full-text of the research papers making CORE a unique service in the research community.

CORE currently contains {{ render(controller('CoreWebBundle:GlobalStats:stats')) }} open access articles, from over tens of thousands [journals]( {{path(), collected from over {{ render(controller('CoreWebBundle:GlobalStats:repoStats')) }} [repositories]({{path() around the world.

[Learn more about becoming a data provider]( {{path()

{#

*   [View Repositories]({{path()
*   [View Journals]( {{path()
*   [Become a data provider]( {{path()

#}

{% include "CoreWebBundle:Components:repositoriesLocation.html.twig" %}

{% endblock %}