import { ServicePage } from 'components/pages'
// import page from 'data/services/api.md'
import page from 'data/services/api.yml'
import freePackage from 'data/free-package.yml'

// export default ServicePage.create(page)
export default ServicePage.create(page, freePackage)
