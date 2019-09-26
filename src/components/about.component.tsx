import React from 'react'

// @ts-ignore
import pdf from '../../static/Draitsev, Eugene.pdf'
import { Link } from './link.component'

interface AboutProps {
  title?: string
  text?: string
}

export const About = ({ title = 'about', text = '' }: AboutProps) => (
  <div>
    <h1>{title}</h1>
    <p>{text}</p>
    You can find my detailed CV in pdf <Link href={pdf}>here</Link>
  </div>
)
