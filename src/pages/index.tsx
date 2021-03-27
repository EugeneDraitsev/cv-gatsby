import React from 'react'
import styled from '@emotion/styled'

import {
  HeaderLayout,
  Title,
  Profile,
  Experience,
  Abilities,
  Projects,
  Contacts,
} from '../components'

const PageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -100px 0 40px 0;
`

export default function Home() {
  return (
    <HeaderLayout title="CV">
      <PageContent>
        <Profile />

        <Title>Experience</Title>
        <Experience />

        <Title>Abilities</Title>
        <Abilities />

        <Title>Projects</Title>
        <Projects />

        <Title>Contacts</Title>
        <Contacts />
      </PageContent>
    </HeaderLayout>
  )
}
