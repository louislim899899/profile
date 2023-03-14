import React from 'react'
import {VueLogo, ReactLogo, TailwindLogo, PhpLogo, SqlLogo, PythonLogo, SassLogo} from '../logo/Logo'

export default function ProfileSkill () {
  return (
    <div>
        <h2>Skills.</h2>
        <p>Frontend</p>
        <div className='mb-6 mt-1'>
            <VueLogo />
            <ReactLogo />
            <TailwindLogo />
            <SassLogo />
        </div>
        <p className='-mb-4'>Backend</p>
            <PhpLogo />
            <SqlLogo />
            <PythonLogo />
    </div>
  )
}
