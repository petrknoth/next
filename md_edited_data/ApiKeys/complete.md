{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block intro\_title %}Your API Key{% endblock %} {% block intro\_content %}

Thank you.  
  
Your api key is: **{{ entity.apikey }}**  
We have sent you your API key to your verified email address.  
  
You can find the documentation for our API [here]({{path('al_swagger_ui_home')}}).  
  
If you have any questions, please [get in touch]({{path('_core_contact')}}).

{% endblock %}