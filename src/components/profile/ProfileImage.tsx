import React from 'react'
import img from "@/assets/images/man-123.png"

export default function ProfileImage() {
  return (
    <img src={img} alt="my profile" className='h-full grayscale pt-[120px] m-auto'/>
  )
}
