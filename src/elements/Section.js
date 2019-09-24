import React from 'react'

const Section = ({ id, style, children, renderChildren }) => {
  return (
    <div id={id} style={{ ...defaultStyle, ...style }}>
      {children && children.length > 0 && renderChildren(children)}
    </div>
  )
}

const defaultStyle = {}

export default Section
