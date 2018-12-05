
*   [API](#api)
*   [Datasets](#dataset)
*   [Dashboard](#dashboard)
*   [CORE Recommender](#recommender)
*   [Publisher connector](#connector)

If you use CORE in your work, we kindly request that you cite our [publication(s)]({{ path('_core_about_research_outputs') }}).

{{ render(controller('CoreWebBundle:ApiDoc:apiDocIntro')) }}

---

{% include 'CoreWebBundle:Services:datadumps.html.twig' %}

---

{% include 'CoreWebBundle:Services:dashboard.html.twig' %}

---

{% include 'CoreWebBundle:Services:plugin.html.twig' %}

{% include 'CoreWebBundle:Services:connector.html.twig' %}

{% endblock %}