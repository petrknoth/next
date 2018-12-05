{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block title %}What others have to say - {{ parent() }}{% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/endorsements.scss' %}   {% endstylesheets %} {% endblock %} {% block intro\_title %} What others have to say {%endblock%} {% block intro\_content %}

*   [Scholary communication stakeholders](#testimonials)
*   [CORE API testimonials](#APIUsers)
*   [Companies using CORE technologies](#companies)
*   [Institutions using the CORE technologies](#recomUsedIn)

## Scholary communication stakeholders

{% include 'CoreWebBundle:About:Endorsements/endorTestimonials.html.twig' %}

---

## CORE API testimonials

{% include 'CoreWebBundle:About:Endorsements/endorAPIUsers.html.twig' %}

---

## Companies using the CORE technologies

{% include 'CoreWebBundle:About:Endorsements/endorCompanies.html.twig' %}

---

## Institutions using the CORE technologies

{% include 'CoreWebBundle:About:Endorsements/endorRecomUsedIn.html.twig' %}

[Go back](/about#testimonial)

{% endblock %}