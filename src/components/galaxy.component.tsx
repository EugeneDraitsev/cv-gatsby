import React, { memo, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { times, random, identity, chunk } from 'lodash-es'

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
  .star {
    border-radius: 50%;
    position: absolute;
    box-shadow: -6px -8px 10px #F8A50E, -4px 7px 10px #BFF80E, 6px -4px 10px #0ED6F8;
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
  animation: ${rotate} 300s linear infinite;
  border-radius: 50%;
  overflow: hidden;
`
// const Star = styled.div`
//   border-radius: 50%;
//   position: absolute;
//   box-shadow: -6px -8px 10px #F8A50E, -4px 7px 10px #BFF80E, 6px -4px 10px #0ED6F8;
// `

// const addStars = (container: HTMLDivElement, getStyle: () => any) => {
//   const node = document.createElement('div')
//   node.classList.add('star')
//   const style = getStyle()
//   const styleString = Object.entries(style)
//     .reduce((acc, [propName, propValue]) => `${acc}${propName}:${propValue};`, '')
//   node.setAttribute('style', styleString)
//   container.appendChild(node)
// }

interface GalaxyProps {
  className?: string
}

const sleep = (time = 10) => new Promise((resolve) => setTimeout(resolve, time))

export const GalaxyHeader = memo(({ className }: GalaxyProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const galaxyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const addStars = async () => {
      if (containerRef.current) {
        const tasks = times((containerRef.current?.getBoundingClientRect().width ?? 500) / 3, identity)
        const chunks = chunk(tasks, 8)

        for (const item of chunks) {
          times(item.length, () => {
            const size = random(5, true)
            const background = `hsla(${random(360, true)},50%,75%, 1)`
            const node = document.createElement('div')
            node.classList.add('star')
            const style = {
              top: `${random(100, true)}%`,
              left: `${random(100, true)}%`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: random(0.8),
              background,
            }
            const styleString = Object.entries(style)
              .reduce((acc, [propName, propValue]) => `${acc}${propName}:${propValue};`, '')
            node.setAttribute('style', styleString)
            containerRef.current?.appendChild(node)
          })
          // eslint-disable-next-line no-await-in-loop
          await sleep(50)
        }
      }
    }
    addStars()
  }, [containerRef])

  useEffect(() => {
    const addStars = async () => {
      if (containerRef.current) {
        const tasks = times((galaxyRef.current?.getBoundingClientRect().width ?? 500), identity)
        const chunks = chunk(tasks, 8)

        for (const item of chunks) {
          times(item.length, () => {
            const size = random(3, true)
            const background = `hsla(${random(360, true)},50%,75%, 1)`
            const node = document.createElement('div')
            node.classList.add('star')
            const style = {
              top: `${random(100, true)}%`,
              left: `${random(100, true)}%`,
              width: `${size}px`,
              height: `${size}px`,
              background,
            }
            const styleString = Object.entries(style)
              .reduce((acc, [propName, propValue]) => `${acc}${propName}:${propValue};`, '')
            node.setAttribute('style', styleString)
            galaxyRef.current?.appendChild(node)
          })
          // eslint-disable-next-line no-await-in-loop
          await sleep(50)
        }
      }
    }
    addStars()
  }, [galaxyRef])

  return (
    <GalaxyContainer className={className} ref={containerRef}>
      <Universe>
        <Galaxy ref={galaxyRef} />
      </Universe>
    </GalaxyContainer>
  )
})
