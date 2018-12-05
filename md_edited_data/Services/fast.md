{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block title %}CORE FastSync - {{ parent() }}{% endblock %} {% block stylesheets %} {{ parent() }} {% stylesheets filter='compass' '@CoreWebBundle/Resources/public/scss/endorsements.scss' %}   {% endstylesheets %} {% endblock %} {% block intro\_title %} CORE FastSync {% endblock %} {% block intro\_content %}

*   [Resource Dump](#dump)
*   [Document structure](#structure)
*   [Keeping the resource dump up to date](#changes)

## Resource Dump

The CORE data dump is made using this standard [ResourceSync Framework Resource Dump](http://www.openarchives.org/rs/1.1/resourcesync#ResourceDump) approach. You can download the dump at the following URL:

            https://core.ac.uk/dumps/resync\_dump.tar.xz
        

Please note that at the moment of writing the dump is 186GB, please use appropriate tools to download such a big file.

To validate the download you can compare the MD5 Checksum by running:

            md5sum resync\_dump.tar.xz
        

And testing that the output hash is the same as this one:

            b83b7574a0a08e2f733a87416ad958ad
        

To perform the extraction run:

            tar -xf resync\_dump.tar.xz -C /target/directory
        

Replacing target/directory appropriately. The next command will extract the documents on the smaller archive, each document is a data provider for CORE, the full and updated list of providers can be found [here](https://core.ac.uk/dataproviders)

    tar xf PROVIDER.tar.xz -C PROVIDER/ && cat PROVIDER/manifest\_.xml && sed -e s#/data/core-remote/scripts/resync\_dump/tmp-new/PROVIDER/##g PROVIDER/manifest\_.xml > PROVIDER/manifest.xml
        

PROVIDER will be the name of every single archive. The command is more complex than it should of a minor error in this version that requires an additional step to create a compliant dataset.

The extracted folder structure is a two level deep file structure and a manifest.xml file in the root that lists the items. This is the format of a single entry in the manifest which lists the available resources:

            https://core.ac.uk/api-v2/articles/get/111757 
        

The link inside the

tag is the ID of the file that can be used for further updates. The path is where the file can be found and, in order to validate the file, an md5sum and file size are also provided.

---

## Data structure

This is a sample data structure from the Resource dump

        {
	"doi": DOI,
	"coreId": "228783",
	"oai": OAI\_IDENTIFIER,
	"identifiers": \[ADDITIONAL IDENTIFIERS\],
	"title": "TITLE",
	"authors": \["AUTHOR1", "AUTHOR2"\],
	"enrichments": {
		"references": \[REFERENCES\],
		"documentType": {
			"type": "RESEARCH|THESIS|PRESENTATION",
			"confidence": CONFIDENCE
		}
	},
	"contributors": \[CONTRIBUTORS\],
	"datePublished": "DATE OR YEAR",
	"abstract": "ABSTRACT",
	"downloadUrl": DOWNLOAD URL IF AVAILABLE,
	"fullTextIdentifier": FULL TEXT ID IF AVAILABLE,
	"pdfHashValue": HASH OF THE PDF IF AVAILABLE,
	"publisher": PUBLISHER,
	"rawRecordXml": "XML RECORD",
	"journals": \[JOURNALS\],
	"language": {
		"code": "COUNTRY CODE",
		"name": "LANGUAGE NAME",
		"id": ID
	},
	"relations": \["URLs WITH RELATIONS"\],
	"year": PUBLICATION YEAR,
	"topics": \["TOPIC1","TOPIC2" \],
	"subjects": \["SUBJECT1", "SUBJECT2"\],
	"fullText": "FULL TEXT"
}

    

## Keeping the Resource dump up to date

Clone the rs-aggregator project from [Github]( https://github.com/oacore/rs-aggregator)

            git clone https://github.com/oacore/rs-aggregator.git
    

Once cloned, run mvn install from the root of the project. The format of the changelist download is as follow

    http://core.ac.uk/resync/changelist/\[unix\_timestamp\_in\_ms\]/changelist\_index.xml
    

The timestamp should match the last time a download was performed. Once the url is generated please place the url in cfg/uri-list.txt as a first url and run the application with

    java -cp target/rs-aggregator-jar-with-dependencies.jar uk.ac.core.main.COREBatchSyncApp
    

This should start the synchronisation process. The updated files will be in the folder below, with the same structure as described in the dump.

        destination/core.ac.uk/resync/changelist/\[timestamp\]
    

{% endblock %}