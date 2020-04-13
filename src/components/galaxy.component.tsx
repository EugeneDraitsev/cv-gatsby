import React, { memo, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { times, random, identity, chunk } from 'lodash-es'

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

const GalaxyContainer = styled.div`
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
    box-shadow: -6px -8px 10px #F8A50E, -4px 7px 10px #BFF80E, 6px -4px 10px #0ED6F8;
    animation: ${fadeIn} 500ms ease-in-out;
  }
`
const Universe = styled.div`
  transform-style: preserve-3d;
  transform: perspective(50em) rotateX(-120deg) rotateY(20deg);
`
const Galaxy = styled.div`
  height: 800px;
  width: 800px;
  margin: -200px auto auto auto;
  background-image: radial-gradient(circle, peachpuff, darkblue, transparent 70%);
  animation: ${rotate} 300s linear infinite, ${fadeIn} 2500ms ease-in;
  border-radius: 50%;
  overflow: hidden;
  will-change: transform;
`

const sleep = (time = 10) => new Promise((resolve) => setTimeout(resolve, time))

const addStars = async (container: HTMLDivElement, count: number, initSize: number, mixedOpacity = false) => {
  const tasks = times(count, identity)
  const chunks = chunk(tasks, 8)

  const stars = container.querySelectorAll(':scope > .star')
  stars.forEach((star) => container.removeChild(star))

  for (const item of chunks) {
    times(item.length, () => {
      const size = random(initSize, true)
      const background = `hsla(${random(360, true)},50%,75%, 1)`
      const node = document.createElement('div')
      node.classList.add('star')
      const style = {
        top: `${random(100, true)}%`,
        left: `${random(100, true)}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: mixedOpacity ? random(0.8) : 1,
        background,
      }
      const styleString = Object.entries(style)
        .reduce((acc, [propName, propValue]) => `${acc}${propName}:${propValue};`, '')
      node.setAttribute('style', styleString)
      container.appendChild(node)
    })
    // eslint-disable-next-line no-await-in-loop
    await sleep(50)
  }
}


interface GalaxyProps {
  className?: string
}

export const GalaxyHeader = memo(({ className }: GalaxyProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const galaxyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      addStars(containerRef.current, Math.min(window.innerWidth, 2000) / 3, 5, true)
    }
  }, [containerRef])

  useEffect(() => {
    if (galaxyRef.current) {
      addStars(galaxyRef.current, Math.min(window.innerWidth, 2000), 3)
    }
  }, [galaxyRef])

  return (
    <GalaxyContainer className={className} ref={containerRef}>
      <Universe>
        <Galaxy ref={galaxyRef} />
      </Universe>
    </GalaxyContainer>
  )
})
