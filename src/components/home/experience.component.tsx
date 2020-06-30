import React, { memo } from 'react'
import { Box, Card, CardContent } from '@material-ui/core'
import { map } from 'lodash-es'
import styled from 'styled-components'

import siteConfig from '../../../data/siteConfig'
import { Bracket } from '../bracket.component'
import {
  Constant,
  Declaration,
  Keyword,
  SubTitle,
} from '../typography.component'
import { CompanyLogo } from './company-logo.component'

const ExperienceCard = styled(Card)`
  width: 100%;
  max-width: 900px;
`
const Job = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
const Logo = styled(CompanyLogo)`
  min-width: 60px;
  max-width: 60px;
  max-height: 60px;
  min-height: 60px;
  margin: auto 20px;
  @media (max-width: 600px) {
    margin: 0 20px 10px 20px;
  }
`
const Name = styled(Constant)`
  font-size: 16px;
`
const JobSummary = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-right: 15px;
  font-size: 13px;
  @media (max-width: 600px) {
    margin: 10px 0;
    text-align: center;
  }
`
const JobDescription = styled.div`
  @media (max-width: 600px) {
    margin: 10px 0;
    text-align: center;
  }
`

export const Experience = memo(() => (
  <ExperienceCard>
    <CardContent>
      <SubTitle>Careers</SubTitle>
      <Bracket square open />
      <Box ml={2}>
        {map(siteConfig.jobs, (job) => (
          <div key={job.date}>
            <Bracket open />
            <Job>
              <Logo name={job.companyIcon} />
              <JobSummary>
                <Name>{job.company}</Name>
                <Declaration>{job.location}</Declaration>
                <div>{job.occupation}</div>
                <div>{job.date}</div>
              </JobSummary>
              <JobDescription>{job.description}</JobDescription>
            </Job>
            <Bracket />
            <Keyword>,</Keyword>
          </div>
        ))}
      </Box>
      <Bracket square />
      <Box mt={2} />
      <SubTitle>Education</SubTitle>
      <Bracket square open />
      <Box ml={2}>
        {map(siteConfig.education, (education) => (
          <div key={education.startYear}>
            <Bracket open />
            <Job>
              <Logo name={education.icon} />
              <JobSummary>
                <Name>{education.name}</Name>
                <Declaration>{education.location}</Declaration>
                <div>{education.degreeLevel}</div>
                <div>{education.specialization}</div>
                <div>
                  {education.startYear} — {education.endYear}
                </div>
              </JobSummary>
            </Job>
            <Bracket />
            <Keyword>,</Keyword>
          </div>
        ))}
      </Box>
      <Bracket square />
    </CardContent>
  </ExperienceCard>
))
