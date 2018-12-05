{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block intro\_title %} Request an API Key {% endblock %} {% block javascripts %} {{ parent() }} {%endblock%} {% block stylesheets %} {{ parent() }} {% endblock %} {% block intro\_content %}

To get an API key, follow these 3 easy steps:

1.  Enter your email below.
2.  Click on the link we will send to your email address.
3.  Fill out the form with your name and your institution.

An API key will be generated and sent to your email address.

If you have already registered, we will send you your API key again.

{% form\_theme form with \['CoreCommonBundle:Form:form\_errors.html.twig'\] %} {{ form\_start(form) }}

{{ form\_errors(form.email) }}

{{ form\_label(form.email) }}

{{ form\_widget(form.email) }}

{{ form\_errors(form) }} {{ form\_row(form.captcha) }} {{ form\_end(form) }}

{% endblock %}