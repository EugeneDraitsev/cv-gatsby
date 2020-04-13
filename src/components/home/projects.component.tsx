import React, { memo } from 'react'
import styled from 'styled-components'
import { Card, CardContent, Link } from '@material-ui/core'
import { useAsync } from 'react-use'
import { isArray, map } from 'lodash-es'

import siteConfig from '../../../data/siteConfig'
import { Spinner } from '../spinner.component'
import { SubTitle } from '../typography.component'

const githubProfileUrl =
  `https://api.github.com/users/${siteConfig.githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`


const ProjectsCard = styled(Card)`
  width: 100%;
  max-width: 900px;
`
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 380px;
  width: 100%;
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
  display: flex;
  align-items: center;
  color: #fff;
  min-width: 30px;
  margin-left: 5px;
`
const Star = styled.div`
  font-size: 20px;
  margin-bottom: 3px;
  margin-right: 10px;
`
const Caption = styled.div`
  color: ${(p) => p.theme.palette.text.secondary};
  font-size: 12px;
`


export const Projects = memo(() => {
  const state = useAsync(async () => {
    const response = await fetch(githubProfileUrl)
    return response.json()
  }, [])

  const { loading, error, value: repositories } = state

  return (
    <ProjectsCard>
      <CardContent>
        <div>
          <SubTitle>Latest repositories on Github</SubTitle>
          {loading && (
            <Loading>
              <Spinner />
            </Loading>
          )}
          {!loading && error && <div>{error.message}</div>}
          {!loading && isArray(repositories) && map(repositories, (repository) => (
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
                <Star>★</Star>
                <div>{repository.stargazers_count}</div>
              </Stars>
            </Repository>
          ))}
        </div>
      </CardContent>
    </ProjectsCard>
  )
})
