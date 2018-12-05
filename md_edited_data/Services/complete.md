{% extends 'CoreWebBundle::introlayout.html.twig' %} {% block intro\_title %}Datasets{% endblock %} {% block intro\_content %}

We have emailed you the links to the files, but you can also download them from this page.

We recommend that you download the files using curl or wget

`wget -c (url of the data dump ending in .tar.gz)  
curl -L -O -C - (url of the data dump ending in .tar.gz)  
`

For the curl request, notice the hyphen after the –C and before the (url).  
If a download fails, you can resume the download by rerunning the command.

### Downloads

#### 2018 onwards:

**Dataset 2018-03-01**  
[Metadata only](https://core.ac.uk/datasets/core_2018-03-01_metadata.tar.gz)  
Metadata only dataset (beta) (127 GB) - 123M metadata items, 85.6M items with abstract  
[Full text only](https://core.ac.uk/datasets/core_2018-03-01_fulltext.tar.gz)  
With full text dataset (beta) (330 GB) - 123M metadata items, 85.6M items with abstract, 9.8M items with fulltext  

#### 2017 onwards:

{% render url('\_core\_services\_dataset\_dynamic\_render', {'showDownloadLink': 1}) %}

#### Older versions (pre-2017):

Dump 2016-10  
[Metadata file (9.0 GB)](http://core.ac.uk/dumps/repository_metadata_2016-10-05.tar.gz)  
[Content file (102 GB)](http://core.ac.uk/dumps/repository_text_2016-10-05.tar.gz)  

Dump 2015-09  
[Metadata file (4.5 GB)](http://core.ac.uk/dumps/repository_metadata_2015-09.tar.gz)  
[Content file (30.5 GB)](http://core.ac.uk/dumps/repository_text_2015-09.tar.gz)  

### Dataset track of [DL2014](http://core-project.kmi.open.ac.uk/dl2014/#dataset)

Dump 2014-06-13 (used for dataset track of [DL2014](https://wosp.core.ac.uk/dl2014/#dataset))  
[Metadata file (3.7 GB)](http://core.ac.uk/dumps/repository_metadata_2014-06-13.tar.gz)  
[Content file (24 GB)](http://core.ac.uk/dumps/repository_text_2014-06-13.tar.gz)  

### Older versions

Dump 2013-12-15  
[Metadata file (1.7 GB)](http://core.ac.uk/dumps/repository_metadata_2013-12-15.tar.gz)  

Dump 2013-04-12  
[Metadata file (181 MB)](http://core.ac.uk/dumps/repository_metadata_2013-04-12.tar.gz)  
[Metadata file as RDF (835 MB)](http://core.ac.uk/dumps/rdf_dump_2013-04-12.tar.gz)  

{% endblock %}