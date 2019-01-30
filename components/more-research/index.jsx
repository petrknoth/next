import React from 'react'
import { Badge } from 'reactstrap'

import './more-research.scss'
import ArticleFound from '../article-found'

const MoreResearch = () => (
  <div>
    <h4>More research </h4>
    <p className="h5 mt-4">Technologies</p>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Recommender systems
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Publisher systems
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      ResourceSync
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Machine Learning
    </Badge>

    <p className="h5 mt-4">Techniques</p>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Recommender systems
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Publisher systems
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      ResourceSync
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Machine Learning
    </Badge>

    <p className="h5 mt-4">Issues</p>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Compliance
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Open Access publishing
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Researcher careers
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Funder policy
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Multi-lingual
    </Badge>
    <Badge className="more-research-tag px-3 py-2 mr-2 my-2" pill>
      Increasing visibility
    </Badge>

    <ArticleFound />
  </div>
)

export default MoreResearch
