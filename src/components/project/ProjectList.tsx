import React from 'react'
import projectMap from '../../utils/dicts/ProjectMap'

export default function ProjectList() {
  return (
    Array.from(projectMap, (key, value) => {
      return (
        <div>
            value
          </div>
      )
    })
  )
}
