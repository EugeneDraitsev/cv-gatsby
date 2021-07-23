import React, { memo } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  max-height: 60vh;
  background: #121212;
  overflow: hidden;
  filter: grayscale(100%);
`
const Universe = styled.div`
  height: 800px;
  background-image: url('/svg/universe.svg');
  animation: ${fadeIn} 2500ms ease-in;
`
const NebulaeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  height: 800px;
  transform: translateX(-50%) translateY(calc(-50% - 50px));
  background: transparent;
  z-index: 0;
`
const Nebulae = styled.div`
  width: 800px;
  height: 800px;
  transform-style: preserve-3d;
  transform: perspective(50em) rotateX(-120deg) rotateY(20deg);
  animation: ${fadeIn} 2500ms ease-in;
  background-image: radial-gradient(
    circle,
    rgba(255, 218, 185, 1),
    rgba(0, 0, 139, 1),
    transparent 70%
  );
`
const NebulaeWrapper2 = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 800px;
  height: 800px;
  transform: translateX(-50%) translateY(calc(-50% - 50px));
  background: transparent;
  z-index: 0;
`
const GalaxyContainer = styled.div`
  width: 800px;
  height: 800px;
  transform-style: preserve-3d;
  transform: perspective(50em) rotateX(-120deg) rotateY(20deg);
  z-index: 1;
`
const Galaxy = styled.div`
  height: 800px;
  width: 800px;
  background-image: url('/svg/galaxy.svg');
  animation: ${rotate} 300s linear infinite, ${fadeIn} 1500ms ease-in;
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
`

interface GalaxyProps {
  className?: string
}

export const GalaxyHeader = memo(({ className }: GalaxyProps) => (
  <Container className={className}>
    <Universe>
      <NebulaeWrapper>
        <Nebulae />
      </NebulaeWrapper>
      <NebulaeWrapper2>
        <GalaxyContainer>
          <Galaxy />
        </GalaxyContainer>
      </NebulaeWrapper2>
    </Universe>
  </Container>
))
