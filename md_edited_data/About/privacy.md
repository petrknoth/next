{# For details about extending, see https://bitbucket.org/kmi-ou/core-front-end/wiki/templating #} {% extends 'CoreWebBundle::introlayout.html.twig' %} {% block title %}Privacy notice - {{ parent() }}{% endblock %} {% block head %} {# Include content in the tags that are not css or javascript #} {{ parent() }} {% endblock%} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/about.scss' %}   {% endstylesheets %} {% endblock %} {% block javascripts %} {{ parent() }} {% javascripts '@CoreWebBundle/Resources/public/js/about\_faq.js' %}  {% endjavascripts %} {% endblock %} {% block intro\_title %} Privacy notice {%endblock%} {% block intro\_content %}

Here is an overview about how we process personal data.

This page supplements the information provided in [The Open University's Privacy Notice](http://www.open.ac.uk/about/main/strategy-and-policies/policies-and-statements/website-privacy-ou).

### Measuring our visitors

We collect anonymous statistics to help us improve our site using [Google Analytics](https://support.google.com/analytics/answer/6004245). We use this data to understand how our site is used and to make it better. You may also [opt out](https://tools.google.com/dlpage/gaoptout) if you wish.

### Registering for our services

When you register for any of our services, we may request personal information from you such as your name and email address. We use this information to provide the services you requested and for improving them. We may, with your permission, also contact you about other services and products we think you will be interested in.

We will never share your personal information, such as your email address, with any third party except when required for the delivery of our own services or where the law requires us to do so. For example, we might need to pass your information to a third party provider to process payments.

### Updates to this policy

We may update this policy as required by law and as technology changes. We suggest you regularly check this document for the latest changes. We may notify you by email of any changes to this privacy notice.

### Any more questions?

If you have any questions regarding our use of your data or for any other reason, please [contact us]({{ path('_core_contact') }})

{% endblock %}