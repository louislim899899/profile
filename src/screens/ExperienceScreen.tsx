import React from 'react'
import ExperienceMap from '@/utils/dicts/ExperienceMap'

export default function ExperienceScreen() {

  return (
    <div>
      {
      Array.from(ExperienceMap, ([key, value]) => {
        return (
          <div key={key} className="block">
            <h3>{value.get('year')}</h3>
            <h4>{value.get('company')}</h4>
            <h5 className="font-color--main">{value.get('position')}</h5>
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
