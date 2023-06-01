import React, { useEffect } from 'react'
import ExperienceMap from '@/utils/dicts/ExperienceMap'

export default function ExperienceScreen() {

  useEffect(()=> {
    initiateSlider();
    showDot(); 
  }, []);

  // custom code - https://www.csscodelab.com/vertical-slider-dots-indicator-using-javascript/
  function initiateSlider() {
    const sliders = Array.from(document.querySelectorAll('.wrapper'));

    sliders.forEach((slider) => {
      const numberOfSlides = slider.querySelectorAll('.panel').length;
      
      slider.querySelector('.panel:nth-child(1)')?.classList.add('_active');
      slider.querySelector('.nav-dot:nth-child(1)')?.classList.add('active');
      
      const activeSlide = slider.querySelector('.panel._active') as HTMLElement;
      // const nextBtn = slider.querySelector('.next-btn');
      // const prevBtn = slider.querySelector('.prev-btn');
      const navDots = Array.from(document.querySelectorAll('.nav-dot'));
      
      navDots.forEach((dot) => {
        dot.addEventListener('click', () => {
          slider.dispatchEvent(new Event('slide.changed'));
          dot.classList.add('active');
          const slideToGo = Number(dot.getAttribute('data-slide'));
          goToSlide(slideToGo);
        });
      });
      
      /*
      Reset all the slide dot, remove "active" from all slide dot
      */
      slider.addEventListener('slide.changed', () => {
        console.log('slide changed!');
        navDots.forEach((dot) => {
          dot.classList.remove('active');
        });
        
        // const activeDot = document.querySelector(`.nav-dot[data-slide="${activeSlide.getAttribute('data-slide')}"]`);
        // console.log(activeDot)
        // activeDot?.classList.add('active');
      });
        
      // nextBtn?.addEventListener('click', () => {
      //   nextSlide();
      // });
      
      // prevBtn?.addEventListener('click', () => {
      //   prevSlide();
      // });

      function nextSlide() {
        const nextSlide = activeSlide?.nextElementSibling as HTMLElement;
        activeSlide?.classList.remove('_active');
        nextSlide?.classList.add('_active');
      
        const slideIndex = Array.from(slider.querySelectorAll('.panel')).indexOf(activeSlide!);
      
        if (slideIndex >= numberOfSlides || slideIndex <= -1) {
          firstSlide();
          slider.dispatchEvent(new Event('slide.changed'));
        } else {
          slider.dispatchEvent(new Event('slide.changed'));
        }
      }
      
      function prevSlide() {
        const prevSlide = activeSlide?.previousElementSibling as HTMLElement;
        activeSlide?.classList.remove('_active');
        prevSlide?.classList.add('_active');
      
        const slideIndex = Array.from(slider.querySelectorAll('.panel')).indexOf(activeSlide!);
        console.log(slideIndex);
      
        if (!prevSlide || slideIndex <= -1) {
          lastSlide();
          slider.dispatchEvent(new Event('slide.changed'));
        } else {
          slider.dispatchEvent(new Event('slide.changed'));
        }
      }
      
      function firstSlide() {
        const activeSlide = slider.querySelector('.panel._active');
        activeSlide?.classList.remove('_active');
        slider.querySelector('.panel:nth-child(1)')?.classList.add('_active');
      }
      
      function lastSlide() {
        const activeSlide = slider.querySelector('.panel._active');
        activeSlide?.classList.remove('_active');
        slider.querySelectorAll('.panel')[numberOfSlides - 1]?.classList.add('_active');
      }
      
      function goToSlide(slideToGo: number) {
        const activeSlide = slider.querySelector('.panel._active');
        activeSlide?.classList.remove('_active');
        slider.querySelectorAll('.panel')[slideToGo - 1]?.classList.add('_active');
        // slider.dispatchEvent(new Event('slide.changed'));
      }
    });
    // custom code end
  }
  
  const showDot = () => {
    let count = 1
    ExperienceMap.forEach((value, key) => {
      // console.log(typeof(value))
      const newEntry = ["slideOrder", count];
      value.set(...newEntry);
      count+=1;
    });
  } 

  return (
    <div className='exp-wrapper'>

      <div className="wrapper">
        <div className="nav-dots">
          
        {
        Array.from(ExperienceMap, ([key, value]) => {
          return (
            
            
            <div className="nav-dot" data-slide={value.get('slideOrder')}>
              <p>{key}</p>
            </div>
          )
        })}
        </div>
        
        {
        Array.from(ExperienceMap, ([key, value]) => {
        return (
          <div className="panel-wrapper">
            <div className="panel" data-slide={value.get('slideOrder')}>
              <div className="trans-layer" id={"layer-"+value.get('slideOrder')}></div>
              <section className="section" id={"section-"+value.get('slideOrder')}>
                <div className="section-content">
                  <div key={value.get('year')} className="exp-wrapper__block">
                    <h3>{value.get('year')}</h3>
                    <h4>{value.get('company')}</h4>
                    <h5 className="font-color--main">{value.get('position')}</h5>
                    <p>{
                    Array.isArray(value.get('description')) ? 
                    value.get('description').map((value) => 
                      (<li key={value}>{value}</li>)
                    ) :
                      <li key={value}>{value.get('description')}</li>
                    }</p>
                  </div>
                </div>
              </section>
          </div>
        </div>
        )})}
      </div>

    </div>
  )
}
