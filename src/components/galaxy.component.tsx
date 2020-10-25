import React, { memo } from 'react'
import styled, { keyframes } from 'styled-components'
import { times, random } from 'lodash-es'
import { useWindowSize } from 'react-use'

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
  background: black;
  overflow: hidden;
  filter: grayscale(100%);
  .star {
    border-radius: 50%;
    position: absolute;
    box-shadow: -6px -8px 10px #f8a50e, -4px 7px 10px #bff80e,
      6px -4px 10px #0ed6f8;
    animation: ${fadeIn} 500ms ease-in-out;
  }
`
const Universe = styled.div<{ svg: string }>`
  height: 800px;
  background-image: url('data:image/svg+xml;utf8,${(p) => p.svg}');
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
const Galaxy = styled.div<{ svg: string }>`
  height: 800px;
  width: 800px;
  background-image: url('data:image/svg+xml;utf8,${(p) => p.svg}');
  animation: ${rotate} 300s linear infinite, ${fadeIn} 1500ms ease-in;
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
`

const generateSVG = (
  countMultiplier = 2,
  width = 800,
  height = 800,
  initSize = 1.5,
  mixedOpacity = false,
) => {
  if (typeof window !== 'undefined') {
    const count = Math.min(window.innerWidth * 1.35, 2000) * countMultiplier
    const circles = times(count, () => {
      const style = {
        cx: random(true) * width,
        cy: random(true) * height,
        r: random(initSize, true),
        opacity: mixedOpacity ? random(0.8) : 1,
        fill: `hsla(${random(360, true)},50%,75%, 1)`,
      }
      const styleString = Object.entries(style).reduce(
        (acc, [propName, propValue]) => `${acc} ${propName}="${propValue}"`,
        '',
      )
      return `<circle ${styleString} />`
    })

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      ${circles.join('\n')}
    </svg>
  `
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" />`
}

interface GalaxyProps {
  className?: string
}

const isBrowser = () => typeof window !== 'undefined'

const galaxySvg = generateSVG()
const universeSvg = generateSVG(
  1,
  isBrowser() ? window.innerWidth : 800,
  800,
  2.5,
  true,
)

export const GalaxyHeader = memo(({ className }: GalaxyProps) => {
  const { width } = useWindowSize()
  return (
    <Container className={className}>
      {Number.isFinite(width) && <Universe svg={universeSvg} />}
    </Container>
  )
})
