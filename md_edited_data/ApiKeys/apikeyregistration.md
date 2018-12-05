{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block intro\_title %} Registration success {%endblock%} {% block intro\_content %}

Thank you, your email address is now verified.  
  
Please fill in your name and institution/organisation; we will generate an API key for you. {% form\_theme form with \['CoreCommonBundle:Form:form\_errors.html.twig'\] %} {{ form\_start(form) }}

{{ form\_errors(form.person) }}

{{ form\_label(form.person) }}

{{ form\_widget(form.person) }}

{{ form\_errors(form.institution) }}

{{ form\_label(form.institution) }}

{{ form\_widget(form.institution) }}

  
{{ form\_widget(form.email) }} {{ form\_widget(form.emailhash) }}

By registering for the API, you also register to receive CORE related news such as workshops, events, product surveys etc. You may opt-out from these messages at any time by clicking the unsubscribe button at the bottom of the email.

{{ form\_end(form) }}

{% endblock %}