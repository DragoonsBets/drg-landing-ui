import React from 'react'
import Router from 'next/router'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)