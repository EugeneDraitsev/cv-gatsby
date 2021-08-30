import React, { memo } from 'react'
import styled from '@emotion/styled'
import { Box, Card, CardContent } from '@material-ui/core'

import { Bracket } from '../bracket.component'
import { Rating } from '../rating.component'
import { Constant, Keyword, SubTitle } from '../typography.component'
import siteConfig from '../../../data/siteConfig'

const AbilitiesCard = styled(Card)`
  width: 100%;
  max-width: 900px;
`
const SkillRating = styled(Rating)`
  margin-left: 10px;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`
const Skills = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 300px 300px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Abilities = memo(() => (
  <AbilitiesCard>
    <CardContent>
      <SubTitle>Skills</SubTitle>
      <Skills>
        {siteConfig.skills?.map((category) => (
          <div key={category.name}>
            <div>{category.name}:</div>
            <Box mt={2} />
            <Bracket open />
            <Box ml={2}>
              {category.data?.map((skill) => (
                <Row key={skill.name}>
                  <Constant>{skill.name}: </Constant>
                  <SkillRating value={skill.value} />
                  <Keyword>,</Keyword>
                </Row>
              ))}
            </Box>
            <Bracket />
          </div>
        ))}
      </Skills>
      <SubTitle>Languages</SubTitle>
      <Bracket open />
      <Box ml={2}>
        {siteConfig.languages?.map((language) => (
          <Row key={language.name}>
            <Constant>{language.name}: </Constant>
            <SkillRating value={language.value} />
            <Keyword>,</Keyword>
          </Row>
        ))}
      </Box>
      <Bracket />
    </CardContent>
  </AbilitiesCard>
))
