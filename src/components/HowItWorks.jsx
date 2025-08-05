import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowitWorks = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })
    }, []);

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt='chip' width={180}
                        height={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A18 Pro Chip.
                        <br /> A monster win for gaming.
                    </h2>
                    <p className='hiw-subtitle'>
                        It's here.The biggest redesign in the history of the Apple GPUs.
                    </p>

                </div>

                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none '
                                playsInline preload="none" muted autoPlay  ref={videoRef}
                            >
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <p className='text-gray-850 text-center  font-semibold mt-3'>
                        Honkai: Star Rail
                    </p>
                </div>
                <div className='hiw-text-container'>
                    <div className='flex flex-center flex-col justify-center'>
                        <p className='hiw-text g_fadeIn py-7 '>
                            Meet A18, custom-built for Apple Intelligence {' '}
                            <span className='text-white'>
                                — and so much more.

                            </span>,
                            It jumps two generations ahead of the A16 Bionic chip in iPhone 15. And it powers next-level camera features like Photographic Styles and Camera Control. All with exceptional power efficiency to extend battery life.
                        </p>




                        <p className='hiw-text g_fadeIn '>
                            Mobile {' '}
                            <span className='text-white'>
                                games will look and feel so immersive

                            </span>,
                            with incredibly detailed environment and characters.
                        </p>
                    </div>

                    <div className='flex-1 flex justify-center flex-col g_fadeIn py-5'>
                        <p className='hiw-text'>AppleCare+ for iPhone
                        </p>
                        <p className='hiw-bigtext'>iOS 26 Preview</p>
                        <p className='hiw-text'>
                            Apple Intelligence </p>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default HowitWorks