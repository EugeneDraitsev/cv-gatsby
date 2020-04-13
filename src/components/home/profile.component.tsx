import React, { memo } from 'react'
import { Box, Card, CardContent, Link } from '@material-ui/core'
import { isNumber, isString, map } from 'lodash-es'
import styled from 'styled-components'

import siteConfig from '../../../data/siteConfig'
import { Bracket } from '../bracket.component'
import pdf from '../../../static/eugene-draitsev.pdf'
import { Constant, Keyword, NumberValue, StringValue, SubTitle } from '../typography.component'

const InfoCard = styled(Card)`
  max-width: 900px;
`
const InfoContent = styled(CardContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  @media(max-width: 600px) {
    padding: 0;
  }
`
const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  flex: 1;
  @media(max-width: 600px) {
    padding: 0;
  }
`

export const Profile = memo(() => (
  <InfoCard>
    <InfoContent>
      <InfoItem>
        <SubTitle>About me</SubTitle>
        <p>{siteConfig.authorDescription}</p>
        <p>
          You can find my <Link color="secondary" href={pdf}>detailed CV in pdf here</Link>
        </p>
      </InfoItem>
      <InfoItem>
        <SubTitle>Details</SubTitle>
        <DetailsContent>
          <Bracket open />
          <Box ml={2}>
            {map(siteConfig.details, (value, key) => (
              <div key={key}>
                <Constant>{key}</Constant>:
                {isNumber(value) && <NumberValue> {value}</NumberValue>}
                {isString(value) && <StringValue> &apos;{value}&apos;</StringValue>}
                <Keyword>,</Keyword>
              </div>
            ))}
          </Box>
          <Bracket />
        </DetailsContent>
      </InfoItem>
    </InfoContent>
  </InfoCard>
))
