import React, { useMemo } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query AllPages {
      allSitePage {
        edges {
          node {
            id
            path
            component
          }
        }
      }
    }
  `)

  const pages = useMemo(
    () =>
      data.allSitePage.edges
        .map(edge => edge.node)
        .filter(page => page.component.includes('standard-page')),
    [],
  )

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h1>Welcome to the PoC</h1>

      <h3>Available pages:</h3>
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <Link to={page.path}>{page.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
