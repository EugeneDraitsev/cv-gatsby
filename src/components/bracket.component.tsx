import React, { memo } from 'react'

type BracketProps = {
  open?: boolean
  square?: boolean
  className?: string
}

export const Bracket = memo(({ open, square, className }: BracketProps) => {
  // eslint-disable-next-line no-nested-ternary
  const bracket = square ? (open ? '[' : ']') : open ? '{' : '}'
  return <span className={className}>{bracket}</span>
})
