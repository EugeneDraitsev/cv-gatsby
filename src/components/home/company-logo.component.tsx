import React, { memo } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { find } from 'lodash-es'

import { graphql, useStaticQuery } from 'gatsby'

const Logo = styled(Img)`
  border-radius: 50%;
`

interface CompanyLogoProps {
  name: string
  className?: string
}

export const CompanyLogo = memo(({ name, className }: CompanyLogoProps) => {
  const query = graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const image = find(data.images.edges, (x) => x.node.relativePath.includes(`companies/${name}.png`))
  return <Logo className={className} fixed={image.node.childImageSharp.fixed} />
})
