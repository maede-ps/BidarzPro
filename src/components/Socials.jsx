import React from 'react'
import { LiaTelegramPlane } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
const Socials = () => {
  return (
    <div className='socialsContainer'>
        <span>
            بقیه رو هم خبر کن
        </span>
        <div className='socialsIcon'>
        <FiShare2 />
        <BsWhatsapp/>
        <LiaTelegramPlane/>
        </div>
    </div>
  )
}

export default Socials