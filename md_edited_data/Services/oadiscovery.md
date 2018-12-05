{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block title %}CORE Open Access Discovery API - {{ parent() }}{% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/endorsements.scss' %}   {% endstylesheets %} {% endblock %} {% block intro\_title %} LABS - CORE Open Access discovery API {% endblock %} {% block intro\_content %}

*   [What is it](#what)
*   [How to use the API](#how)

## This tool is still in beta and it's part of the CORE services lab, if you want to know more about it [contact us.](/contact)

## what is it?

The CORE OA discovery API helps you discover the URL of a particular research paper, which might be behind a paywall on a publisher's website, but can be downloaded for free as open access. The functionality of the API can be innitiated by supplying a DOI or article metadata. The tool with return a URL of the best Open Access resource for your request or will specify that/if the resource is not available as OA. Eager to get started? [See an example here](https://core.ac.uk/labs/oadiscovery/discover?doi=10.3946/kjme.2013.25.4.317)

---

## How to use the API

You can access the API on the following address:

            https://core.ac.uk/labs/oadiscovery/discover?doi=TO\_SEARCH
        

You can send either a GET or a POST request, just take care to properly escape the parameters if you're sending a GET request.

### Request format

You can use the following parameters to describe the paper you are looking for:

*   **doi** a unique paper identifier. If you don't know DOIs you should, [head here to read more](http://doi.org)
*   **title** of the paper.
*   **year** of publication
*   **author** one (or more) of the authors of the paper.

If not supplying a DOI, the service requires at least one of title and author or title and year to effectively recognise the paper you want to find.

### Response format

If a paper is found, you will receive a response that looks like this:

            {
                "fullTextLink": "http://doi.org/10.3946/kjme.2013.25.4.317",
                "source": "Crossref by license"
            }
        

the fullTextLink will contain the link to the Open Access paper and the source will provide an explanation on how the Open Access paper was found. These are the possible sources at the moment:

*   CORE DOAJ paper
    
*   CORE by data repo link
    
*   CORE by link
    
*   CORE by preprints link
    
*   CORE fulltext
    
*   Crossref by data repo link
    
*   Crossref by license
    
*   Crossref by link
    
*   Preprints doi link
    
*   From landing page
    

If the full text link is not available the service will return an empty "fullTextLink" and "Not found" as "source".

{% endblock %}