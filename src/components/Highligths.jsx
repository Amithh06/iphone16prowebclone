import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { videocc,imgV } from '../utils';
import VideoCarousel from "./VideoCarousel";

  
const Highligths = () => {
  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0
    })
    gsap.to('.link',{opacity:1,
      y:0,
      duration:1,
      stagger:0.25

    })

  },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-gray-950">
      <div className="screen-mx-width">
     <div className="mb-12 w-full md:flex items-end justify-between 
     ">
       
        <h1 id="title" className="section-heading sm:pb-15 pb-2 ">Get The Highlights.</h1>



<div className="flex flex-warp items-end gap-3 sm:pb-15 pb-2  ">
  <p className="link ">
    Watch The Film  <img className="pt-1.5" src={videocc} alt="watch" width={18} height={18} />
  </p>
   
  <p className="link ">
Watach the Event 
 <img src={imgV} alt="watch"width={12} height={12}  className="pt-1.5" />
  </p>
</div>

      </div>
      <VideoCarousel/>
     </div>
    </section>
  )
}

export default Highligths