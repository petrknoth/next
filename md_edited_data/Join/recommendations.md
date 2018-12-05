
## The purpose of these recommendations

The purpose of these recommendations is to ensure content and metadata are properly aggregated from repositories. This is important in order to ensure that:

*   Statistical information we publish about your repository or provide to other systems is as accurate as possible
*   Content of your repository or archive achieves higher visibility through systems integrating the CORE Plugin, through the CORE Mobile interface, in Google Scholar and other systems.
*   Content of your repository or archive is available for text-mining purposes

## Recommendations

### Full-text identification

Repositories should clearly identify the location of the full-text in the metadata. Different repository systems identify the full-text of the resource in different ways. Some repository systems specify in the dc:identifier field the URL of the full-text document, while others specify the URL of the page from which the full-text can be downloaded. While there exists a way how to unambiguously identify resources in repositories using [MPEG 21-DIDL](http://www.dlib.org/dlib/november03/bekaert/11bekaert.html), we recommend all repositories to clearly identify directly the full-text of the resource in the dc:identifier field until a transition to MPEG-21 DIDL (or other unambiguous mechanism for describing the full-text) is implemented across a significant proportion of repositories. In addition, the link to the full-text should:

*   Be described as an absolute path to the file
*   Contain an appropriate MIME-TYPE suffix (e.g. ".pdf")
*   Be a direct link (i.e. should no be redirected - except of DOI links)
*   Full-text items should be stored under the repository domain providing that the repository expects these files to be included in the repository statistics. Files that are not harvested from the same domain might also be in the disassociated from this repository as it is not possible to ensure that the repository is the owner and original source of the content.

The following example shows an appropriate full-text identifier in the <dc:identifier> field.

<!\[CDATA\[ &lt;dc:identifier> Knoth, Petr; Novotny, Jakub and Zdrahal, Zdenek (2010). Automatic generation of inter-passage links based on semantic similarity. In: Computational Linguistics (COLING 2010), 23-27 August 2010, Beijing, China.&lt/dc:identifier> &lt;dc:identifier>http://oro.open.ac.uk/22933/1/coling10.pdf&lt;/dc:identifier> \]\]>

    `
<dc:identifier>  
   Knoth, Petr; Novotny, Jakub and Zdrahal, Zdenek (2010).  Automatic generation of inter-passage links based on semantic similarity.  In: Computational Linguistics (COLING 2010), 23-27 August 2010, Beijing, China.
</dc:identifier>
<dc:identifier>
   http://oro.open.ac.uk/22933/1/coling10.pdf
</dc:identifier>`
            

As you can see, a repository can provide multiple <dc:identifier> fields, but at least one of them should point to the full-text version (if non-embargoed full-text is available) satisfying the identifier requirements described above.

CORE might be able to aggregate full-texts even if this recommendation is not precisely followed, but this might result in causing unnecessary load on the repository system. If full-text resources are not clearly identified or do not have the appropriate mime-type suffix, CORE has to crawl your system making the harvesting process much slower, results less accurate and consuming much more bandwidth and processing time on the repository side.

## Adjusting the speed of full-text harvesting

The crawl-delay directive defined in the [Standard for Robots Exclusion](http://www.robotstxt.org/orig.html) can be used across Open Access repositories to adjust the speed of full-text harvesting with the goal to ensure uninterrupted provision of the repository services during the time full-text harvesting is performed. However, repositories should keep in mind that an appropriate crawl-delay setting depends on the size of the repository. Large repositories should allow unrestricted crawl-delay to ensure that their content can be aggregated. As a rule of thumb, we recommend to allow the harvesting system to aggregate the whole repository collection in less than 24 hours.

## Open Access to Software

One of the main goals clearly stated in the original BOAI definition of Open Access is the ability to pass content to software for further processing. However, we have found that repositories are often not compliant with this definition and that they sometimes restrict access to their Open Access collections. This restriction is often realised by using the [Standard for Robots Exclusion](http://www.robotstxt.org/orig.html).

It is of primary importance that repositories:

*   Do not restrict access to the full-text using the "disallow" directive
*   Do provide the same level of access and harvesting conditions for all systems.

For example, restricting access to full-texts or specifying a higher crawl-delay for all but some specific search or harvesting systems violates the principles of Open Access. We take such approaches very seriously and CORE will therefore report these policy violations to appropriate Open Access registries.

{% endblock %}