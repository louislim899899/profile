import React from 'react'
import ExperienceMap from '@/utils/dicts/ExperienceMap'

export default function ExperienceScreen() {

  console.log(ExperienceMap);

  return (
    <div>
      {
      Array.from(ExperienceMap, ([key, value]) => {
        return (
          <div key={key} className="mb-10">
            <h3>{value.get('year')}</h3>
            <h4>{value.get('company')}</h4>
            <h5>{value.get('position')}</h5>
            <p>{
            Array.isArray(value.get('description')) ? 
            value.get('description').map((value,index) => 
              (<li key={index}>{value}</li>)
            ) :
              <li>{value.get('description')}</li>
            }</p>
          </div>
        )
      })
      }
    
    </div>
  )
}
