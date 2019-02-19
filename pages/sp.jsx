import React from 'react'

import ServicesPages from 'components/services-pages'

import textData from 'data/rd.yml'
import freePackage from 'data/free-package.yml'

const SP = () => <ServicesPages freePackage={freePackage} {...textData} />

export default SP
