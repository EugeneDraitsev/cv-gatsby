import React, { memo } from 'react'
import styled from 'styled-components'
import { Card, CardContent } from '@material-ui/core'
import { GitHub, Linkedin, Mail } from 'react-feather'
import { FaTelegram } from 'react-icons/fa'

import siteConfig from '../../../data/siteConfig'
import { SubTitle } from '../typography.component'

import { getTransition } from '../../utils'

const ContactsCard = styled(Card)`
  width: 100%;
  max-width: 900px;
`
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
`
const SocialLink = styled.a<{ color: string }>`
  padding: 8px;
  transition: ${(p) => getTransition(p.theme, ['color'])};
  :hover {
    color: ${(p) => p.color};
  }
`

export const Contacts = memo(() => (
  <ContactsCard>
    <CardContent>
      <SubTitle>You can find me here</SubTitle>
      <SocialWrapper>
        {siteConfig.social.github && (
          <SocialLink
            color="#24292e"
            href={siteConfig.social.github}
            aria-label="github"
          >
            <GitHub size="32" />
          </SocialLink>
        )}
        {siteConfig.social.linkedin && (
          <SocialLink
            color="#0077B5"
            href={siteConfig.social.linkedin}
            aria-label="linkedin"
          >
            <Linkedin size="32" />
          </SocialLink>
        )}
        {siteConfig.social.telergam && (
          <SocialLink
            color="#259CD9"
            href={siteConfig.social.telergam}
            aria-label="telergam"
          >
            <FaTelegram size="32" />
          </SocialLink>
        )}
        {siteConfig.social.email && (
          <SocialLink
            color="#c23a2b"
            href={`mailto:${siteConfig.social.email}`}
            aria-label="email"
          >
            <Mail size="32" />
          </SocialLink>
        )}
      </SocialWrapper>
    </CardContent>
  </ContactsCard>
))
