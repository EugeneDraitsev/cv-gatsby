import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

interface Meta {
  name: string
  content: string
}

interface HeadProps {
  title: string
  meta?: Meta[]
  keywords?: string[]
  description?: string
}

export const Head = ({
  description,
  meta = [],
  keywords,
  title,
}: HeadProps) => {
  const data = useStaticQuery(detailsQuery)

  const metaDescription = description || data.site.siteMetadata.description
  const defaultMetaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: data.site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ]
  const keywordsTag = keywords?.length
    ? { name: 'keywords', content: keywords.join(', ') }
    : []
  const metaTags = defaultMetaTags.concat(meta).concat(keywordsTag)

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={metaTags}
    />
  )
}
