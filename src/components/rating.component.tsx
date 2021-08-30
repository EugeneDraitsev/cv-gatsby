import React, { memo } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Star = styled.span<{ isActive: boolean; isHalfRating: boolean }>`
  position: relative;
  font-size: 20px;
  line-height: 1;
  color: rgba(255, 255, 255, ${(p) => (p.isActive ? 1 : 0.3)});
  ${(p) =>
    p.isHalfRating &&
    css`
      &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        color: rgb(255, 255, 255);
        overflow: hidden;
        content: '\u2605';
      }
    `}
`

type RatingProps = {
  value: number
  className?: string
}

export const Rating = memo(({ value, className }: RatingProps) => (
  <div className={className}>
    {Array.from({ length: 5 }, (x, i) => i).map((i) => {
      const isActive = value - 0.5 > i
      const isHalfRating = value - 0.5 === i
      return (
        <Star isActive={isActive} isHalfRating={isHalfRating} key={i}>
          {isActive ? '\u2605' : '\u2606'}
        </Star>
      )
    })}
  </div>
))
