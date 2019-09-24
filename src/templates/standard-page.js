import React from 'react'

import PageRenderer from '../components/PageRenderer'

const StandardPageTemplate = ({ pageContext: { componentTree } }) => {
  return <PageRenderer componentTree={componentTree} />
}

export default StandardPageTemplate
