import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Skills, { ReactNative, ReactSkills } from './Skills'
import DataScience from './Skills'
import MyProfile from './myProfile'
let hVarients = { initial: { opacity: 0, x: -50 }, to: { backgrounColor: "blue", opacity: 1, x: 50, transion: { duration: 2 } } }
let skillVarients = {
    hidden: { borderLeftWidth: "0.5px", borderLeftStyle: "dotted", borderBottomWidth: 0, borderRightStyle: 'dashed' },
    visible: { borderLeftWidth: "1px", borderLeftStyle: "solid", borderBottomWidth: '1px', borderRightStyle: "solid", transition: { duration: 2, delay: 1 } }
}
function Home() {


    //control for the mobile viewport ref and inView
    let mobRef = useRef()
    let mobInview = useInView(mobRef)
    let mobControl = useAnimation()
    //control for the Dsci viewport
    let DsRef = useRef()
    let DsInview = useInView(DsRef)
    let dsControl = useAnimation()
    useEffect(() => {
        if (mobInview) {
            mobControl.start('visible')
        }
        if (DsInview) {
            dsControl.start('visible')
        }


    }, [mobInview, DsInview])

    return (
        <div id='home'>
            <MyProfile />
            <div>

                <div>
                    <motion.div className='skills grid place-items-center'>
                        <motion.div
                            variants={skillVarients}
                            initial='hidden'
                            animate='visible'
                            className='outer react-skils  mt-10'>
                            <motion.div
                                initial={{ x: -1500 }} animate={{ x: 0 }}
                                className='screen grid grid-cols-2  bg-blue-950 text-center ' style={{ boxShadow: "0px 5px 5px rgba(135,206,250,0.3)", borderRadius: "18px" }}>
                                <motion.img src={require('../static/react.png')} className=' w-14 h-14 ml-10 mr-10' />
                                <motion.div className=' ml-auto p-5'>A react frontend Developer,</motion.div>
                            </motion.div>
                            <ReactSkills />
                        </motion.div>



                        <motion.div

                            className='outer react-skills mt-5'
                            variants={skillVarients}
                            initial='hidden'
                            ref={mobRef}
                            animate={mobControl}
                        >
                            <motion.div
                                initial={{ x: 1500 }} animate={{ x: 0 }} transition={{ delay: 0.5 }}
                                className=' screen grid w-60   grid-cols-2  bg-blue-950 text-center  ' style={{ boxShadow: "0px 5px 5px rgba(135,206,250,0.3)", borderRadius: "18px" }}>
                                <motion.img src={require('../static/mobile.png')} className=' w-14 h-14 ml-10 mr-10 mt-9  sm:mt-1' />

                                <motion.div className=' ml-auto p-5'>A react-native mobile Developer,</motion.div>

                            </motion.div>
                            <ReactNative />
                        </motion.div>

                        <motion.div
                            className='outer react-skills mt-5'
                            ref={DsRef}
                            variants={skillVarients}
                            initial='hidden'
                            animate={dsControl}

                        >
                            <motion.div
                                initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ delay: 1 }}
                                className='screen grid grid-cols-2  bg-blue-950 text-center ' style={{ boxShadow: "0px 5px 5px rgba(135,206,250,0.3)", borderRadius: "18px" }}>
                                <motion.img src={require('../static/data-science.png')} className=' w-14 h-14 ml-10 mr-10' />
                                <motion.div className=' ml-auto p-5'> And A Data scientist,</motion.div>
                            </motion.div>
                            <DataScience />

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Home