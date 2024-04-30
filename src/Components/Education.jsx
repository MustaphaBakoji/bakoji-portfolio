import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Secondary, { University } from './SubEducation'
import { useEffect } from 'react'
let skillVarients = {
    hidden: { borderLeftWidth: "0.5px", borderLeftStyle: "dotted", borderBottomWidth: 0, borderRightStyle: 'dashed' },
    visible: { borderLeftWidth: "1px", borderLeftStyle: "solid", borderBottomWidth: '1px', borderRightStyle: "solid", transition: { duration: 2, delay: 1 } }
}
let headerVarients = {
    hidden: { x: -1500 },
    visible: { x: 0, }

}
function Education() {
    let headerref = useRef()
    let inView = useInView(headerref)
    let contoller = useAnimation()
    useEffect(() => {
        if (inView) {
            contoller.start("visible")
            console.log('ddddddddddd');
        }


    }, [inView])

    return (
        <motion.div className='skills grid place-items-center'>
            <motion.div
                ref={headerref}
                variants={skillVarients}
                initial='hidden'
                animate='visible'
                className='outer react-skils  mt-10'>
                <motion.div

                    variants={headerVarients}
                    initial="hidden" animate={contoller}
                    className='screen grid grid-cols-2  bg-blue-950 text-center ' style={{ boxShadow: "0px 5px 5px rgba(135,206,250,0.3)", borderRadius: "18px" }}>
                    <motion.img src={require('../static/education.jpg')} className=' w-14 h-14 ml-10 mr-10 rounded-full mt-2' />
                    <motion.div className=' ml-auto p-5'>Early Educational Background</motion.div>
                </motion.div>
                <Secondary />
            </motion.div>
        </motion.div>

    )
}
function MyJourney() {
    let headerref = useRef()
    let inView = useInView(headerref)
    let contoller = useAnimation()
    useEffect(() => {
        if (inView) {
            contoller.start("visible")
            console.log('ddddddddddd');
        }


    }, [inView])

    return (
        <motion.div className='skills grid place-items-center'>
            <motion.div
                ref={headerref}
                variants={skillVarients}
                initial='hidden'
                animate='visible'
                className='outer react-skils  mt-10'>
                <motion.div

                    variants={headerVarients}
                    initial="hidden" animate={contoller}
                    className='screen grid grid-cols-2  bg-blue-950 text-center ' style={{ boxShadow: "0px 5px 5px rgba(135,206,250,0.3)", borderRadius: "18px" }}>
                    <motion.img src={require('../static/swe.jpg')} className=' w-14 h-14 ml-10 mr-10 rounded-full mt-2' />
                    <motion.div className=' ml-auto p-5'>my Journey as software engineer</motion.div>
                </motion.div>
                <University />
            </motion.div>
        </motion.div>

    )
}
export { MyJourney }

export default Education