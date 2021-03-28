import React, { memo } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { find } from 'lodash-es'

import { graphql, useStaticQuery } from 'gatsby'

const Logo = styled(GatsbyImage)`
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
              gatsbyImageData(width: 120)
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const image = find(data.images.edges, (x) =>
    x.node.relativePath.includes(`companies/${name}.png`),
  )
  return (
    <Logo
      alt="logo"
      className={className}
      objectFit="contain"
      image={image.node.childImageSharp.gatsbyImageData}
    />
  )
})
