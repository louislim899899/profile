import { GithubLogo, LinkedinLogo } from '@/components/logo/Logo'
import React from 'react'

export default function ContactScreen() {
  return (
    <div>
        <h2 className='text-4xl'>Contact.</h2>
        <p>Have an idea? Let's work it out together</p>

        <p className="text-4xl mt-5 mb-24">louislim899899@gmail(dot)com</p>

        <p className='mb-3'>Connect me via</p>
        <a href='/' className='mr-3 hover:text-red'><LinkedinLogo /></a>
        <a href='/'><GithubLogo /></a>
    </div>
  )
}
