import React, { useContext } from 'react'
import styled from 'styled-components'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import map from 'lodash/map'
import 'react-vertical-timeline-component/style.min.css'

import siteConfig from '../../../data/siteConfig'
import { ThemeContext } from '../../contexts'
import { CompanyLogo } from './company-logo.component'

const Wrapper = styled.div`
  color: white;
  .vertical-timeline-element-date {
    color: ${(p) => p.theme.palette.text.primary};
    margin: 0 10px;
  }
  .vertical-timeline :before {
    background: ${(p) => p.theme.palette.secondary.main};
  }
  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px ${(p) => p.theme.palette.secondary.main};;
  }
`
const Item = styled(VerticalTimelineElement as any)``
const Title = styled.h3`
  margin: 0 0 10px 0;
`
const SubTitle = styled.h4`
  margin: 0 0 10px 0;
`
const Description = styled.p`
  font-size: 14px !important;
`

interface TimelineProps {
  className?: string
}

export const Timeline = ({ className }: TimelineProps) => {
  const { theme } = useContext(ThemeContext)
  const background = theme.palette.primary.main

  return (
    <Wrapper className={className}>
      <VerticalTimeline>
        {map(siteConfig.jobs, (job) => (
          <Item
            key={job.date}
            contentStyle={{ background, color: 'fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${background}` }}
            date={`${job.date} (${job.duration})`}
            iconStyle={{ background, color: 'fff' }}
            icon={<CompanyLogo name={job.companyIcon} />}
          >
            <Title>{job.occupation}</Title>
            <SubTitle>
              {job.company} ({job.location})
            </SubTitle>
            <Description>
              {job.description}
            </Description>
          </Item>
        ))}
      </VerticalTimeline>
    </Wrapper>
  )
}
