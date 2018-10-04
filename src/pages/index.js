import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Campers</h1>
    <p>My name is Peter Cruckshank</p>
    <p>You can find me on Twitter <a href="https://www.twitter.com/PeteCapeCod">@PeteCapeCod</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
