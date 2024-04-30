import React from 'react'
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

function Contact() {
    return (
        <footer id='about'>
            <div className=' contact grid grid-cols-2 sm:grid-cols-4 place-items-center content-center'>
                <a href="http://wa.me/2348163093788"> <FaWhatsapp className=' w-6 h-6 text-green-500 rounded-3xl bg-white' /></a>
                <a href="http:////mustaphabakoji.github"><FaGithub className=' bg-white text-black rounded-full h-6 w-6' /></a>
                <a href="http://t.me/2348163093788"><FaTelegram className=' text-blue-400  bg-white rounded-full h-5 w-5 sm:h-6 sm:w-6' /></a>
                <FaLinkedin className=' bg-white text-blue-600 h-5 w-5 sm:h-6 sm:w-6' />
            </div>
        </footer>

    )
}

export default Contact