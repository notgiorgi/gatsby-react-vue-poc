import React from 'react'

import ElementRenderer from './ElementRenderer'
import CustomComponentRenderer from './CustomComponentRenderer'

const PageRenderer = ({ componentTree }) => {
  return (
    <>
      {componentTree.map(component => {
        if (component.type === 'Custom')
          return (
            <CustomComponentRenderer
              key={component.id}
              customComponentId={component.customComponentId}
              customComponentInstanceId={component.id}
              data={component.props}
            />
          )
        return (
          <ElementRenderer key={component.id} element={component} renderChildren={renderChildren} />
        )
      })}
    </>
  )
}

function renderChildren(tree) {
  return <PageRenderer componentTree={tree} />
}

export default PageRenderer
