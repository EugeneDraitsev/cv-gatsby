import React, { memo } from 'react'
import styled, { keyframes } from 'styled-components'
import { times, random } from 'lodash-es'

const rotate = keyframes`
  from {
    -webkit-transform: rotateZ(0deg);
    transform: rotateZ(0deg);
  }
  to {
    -webkit-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
`

const GalaxyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  background: black;
  max-height: 500px;
  overflow: hidden;
  filter: grayscale(100%);
`
const Universe = styled.div`
  transform-style: preserve-3d;
  transform: perspective(50em) rotateX(-120deg) rotateY(20deg);
`

const Galaxy = styled.div`
  height: 800px;
  width: 800px;
  margin: auto;
  background-image: radial-gradient(circle, peachpuff, darkblue, transparent 70%);
  animation: ${rotate} 300s linear infinite;
  border-radius: 50%;
  overflow: hidden;
`
const Star = styled.div`
  border-radius: 50%;
  position: absolute;
  box-shadow: -6px -8px 10px #F8A50E, -4px 7px 10px #BFF80E, 6px -4px 10px #0ED6F8;
`

interface GalaxyProps {
  className?: string
}

export const GalaxyHeader = memo(({ className }: GalaxyProps) => (
  <GalaxyContainer className={className}>
    {times(700, (index) => {
      const size = random(5, true)
      const background = `hsla(${random(360, true)},50%,75%, 1)`
      return (
        <Star
          key={index}
          style={{
            top: `${random(100, true)}%`,
            left: `${random(100, true)}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: random(0.8),
            background,
          }}
        />
      )
    })}
    <Universe>
      <Galaxy>
        {times(5000, (index) => {
          const size = random(3, true)
          const background = `hsla(${random(360, true)},50%,75%, 1)`
          return (
            <Star
              key={index}
              style={{
                top: `${random(100, true)}%`,
                left: `${random(100, true)}%`,
                width: `${size}px`,
                height: `${size}px`,
                background,
              }}
            />
          )
        })}
      </Galaxy>
    </Universe>
  </GalaxyContainer>
))
