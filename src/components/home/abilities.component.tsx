import React, { memo } from 'react'
import styled from '@emotion/styled'
import { Box, Card, CardContent, Rating } from '@material-ui/core'
import { map } from 'lodash-es'

import { Bracket } from '../bracket.component'
import { Constant, Keyword, SubTitle } from '../typography.component'
import siteConfig from '../../../data/siteConfig'

const AbilitiesCard = styled(Card)`
  width: 100%;
  max-width: 900px;
`
const SkillRating = styled(Rating)`
  margin-left: 10px;
  .MuiRating-iconFilled {
    color: #ffffff;
  }
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
        {map(siteConfig.skills, (category) => (
          <div key={category.name}>
            <div>{category.name}:</div>
            <Box mt={2} />
            <Bracket open />
            <Box ml={2}>
              {map(category.data, (skill) => (
                <Row key={skill.name}>
                  <Constant>{skill.name}: </Constant>
                  <SkillRating
                    defaultValue={skill.value}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
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
        {map(siteConfig.languages, (language) => (
          <Row key={language.name}>
            <Constant>{language.name}: </Constant>
            <SkillRating
              defaultValue={language.value}
              precision={0.5}
              readOnly
              size="small"
            />
            <Keyword>,</Keyword>
          </Row>
        ))}
      </Box>
      <Bracket />
    </CardContent>
  </AbilitiesCard>
))
