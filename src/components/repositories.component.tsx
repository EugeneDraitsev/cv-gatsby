import React, { memo } from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'
import map from 'lodash/map'

import siteConfig from '../../data/siteConfig'
import { Spinner } from './spinner.component'
import { Link } from './link.component'

const githubProfileUrl =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Repository = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(p) => p.theme.palette.text.primary};
`
const TextBlock = styled.div`
  flex: 1;
`
const Description = styled.div`
  padding: 5px 0;
`
const Stars = styled.div`
  color: ${(p) => p.theme.palette.primary.main};
  min-width: 30px;
  margin-left: 5px;
`
const Caption = styled.div`
  color: ${(p) => p.theme.palette.text.disabled};
  font-size: 12px;
`

interface RepositoriesProps {
  url?: string
  className?: string
}

export const Repositories = memo(({ url = githubProfileUrl, className }: RepositoriesProps) => {
  const state = useAsync(async () => {
    const response = await fetch(url)
    return response.json()
  }, [url])

  const { loading, error, value: repositories } = state

  return (
    <div className={className}>
      <h2>Latest repositories on Github</h2>
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      {!loading && error && <div>{error.message}</div>}
      {!loading && repositories && map(repositories, (repository) => (
        <Repository key={repository.html_url}>
          <TextBlock>
            <Link href={repository.html_url}>
              <strong>{repository.name}</strong>
            </Link>
            <Description>{repository.description}</Description>
            <Caption>
              Updated: {new Date(repository.updated_at).toUTCString()}
            </Caption>
          </TextBlock>
          <Stars>
            ★ {repository.stargazers_count}
          </Stars>
        </Repository>
      ))}
    </div>
  )
})
