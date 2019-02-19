import React from 'react'

import ServicesPage from 'components/pages/service-page'

import textData from 'data/rd.yml'
import freePackage from 'data/free-package.yml'

const SP = () => <ServicesPage freePackage={freePackage} {...textData} />

export default SP
