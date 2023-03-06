import ProfileImage from '@/components/profile/ProfileImage'
import ProfileSkill from '@/components/profile/ProfileSkill'
import { RootState } from '@/services/store'
import React, { lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import ProjectScreen from '../ProjectScreen'
import '@/assets/styles/animation.css'
import { useDispatch } from 'react-redux'
import { transitionActions } from '@/services/store/transitionSlice'
import { screenActions } from '@/services/store/screenSlice'
import { current } from '@reduxjs/toolkit'
import AboutScreen from '../AboutScreen'
import ExperienceScreen from '../ExperienceScreen'
import ContactScreen from '../ContactScreen'
import Github from '@/components/profile/Github'

// const HomeScreen = lazy(() => import('../HomeScreen'));
// const AboutScreen = lazy(() => import('../AboutScreen'));

export default function Body() {
    const location = useLocation()
    const dispatch = useDispatch()

    const isHomeScreen = useSelector((state: RootState) => state.screen.isHomeScreen)
    const currentUrl = useSelector((state: RootState) => state.screen.currentUrl)
    const transition = useSelector((state: RootState) => state.transition.transition)

    useEffect(() => {
        if (location.pathname !== currentUrl) {
            dispatch(transitionActions.changeTransition("FADE_OUT"))
        }
    }, [location, currentUrl])

    const compareUrl = () => {
        // dispatch(screenActions.currentUrl())
        console.log(location.pathname)
        
        if (transition === "fade-out") {
            dispatch(transitionActions.changeTransition("FADE_IN"))
            dispatch(screenActions.setCurrentUrl(location.pathname))
        } 
        console.log(currentUrl)
    }

  return (
    <div>

        <div className="h-screen">
            <div className={"absolute max-w-2xl pt-52 left-36 h-screen overflow-y-scroll " + transition} onAnimationEnd={()=> {compareUrl()}}>
            <Routes location={currentUrl} >
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/about" element={<AboutScreen/>}/>
                <Route path="/project" element={<ProjectScreen/>}/>
                <Route path="/experience" element={<ExperienceScreen/>}/>
                <Route path="/contact" element={<ContactScreen/>}/>
            </Routes>
            </div>
        </div>
        

        <div className={"absolute top-0 right-56 transition-all ease-in-out duration-500" + (isHomeScreen ? " right-56" : " right-0 delay-300") }>
            <div className="relative z-10 h-screen">
                <ProfileImage/>
            </div>
            <div className="h-screen bg-[#e56b6f] w-1/2 absolute z-0 top-0 right-20"></div>
        </div>

        <div className={"py-8 absolute top-16 right-16 w-36 transition-all ease-in-out duration-300" + (isHomeScreen ? " opacity-100 delay-300" : " opacity-0") }>
            <ProfileSkill/>
        </div>

        <div className={"py-8 absolute top-16 right-16 w-36 transition-all ease-in-out duration-300" + (isHomeScreen ? " opacity-100 delay-300" : " opacity-0") }>
            <Github/>
        </div>

    </div>
  )
}
