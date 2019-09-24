import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Vue from 'vue'

import * as CustomComponents from '../../custom_components'

const CustomComponentRenderer = ({ customComponentId, customComponentInstanceId, data }) => {
  useEffect(() => {
    const CustomComponent = CustomComponents[customComponentId]

    if (!CustomComponent) throw new Error(`No custom component ${customComponentId} found`)

    const vm = new Vue({
      components: {
        CustomComponent,
      },
      render: function(h) {
        return h('CustomComponent', {
          props: data,
        })
      },
    })

    vm.$mount('#' + customComponentInstanceId)

    return () => {
      vm.$destroy()
    }
  }, [])

  return <div id={customComponentInstanceId}></div>
}

CustomComponentRenderer.propTypes = {
  customComponentId: PropTypes.string.isRequired,
  customComponentInstanceId: PropTypes.string.isRequired,
  data: PropTypes.object,
}

export default CustomComponentRenderer
