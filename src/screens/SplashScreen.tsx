import React, { useEffect } from 'react'

/**** 
 * Animated handwriting text
 * Credit to: https://akashraj9828.github.io/svg-text-animation-generator/
*/
export default function SplashScreen() {

    useEffect(() => {
        function setTextAnimation(
            delay: number, 
            duration: number, 
            strokeWidth: number, 
            timingFunction: string, 
            strokeColor: string,
            repeat: boolean): void {
            const paths = document.querySelectorAll(".splash__logo path");
            const mode=repeat?'infinite':'forwards'
            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                /* istanbul ignore next */
                const length = path.getTotalLength();
                // const length = 1;
                path.style["stroke-dashoffset"] = `${length}px`;
                path.style["stroke-dasharray"] = `${length}px`;
                path.style["stroke-width"] = `${strokeWidth}px`;
                path.style["stroke"] = `${strokeColor}`;
                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
                path.style["animation-delay"] = `${i * delay}s`;
            }

            // const elem2 = document.querySelector("svg") as SVGSVGElement;
            // elem2.style.animation = `animation-slide-in-up 2000ms forwards`;
        }

        // function dismissScreen():Promise<boolean> {
        //     const paths = document.querySelectorAll(".splash__logo path")
        //     const splashElem = document.querySelector(".splash-screen") as HTMLElement;

        //     const lastPath = paths[paths.length-1];
        //     Promise.all(lastPath.getAnimations().map((animation) =>
        //         animation.finished
        //     )).then (() => {
        //         splashElem.style.animation = "zoom-in-fade-out 1000ms forwards";
        //         console.log("animation ended")
        //     })
        //     return(Promise.resolve(true))
            
        // }

        function dismissScreen(element) {
            return new Promise((resolve) => {
                element.addEventListener('animationend', () => {
                    element.style.animation = "zoom-in-fade-out 1000ms forwards";
                    resolve(true);
                })
            })
        }

        async function exitScreen() {

            const splashElem = document.querySelector(".splash-screen") as HTMLElement;
            try{
                await dismissScreen(splashElem);
            } catch {
                console.log("not yet");
            }
        }
        



            // paths[paths.length-1].style["animation"] = "1s animation-slide-in-up ease-in-out";
        

        setTextAnimation(0,2,2,'ease-in-out','#ffffff',false);
        exitScreen();

        
    }, [])

    const mystyle:React.CSSProperties = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

  return (
    <div className='splash-screen'>
        <div className="svgWrapper splash__logo">
        <svg width="80.4" height="97.8" viewBox="0 0 80.4 99.8" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={mystyle}>
                <path d="M 10.35 9.9 L 0 8.85 L 0 0 L 52.35 0 L 52.35 8.85 L 40.35 10.05 Q 40.2 19.05 40.2 28.125 L 40.2 46.5 L 40.2 53.4 A 1899.199 1899.199 0 0 0 40.219 61.725 A 2224.262 2224.262 0 0 0 40.275 70.5 Q 40.35 79.5 40.5 88.8 L 63.15 88.8 L 67.2 67.95 L 80.4 67.95 L 78.9 97.8 L 0 97.8 L 0 88.95 L 10.35 87.9 Q 10.5 79.05 10.5 70.725 L 10.5 55.65 L 10.5 46.5 L 10.5 28.2 Q 10.5 19.05 10.35 9.9 Z" id="0" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>

        <svg width="63.452" height="77.852" viewBox="0 0 63.452 79.852" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={mystyle}>
                <path d="M 0 70.5 L 0.75 51.3 L 14.4 51.3 L 16.8 66.9 Q 19.35 67.95 22.05 68.475 Q 24.75 69 27.6 69 A 29.155 29.155 0 0 0 30.913 68.824 Q 34.284 68.438 36.45 67.2 A 5.961 5.961 0 0 0 39.46 62.865 A 9.405 9.405 0 0 0 39.6 61.2 A 7.326 7.326 0 0 0 37.945 56.565 A 9.874 9.874 0 0 0 37.275 55.8 Q 35.504 53.972 30.732 52.406 A 54.642 54.642 0 0 0 27.45 51.45 L 18.9 49.2 A 29.868 29.868 0 0 1 12.403 46.644 A 21.845 21.845 0 0 1 5.4 40.725 A 22.454 22.454 0 0 1 0.989 29.758 A 29.526 29.526 0 0 1 0.75 25.95 Q 0.75 14.7 9.375 7.35 Q 16.353 1.404 28.29 0.268 A 62.466 62.466 0 0 1 34.2 0 A 55.91 55.91 0 0 1 42.444 0.586 A 46.71 46.71 0 0 1 47.025 1.5 A 59.438 59.438 0 0 1 55.278 4.272 A 70.716 70.716 0 0 1 59.1 6 L 57.9 22.95 L 44.1 22.95 L 40.8 9.6 A 45.028 45.028 0 0 0 38.837 9.255 A 54.556 54.556 0 0 0 37.575 9.075 Q 36.254 8.903 34.538 8.863 A 46.3 46.3 0 0 0 33.45 8.85 A 15.645 15.645 0 0 0 30.076 9.196 A 11.46 11.46 0 0 0 26.325 10.725 A 6.091 6.091 0 0 0 23.494 15.164 A 9.087 9.087 0 0 0 23.4 16.5 A 5.828 5.828 0 0 0 24.14 19.297 Q 24.647 20.236 25.5 21.15 Q 27.448 23.237 34.299 25.195 A 74.459 74.459 0 0 0 35.4 25.5 L 43.8 27.75 A 41.536 41.536 0 0 1 49.919 29.899 Q 55.765 32.522 58.875 36.6 A 22.043 22.043 0 0 1 63.047 46.447 A 29.887 29.887 0 0 1 63.45 51.45 A 28.429 28.429 0 0 1 62.313 59.724 A 20.983 20.983 0 0 1 53.775 71.25 Q 45.919 76.61 33.562 77.617 A 73.417 73.417 0 0 1 27.6 77.85 A 56.27 56.27 0 0 1 11.614 75.652 A 48.277 48.277 0 0 1 0 70.5 Z" id="0" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>

        <svg width="29.404" height="29.254" viewBox="0 0 29.404 31.254" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={mystyle}>
                <path d="M 8.377 27.923 A 14.854 14.854 0 0 0 14.702 29.252 A 18.003 18.003 0 0 0 14.75 29.252 A 14.308 14.308 0 0 0 25.127 25.052 Q 29.402 20.852 29.402 14.852 A 17.673 17.673 0 0 0 29.402 14.804 A 14.43 14.43 0 0 0 25.127 4.352 A 16.819 16.819 0 0 0 24.959 4.184 A 14.044 14.044 0 0 0 14.702 0.002 Q 8.552 0.002 4.277 4.352 A 17.137 17.137 0 0 0 4.244 4.386 A 14.431 14.431 0 0 0 0.002 14.852 A 16.696 16.696 0 0 0 0.004 15.086 A 13.743 13.743 0 0 0 4.277 25.052 A 14.594 14.594 0 0 0 8.377 27.923 Z" id="0" vectorEffect="non-scaling-stroke"/>
            </g>
        </svg>
        </div>

        <div className="splashTest" style={{background: "white"}}></div>
        

        {/* <svg width="187" height="110" viewBox="0 0 187 110" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <mask id="masking" maskUnits="objectBoundingBox">
                    <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={mystyle}>
                        <path d="M 11.25 9.3 L 0 8.1 L 0 0 L 49.5 0 L 49.5 8.1 L 37.05 9.3 Q 36.9 18.45 36.825 27.825 Q 36.75 37.2 36.75 46.5 L 36.75 54.45 A 1911.981 1911.981 0 0 0 36.769 62.794 A 2267.224 2267.224 0 0 0 36.825 71.625 Q 36.9 80.7 37.05 90 L 63 90 L 67.05 69.15 L 79.2 69.15 L 77.7 98.55 L 0 98.55 L 0 90.45 L 11.25 89.25 Q 11.55 80.1 11.55 71.325 L 11.55 55.2 L 11.55 46.5 L 11.55 27.825 Q 11.55 18.45 11.25 9.3 Z" id="0" vectorEffect="non-scaling-stroke"/>
                        <path d="M 86.55 93.9 L 87 75.6 L 99 75.6 L 101.55 90.45 Q 104.25 91.5 106.95 92.025 A 28.411 28.411 0 0 0 110.501 92.476 A 34.9 34.9 0 0 0 112.8 92.55 A 30.726 30.726 0 0 0 116.495 92.343 Q 118.286 92.125 119.761 91.679 A 11.993 11.993 0 0 0 122.7 90.375 Q 126.15 88.2 126.15 83.7 A 8.191 8.191 0 0 0 123.679 77.78 A 10.575 10.575 0 0 0 123.6 77.7 A 9.925 9.925 0 0 0 121.774 76.301 Q 119.725 75.042 116.339 73.904 A 57.117 57.117 0 0 0 113.55 73.05 L 105.45 70.65 A 32.927 32.927 0 0 1 99.037 68.058 A 23.48 23.48 0 0 1 92.025 62.4 A 20.384 20.384 0 0 1 87.51 51.724 A 27.104 27.104 0 0 1 87.3 48.3 A 22.18 22.18 0 0 1 94.36 31.786 A 28.899 28.899 0 0 1 95.4 30.825 A 26.26 26.26 0 0 1 104.901 25.594 Q 110.838 23.7 118.65 23.7 A 48.539 48.539 0 0 1 126.472 24.308 A 40.521 40.521 0 0 1 130.875 25.275 A 58.283 58.283 0 0 1 138.716 28.114 A 69.865 69.865 0 0 1 142.35 29.85 L 141.3 46.2 L 129.3 46.2 L 126.3 33.3 A 15.873 15.873 0 0 0 123.663 32.569 Q 122.299 32.305 120.693 32.19 A 36.95 36.95 0 0 0 118.05 32.1 A 20.222 20.222 0 0 0 114.783 32.348 Q 111.893 32.822 109.875 34.2 A 6.823 6.823 0 0 0 106.879 39.209 A 10.213 10.213 0 0 0 106.8 40.5 A 6.994 6.994 0 0 0 108.556 45.139 A 9.58 9.58 0 0 0 109.2 45.825 Q 111.519 48.072 118.88 50.388 A 85.049 85.049 0 0 0 119.4 50.55 L 126.75 52.65 A 46.508 46.508 0 0 1 132.82 54.882 Q 135.837 56.255 138.144 57.947 A 20.21 20.21 0 0 1 142.05 61.65 Q 146.7 67.5 146.7 75.9 A 24.653 24.653 0 0 1 145.343 84.269 A 20.821 20.821 0 0 1 137.625 94.275 Q 130.411 99.462 118.884 100.526 A 67.901 67.901 0 0 1 112.65 100.8 Q 98.4 100.8 86.55 93.9 Z" id="1" vectorEffect="non-scaling-stroke"/>
                        <path d="M 172.8 100.8 Q 167.1 100.8 163.2 96.9 Q 159.3 93 159.3 87.45 Q 159.3 81.9 163.2 77.85 A 12.764 12.764 0 0 1 172.446 73.804 A 15.811 15.811 0 0 1 172.8 73.8 Q 178.5 73.8 182.4 77.85 Q 186.3 81.9 186.3 87.45 A 12.856 12.856 0 0 1 182.521 96.778 A 15.401 15.401 0 0 1 182.4 96.9 A 13.021 13.021 0 0 1 172.978 100.799 A 16.535 16.535 0 0 1 172.8 100.8 Z" id="2" vectorEffect="non-scaling-stroke"/>
                    </g>
                </mask>
            </defs>

            <g mask="url(#masking)" fill="#fffff">
                <image width="960" height="368" xlinkHref="https://unsplash.it/960/368/?gravity=south"/>
            </g>
        </svg> */}



        {/* <div className="triangle left"><h1>This is a title</h1></div>
        <div className="triangle right"><h1>This is a title</h1></div> */}

        {/* <div id="maskDiv" style={{width:"1280px", height:"500px", background: "-webkit-linear-gradient(left, rgb(0, 156, 204), rgb(0, 111, 145))", clipPath: "url(#maskRect1)"}}></div> */}

        {/* <div id="maskDiv" style={{clipPath: "url(#maskRect1)"}}><h1 style={{fontSize: "1000px", color: "white"}}>Text</h1></div> */}
        {/* <svg width="187" height="110" viewBox="0 0 187 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="maskRect1" >
            <path id="curve" style={{scale:"5"}} d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z" />
            <path d="M 11.25 9.3 L 0 8.1 L 0 0 L 49.5 0 L 49.5 8.1 L 37.05 9.3 Q 36.9 18.45 36.825 27.825 Q 36.75 37.2 36.75 46.5 L 36.75 54.45 A 1911.981 1911.981 0 0 0 36.769 62.794 A 2267.224 2267.224 0 0 0 36.825 71.625 Q 36.9 80.7 37.05 90 L 63 90 L 67.05 69.15 L 79.2 69.15 L 77.7 98.55 L 0 98.55 L 0 90.45 L 11.25 89.25 Q 11.55 80.1 11.55 71.325 L 11.55 55.2 L 11.55 46.5 L 11.55 27.825 Q 11.55 18.45 11.25 9.3 Z" id="0" vectorEffect="non-scaling-stroke"/>
            <path d="M 86.55 93.9 L 87 75.6 L 99 75.6 L 101.55 90.45 Q 104.25 91.5 106.95 92.025 A 28.411 28.411 0 0 0 110.501 92.476 A 34.9 34.9 0 0 0 112.8 92.55 A 30.726 30.726 0 0 0 116.495 92.343 Q 118.286 92.125 119.761 91.679 A 11.993 11.993 0 0 0 122.7 90.375 Q 126.15 88.2 126.15 83.7 A 8.191 8.191 0 0 0 123.679 77.78 A 10.575 10.575 0 0 0 123.6 77.7 A 9.925 9.925 0 0 0 121.774 76.301 Q 119.725 75.042 116.339 73.904 A 57.117 57.117 0 0 0 113.55 73.05 L 105.45 70.65 A 32.927 32.927 0 0 1 99.037 68.058 A 23.48 23.48 0 0 1 92.025 62.4 A 20.384 20.384 0 0 1 87.51 51.724 A 27.104 27.104 0 0 1 87.3 48.3 A 22.18 22.18 0 0 1 94.36 31.786 A 28.899 28.899 0 0 1 95.4 30.825 A 26.26 26.26 0 0 1 104.901 25.594 Q 110.838 23.7 118.65 23.7 A 48.539 48.539 0 0 1 126.472 24.308 A 40.521 40.521 0 0 1 130.875 25.275 A 58.283 58.283 0 0 1 138.716 28.114 A 69.865 69.865 0 0 1 142.35 29.85 L 141.3 46.2 L 129.3 46.2 L 126.3 33.3 A 15.873 15.873 0 0 0 123.663 32.569 Q 122.299 32.305 120.693 32.19 A 36.95 36.95 0 0 0 118.05 32.1 A 20.222 20.222 0 0 0 114.783 32.348 Q 111.893 32.822 109.875 34.2 A 6.823 6.823 0 0 0 106.879 39.209 A 10.213 10.213 0 0 0 106.8 40.5 A 6.994 6.994 0 0 0 108.556 45.139 A 9.58 9.58 0 0 0 109.2 45.825 Q 111.519 48.072 118.88 50.388 A 85.049 85.049 0 0 0 119.4 50.55 L 126.75 52.65 A 46.508 46.508 0 0 1 132.82 54.882 Q 135.837 56.255 138.144 57.947 A 20.21 20.21 0 0 1 142.05 61.65 Q 146.7 67.5 146.7 75.9 A 24.653 24.653 0 0 1 145.343 84.269 A 20.821 20.821 0 0 1 137.625 94.275 Q 130.411 99.462 118.884 100.526 A 67.901 67.901 0 0 1 112.65 100.8 Q 98.4 100.8 86.55 93.9 Z" id="1" vectorEffect="non-scaling-stroke"/>
            <path d="M 172.8 100.8 Q 167.1 100.8 163.2 96.9 Q 159.3 93 159.3 87.45 Q 159.3 81.9 163.2 77.85 A 12.764 12.764 0 0 1 172.446 73.804 A 15.811 15.811 0 0 1 172.8 73.8 Q 178.5 73.8 182.4 77.85 Q 186.3 81.9 186.3 87.45 A 12.856 12.856 0 0 1 182.521 96.778 A 15.401 15.401 0 0 1 182.4 96.9 A 13.021 13.021 0 0 1 172.978 100.799 A 16.535 16.535 0 0 1 172.8 100.8 Z" id="2" vectorEffect="non-scaling-stroke"/>
            </clipPath>
        </defs>
        </svg> */}

        {/* <div id="maskDiv" style={{clipPath: "url(#maskRect1)"}}><h1 style={{fontSize: "1000px", color: "white"}}>Text</h1></div> */}
        {/* <svg width="100%" height="100%" viewBox="0 0 187 110" xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#000" strokeWidth="0.25mm" fill="none" style={mystyle}>
            <defs>
            <clipPath id="maskRect1" >
                <path d="M 11.25 9.3 L 0 8.1 L 0 0 L 49.5 0 L 49.5 8.1 L 37.05 9.3 Q 36.9 18.45 36.825 27.825 Q 36.75 37.2 36.75 46.5 L 36.75 54.45 A 1911.981 1911.981 0 0 0 36.769 62.794 A 2267.224 2267.224 0 0 0 36.825 71.625 Q 36.9 80.7 37.05 90 L 63 90 L 67.05 69.15 L 79.2 69.15 L 77.7 98.55 L 0 98.55 L 0 90.45 L 11.25 89.25 Q 11.55 80.1 11.55 71.325 L 11.55 55.2 L 11.55 46.5 L 11.55 27.825 Q 11.55 18.45 11.25 9.3 Z" id="0" vectorEffect="non-scaling-stroke"/>
                <path d="M 86.55 93.9 L 87 75.6 L 99 75.6 L 101.55 90.45 Q 104.25 91.5 106.95 92.025 A 28.411 28.411 0 0 0 110.501 92.476 A 34.9 34.9 0 0 0 112.8 92.55 A 30.726 30.726 0 0 0 116.495 92.343 Q 118.286 92.125 119.761 91.679 A 11.993 11.993 0 0 0 122.7 90.375 Q 126.15 88.2 126.15 83.7 A 8.191 8.191 0 0 0 123.679 77.78 A 10.575 10.575 0 0 0 123.6 77.7 A 9.925 9.925 0 0 0 121.774 76.301 Q 119.725 75.042 116.339 73.904 A 57.117 57.117 0 0 0 113.55 73.05 L 105.45 70.65 A 32.927 32.927 0 0 1 99.037 68.058 A 23.48 23.48 0 0 1 92.025 62.4 A 20.384 20.384 0 0 1 87.51 51.724 A 27.104 27.104 0 0 1 87.3 48.3 A 22.18 22.18 0 0 1 94.36 31.786 A 28.899 28.899 0 0 1 95.4 30.825 A 26.26 26.26 0 0 1 104.901 25.594 Q 110.838 23.7 118.65 23.7 A 48.539 48.539 0 0 1 126.472 24.308 A 40.521 40.521 0 0 1 130.875 25.275 A 58.283 58.283 0 0 1 138.716 28.114 A 69.865 69.865 0 0 1 142.35 29.85 L 141.3 46.2 L 129.3 46.2 L 126.3 33.3 A 15.873 15.873 0 0 0 123.663 32.569 Q 122.299 32.305 120.693 32.19 A 36.95 36.95 0 0 0 118.05 32.1 A 20.222 20.222 0 0 0 114.783 32.348 Q 111.893 32.822 109.875 34.2 A 6.823 6.823 0 0 0 106.879 39.209 A 10.213 10.213 0 0 0 106.8 40.5 A 6.994 6.994 0 0 0 108.556 45.139 A 9.58 9.58 0 0 0 109.2 45.825 Q 111.519 48.072 118.88 50.388 A 85.049 85.049 0 0 0 119.4 50.55 L 126.75 52.65 A 46.508 46.508 0 0 1 132.82 54.882 Q 135.837 56.255 138.144 57.947 A 20.21 20.21 0 0 1 142.05 61.65 Q 146.7 67.5 146.7 75.9 A 24.653 24.653 0 0 1 145.343 84.269 A 20.821 20.821 0 0 1 137.625 94.275 Q 130.411 99.462 118.884 100.526 A 67.901 67.901 0 0 1 112.65 100.8 Q 98.4 100.8 86.55 93.9 Z" id="1" vectorEffect="non-scaling-stroke"/>
                <path d="M 172.8 100.8 Q 167.1 100.8 163.2 96.9 Q 159.3 93 159.3 87.45 Q 159.3 81.9 163.2 77.85 A 12.764 12.764 0 0 1 172.446 73.804 A 15.811 15.811 0 0 1 172.8 73.8 Q 178.5 73.8 182.4 77.85 Q 186.3 81.9 186.3 87.45 A 12.856 12.856 0 0 1 182.521 96.778 A 15.401 15.401 0 0 1 182.4 96.9 A 13.021 13.021 0 0 1 172.978 100.799 A 16.535 16.535 0 0 1 172.8 100.8 Z" id="2" vectorEffect="non-scaling-stroke"/>
                </clipPath>
            </defs>
            </g>
        </svg> */}
    </div>
  )
}
