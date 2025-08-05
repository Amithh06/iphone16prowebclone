import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
const videoRef=useRef();



useGSAP(()=>{
 
    gsap.to('#exploreVideo',{
        scrollTrigger:{
            trigger:'#exploreVideo',
            toggleActions:'play pause reverse restart ',
            start:'-10% bottom',
        },onComplete:()=>{
            videoRef.current.play();
        }
    })

animateWithGsap('#features-title',{y:0,opacity:1})

animateWithGsap('.g_grow',{scale:1,opacity:1,ease:'power1' },{scrub:5.5})

animateWithGsap('.g_text',{y:0,ease:'power2.inOut',opacity:1, duration:1 })

},[]);

  return (
   <section className='h-full common-padding bg-zinc-900 relative overflow-hidden'>
    <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 id="features-title" className='section-heading'>
                Explore the full story.
            </h1>
        </div>
<div className='flex flex-col justify-center items-center overflow-hidden'>
    <div className='mt-32 mb-24 pl-24 py-12'>
        <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
        <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
    </div>
<div className='flex-center flex-col sm:px-10 '>
    <div className='relative h-[50vh] w-full flex items-center'>
<video playsInline id="exploreVideo" className='w-full h-full object-center object-cover' preload='none' muted autoPlay ref={videoRef}>
    <source src={exploreVideo} type="video/mp4" />
</video>
    </div>

<div className='flex flex-col w-full relative py-[2vh]'>
<div className='feature-video-container'>
    <div className='overflow-hidden flex-1 h-[50vh]'>
        <img src={explore1Img} alt="titanium" className='feature-video g_grow' />
    </div>
<div className='overflow-hidden flex-1 h-[50vh]'>
        <img src={explore2Img} alt="titanium" className='feature-video g_grow' />
    </div>

</div>

<div className='feature-text-container inline-flex'>
<div className='flex-1 flex-center flex-row pt-5 '>
    <p className='feature-text g_text '>
        iPhone 16 has been designed{' '}
       <span className='text-white'>
        to make room for a larger battery
        
       </span>,
       , which works together with A18 to deliver a big boost in battery life, even with so many new features. So you can game, binge and rock on — and on.
    </p>
</div>


<div className='flex-1 flex-center pt-5.5 '>
    <p className='feature-text g_text'>
        iPhone 16 has a sturdy {' '}
       <span className='text-white'>
        , aerospace-grade aluminium enclosure and strong — and beautiful — colour-infused glass on the back.
        
       </span>,
        The latest-generation Ceramic Shield material is two times tougher than any smartphone glass.
    </p>
</div>


</div>

</div>

</div>

</div>

    </div>
   </section>
  )
}

export default Features