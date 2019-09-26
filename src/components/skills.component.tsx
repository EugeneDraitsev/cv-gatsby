import React from 'react'
import styled from 'styled-components'
import map from 'lodash/map'

const Bar = styled.div`
  height: 10px;
  background-color: ${(p) => p.theme.palette.secondary.main};
  padding: 1px;
`
const LevelBar = styled.div<{ level: number }>`
  background-color: ${(p) => p.theme.palette.primary.main};
  width: ${(p) => p.level || 0}%;
  height: 8px;
`

interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  title?: string
  skills?: Skill[]
}

export const Skills = ({ title = 'Skills', skills = [] }: SkillsProps) => (
  <div>
    <h1>{title}</h1>
    {map(skills, (skill) => (
      <div key={skill.name}>
        <div>{skill.name}</div>
        <Bar>
          <LevelBar level={skill.level} />
        </Bar>
      </div>
    ))}
  </div>
)
