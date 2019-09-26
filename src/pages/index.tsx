import React from 'react'
import styled from 'styled-components'
import { FaTelegram } from 'react-icons/fa'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Mail, GitHub, Linkedin } from 'react-feather'

import siteConfig from '../../data/siteConfig'
import { HeaderLayout } from '../components/layout/header-layout.component'
import { About } from '../components/about.component'
import { Skills } from '../components/skills.component'
import { Timeline } from '../components/timeline.component'
import { Repositories } from '../components/repositories.component'
import { getTransition } from '../styles'

const PageContent = styled.div`
  max-width: 100%;
  margin-bottom: 40px;
`
const Avatar = styled(Img)`
  margin: 0 auto 24px;
  border-radius: 50%;
  box-shadow: 3px 3px 15px 0 ${(p) => p.theme.palette.text.disabled};
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SocialWrapper = styled.div`
  margin: 12px 0;
`
const SocialLink = styled.a<{ color: string }>`
  padding: 8px;
  transition: ${(p) => getTransition(p.theme, ['color'])};
  :hover {
    color: ${(p) => p.color};
  }
`
const Separator = styled.hr`
  margin: 24px 0 16px 0;
`
const InfoItem = styled.div`
  width: 50%;
  padding: 10px;
  @media(max-width: 800px) {
    width: 100%;
  }
`
const InfoContent = styled.div`
  display: flex;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Home() {
  const title = siteConfig.siteTitle
  const data = useStaticQuery(query)

  return (
    <HeaderLayout title={title} heroImg={siteConfig.siteCover}>
      <PageContent>
        <MainContent>
          <Avatar fixed={data.file.childImageSharp.fixed} />
          <SocialWrapper>
            {siteConfig.social.github && (
              <SocialLink color="#24292e" href={siteConfig.social.github}>
                <GitHub size="32" />
              </SocialLink>
            )}
            {siteConfig.social.linkedin && (
              <SocialLink color="#0077B5" href={siteConfig.social.linkedin}>
                <Linkedin size="32" />
              </SocialLink>
            )}
            {siteConfig.social.telergam && (
              <SocialLink color="#259CD9" href={siteConfig.social.telergam}>
                <FaTelegram size="32" />
              </SocialLink>
            )}
            {siteConfig.social.email && (
              <SocialLink color="#c23a2b" href={`mailto:${siteConfig.social.email}`}>
                <Mail size="32" />
              </SocialLink>
            )}
          </SocialWrapper>
        </MainContent>
        <InfoContent>
          <InfoItem>
            <About title="About" text={siteConfig.authorDescription} />
          </InfoItem>
          <InfoItem>
            <Skills title="Skills" skills={siteConfig.skills} />
          </InfoItem>
        </InfoContent>
        <Separator />
        <Timeline />
        <Separator />
        <Repositories />
      </PageContent>
    </HeaderLayout>
  )
}
