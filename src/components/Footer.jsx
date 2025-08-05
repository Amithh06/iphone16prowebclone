import React from 'react'
import { FooterLink } from '../constants'

const Footer = () => {
  return (
    <footer>
        <div className='screen-max-width '>
            <div className='bg-gray-500 flex-col  h-[1px] '></div>
            <div >
                <p className='font-semibold text-gray-500 text-xs py-2'>
                    More ways to Shop : {' '}
                    <span className='underline text-blue-400  '> Find an Apple Store</span>
                    or {' '}
                    <span className='underline text-blue-400  '> other retailer</span>
                    nar you.
                </p> 
                <p className='font-semibold text-gray-500 text-xs pb-2'>Or call 000800-040-1966</p>
            </div>

<div className='flex md:flex-row flex-col md:items-center justify-between  pb-10'>
    <p className='font-semibold text-gray-500 text-xs'>
        Copyright @ 2025 Apple Inc. All rights reserved.</p>
        <div className='flex'>
            {FooterLink.map((link,i)=>(
                <p key={link} className='font-semibold text-gray-500 text-xs '>
                    {link}{' '}{i !==FooterLink.length-1 &&(<span className='mx-2'> | </span>)}
                </p>
            ))}
            
        </div>
    
</div>

        </div>
    </footer>
  )
}

export default Footer