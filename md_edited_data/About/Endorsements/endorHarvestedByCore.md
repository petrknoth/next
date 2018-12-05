Currently CORE has {% if repositoriesNum is defined and repositoriesNum is not empty and repositoriesNum is not null %} {{ repositoriesNum }} {% else %} about 2300 {% endif %} data providers. If you are a proud CORE data provider please add the following image at your repository page.

{% image '@CoreWebBundle/Resources/public/images/harvested-by-core-orange.png'%} ![harvested-by-core]({{app.request.getSchemeAndHttpHost() ~ (asset_url) }}) {% endimage %}

    
    <img src="https://core.ac.uk/images/harvested-by-core-orange.png">