import React from 'react'

// @ts-ignore
import pdf from '../../static/eugene-draitsev.pdf'
import { Link } from './link.component'

interface AboutProps {
  title?: string
  text?: string
}

export const About = ({ title = 'about', text = '' }: AboutProps) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
    You can find my <Link href={pdf}>detailed CV in pdf here</Link>
  </div>
)
