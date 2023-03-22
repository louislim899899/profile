import ProfileImage from '@/components/profile/ProfileImage'
import ProfileSkill from '@/components/profile/ProfileSkill'
import { RootState } from '@/services/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from '../HomeScreen'
import ProjectScreen from '../ProjectScreen'
import '@/assets/styles/animation.css'
import { useDispatch } from 'react-redux'
import { transitionActions } from '@/services/store/transitionSlice'
import { screenActions } from '@/services/store/screenSlice'
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
    const device = useSelector((state: RootState) => state.screen.device)

    // console.log(isHomeScreen);

    useEffect(() => {
        if (location.pathname !== currentUrl) {
            dispatch(transitionActions.changeTransition("FADE_OUT"))
        } 
        checkHomeScreen(); 

    }, [location, currentUrl])

    useEffect(() => {
        // setTimeout(() => {
        //     getDevice();
        // }, 5000)
        getDevice(); 
    }, [device])  // run only first time;

    const checkHomeScreen = () => {
        currentUrl === "/" ? dispatch(screenActions.isHomeScreen()) : dispatch(screenActions.notHomeScreen());
    }

    const getDevice = () => {
        dispatch(screenActions.getDevice());
    }

    const compareUrl = () => {
        // dispatch(screenActions.currentUrl())
        // console.log(location.pathname)
        
        if (transition === "fade-out") {
            dispatch(transitionActions.changeTransition("FADE_IN"))
            dispatch(screenActions.setCurrentUrl(location.pathname))
        } 
    }

  return (
    <div className="profile">
        <div className='profile__container'>
            <div className={"profile__content " + transition} onAnimationEnd={()=> {compareUrl()}}>
                <Routes location={currentUrl} >
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route path="/about" element={<AboutScreen/>}/>
                    <Route path="/project" element={<ProjectScreen/>}/>
                    <Route path="/experience" element={<ExperienceScreen/>}/>
                    <Route path="/contact" element={<ContactScreen/>}/>
                </Routes>
            </div>
        </div>
        

        {/* <div className={"profile__image" + (isHomeScreen ? " right-56" : " right-0 delay-300") }> */}
        <div className={"profile__image" + (isHomeScreen ? " is-home" : " not-home") }>
                <ProfileImage/>
            <div className="profile__deco"></div>
        </div>

        <div className={"profile__skill" + (isHomeScreen ? " is-home" : " not-home") }>
            <ProfileSkill/>
        </div>

        <div className={"profile__github" + (isHomeScreen ? " is-home" : " not-home") }>
            <Github/>
        </div>

    </div>
  )
}
