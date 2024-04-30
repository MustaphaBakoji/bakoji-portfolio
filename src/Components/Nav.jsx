import React, { useEffect, useState } from 'react'
import { BiCross, BiX } from 'react-icons/bi'
import { BsMenuApp, BsMenuAppFill, BsMenuButtonWideFill, BsX } from 'react-icons/bs'
import { FaX } from 'react-icons/fa6'
import { FcCancel } from 'react-icons/fc'
import { FiMenu } from 'react-icons/fi'
import { HiMenu, HiMenuAlt1 } from 'react-icons/hi'
import { MdCancel, MdMenuBook, MdMenuOpen } from 'react-icons/md'
import { TiCancel } from 'react-icons/ti'



function Nav() {

    const [showMenu, setshowMenu] = useState(true)
    let ClickHandler = () => {
        setshowMenu(!showMenu)
    }
    return (


        <div>
            {!showMenu && <div className=' overlay absolute z- 20' />}
            <div className={`nav ${!showMenu && 'absolute z-40 top-0'}`}>
                <div className='  menus'>{showMenu ? <MdMenuOpen className={`w-6 h-6`} onClick={ClickHandler} /> : <FaX className={``} onClick={ClickHandler} />}</div>
                <div className={`  flex flex-col  w-full place-items-center sm:flex-row sm:mr-auto sm:ml-auto sm:float-right  mb-5 sm:w-1/3  z-10 web ${showMenu && 'mobile'} `}>
                    <p className=' rounded w-16  ' >Home</p>
                    <p className='rounded w-16' id='navs'><a href='#about'>about</a> </p>
                    <p className='rounded w-16' id='navs'><a href='#skills'>skills</a></p>

                </div>

            </div>

        </div>
    )
}

export default Nav