{% for key,value in status %}

**Dataset {{ key }}**  
{% if showDownloadLink == "1" %} Download [{{ key }} metadata only dataset {{ value\['tags'\] }} ({{ value\['metadata\_filesize'\] }})](/datasets/{{ value['metadata_filename'] }}) - {{ value\['numOfMetadataRecords'\] // 1000000 }} million items  
{{ value\['metadata\_hash\_type'\] }}: {{ value\['metadata\_hash'\] }}  
Download [{{ key }} with full text dataset {{ value\['tags'\] }} ({{ value\['fulltext\_filesize'\] }})](/datasets/{{ value['fulltext_filename'] }}) - {{ value\['numOfFullTextRecords'\] // 1000000 }} million items  
{{ value\['fulltext\_hash\_type'\] }}: {{ value\['fulltext\_hash'\] }}  
{% else %} [Register for Access]({{ path()  
Metadata only dataset {{ value\['tags'\] }} ({{ value\['metadata\_filesize'\] }}) - {{ value\['numOfMetadataRecords'\] // 1000000 }} million items  
With full text dataset {{ value\['tags'\] }} ({{ value\['fulltext\_filesize'\] }}) - {{ value\['numOfFullTextRecords'\] // 1000000 }} million items  
{% endif %}

{% endfor %}