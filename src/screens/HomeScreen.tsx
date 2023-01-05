import ProfileImage from "@/components/profile/ProfileImage";
import ProfileIntro from "@/components/profile/ProfileIntro";
import ProfileSkill from "@/components/profile/ProfileSkill";
import React, {Component} from "react";
// import img from "src/assets/images/logo192.png"

export default class HomeScreen extends Component {


    render() {
        return (
            // <div className="h-screen">
            //     <div className="absolute top-1/2 -translate-y-1/2 left-36">
                        <ProfileIntro/>
                // </div>
                
                /* <div className="absolute top-0 right-56">
                    <div className="relative z-10 h-screen">
                        <ProfileImage/>
                    </div>
                    <div className="h-screen bg-[#e56b6f] w-1/2 absolute z-0 top-0 right-20"></div>
                </div>

                <div className="py-8 absolute top-16 right-16 w-36">
                        <ProfileSkill/>
                </div> */
                
            // </div>
        )
    }


}

export function Heading(){
    return null
}