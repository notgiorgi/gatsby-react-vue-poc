import React from 'react'
import PropTypes from 'prop-types'

import * as Elements from '../../elements'

const ElementRenderer = ({ element: { id, type, props, children }, renderChildren }) => {
  const Component = Elements[type]
  if (!Component) throw new Error(`No element ${type} found`)

  return (
    <Component id={id} {...props} renderChildren={renderChildren}>
      {children}
    </Component>
  )
}

ElementRenderer.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    props: PropTypes.object,
    children: PropTypes.array,
  }).isRequired,
}

export default ElementRenderer
