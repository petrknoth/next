You can use the CORE API to access the resources harvested and enriched by CORE. If you encounter any problems with the API, please [report them to us](/contact).

## Overview

The API is organised by resource type. The resources are **articles**, **journals** and **repositories** and are represented using JSON data format. Furthermore, each resource has a list of methods. The API also provides two global methods for accessing all resources at once.

## Response format

Response for each query contains two fields: **status** and **data**. In case of an error status, the data field is empty. The data field contains a single object in case the request is for a specific identifier (e.g. CORE ID, CORE repository ID, etc.), or contains a list of objects, for example for search queries. In case of batch requests, the response is an array of objects, each of which contains its own **status** and **data** fields. For search queries the response contains an additional field **totalHits**, which is the total number of items which match the search criteria.

## Search query syntax

Complex search queries can be used in all of the API search methods. The query can be a simple string or it can be built using terms and operators described in Elasticsearch [documentation](http://www.elastic.co/guide/en/elasticsearch/reference/1.4/query-dsl-query-string-query.html#query-string-syntax). The usable field names are **title**, **description**, **fullText**, **authors**, **publisher**, **repositories.id**, **repositories.name**, **doi**, **oai**, **identifiers** (which is a list of article identifiers including OAI, URL, etc.), **language.name** and **year**. Some example queries:

*   title:psychology and language.name:English
    
*   repositories.id:86 AND year:2014
    
*   identifiers:"oai:aura.abdn.ac.uk:2164/3837" OR identifiers:"oai:aura.abdn.ac.uk:2164/3843"
    
*   doi:"10.1186/1471-2458-6-309"
    

### Retrieving the latest Articles

You can retrieve the harvested items since specific dates using the following queries:

*   repositoryDocument.metadataUpdated:>2017-02-10
    
*   repositoryDocument.metadataUpdated:>2017-03-01 AND repositoryDocument.metadataUpdated:<2017-03-31
    

## Sort order

For search queries, the results are ordered by relevance score. For batch requests, the results are retrieved in the order of the requests.

## Parameters

The API methods allow different parameters to be passed. Additionally, there is an API key parameter which is common to all API methods. For all API methods the API key can be provided either as a query parameter or in the request header. If the API key is not provided, the API will return HTTP 401 error. You can register for an API key [here]({{ path('_core_services_main') }}#api).

## API methods