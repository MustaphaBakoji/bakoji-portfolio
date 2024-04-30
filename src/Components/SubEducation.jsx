
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
let sectionVariens = {
    visible: { opacity: 1, },
    hidden: { opacity: 0, },

}
{/*

*/}

let span1Varients = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1, scale: 1, transition: { delay: 1, duration: 1 },
    }
}
let span2Varients = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1, scale: 1, transition: { delay: 1.4, duration: 1 },
    }
}
let span3Varients = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 1.9, duration: 1 } },

}
let span4Varients = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 2.3, duration: 1 } },

}
let span5Varients = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: 2.7, duration: 1 } },

}
function Secondary() {
    let ref = useRef()
    let theView = useInView(ref, { threshold: 1, once: false })
    const [inView, setinView] = useState(false)
    let control1 = useAnimation()
    useEffect(() => {

        if (theView) {
            control1.start('visible')
        }
        setinView(theView)
        console.log(inView);

    }, [theView])

    return (

        <div>

            <motion.section
                className='datascience'
                ref={ref} variants={sectionVariens}
                initial='hidden' animate={control1}
            // style={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0, }}
            >
                <motion.div
                // variants={sectionVariens}
                // initial='hidden' animate={inView ? 'visible' : 'hidden'}

                >
                    <motion.span variants={span1Varients}>My journey began at Islamic Orientation Secondary School, </motion.span>
                    <motion.span variants={span2Varients}>where I thrived in science after excelling in my JSS3 mock exams. </motion.span>
                    <motion.span variants={span3Varients}> As I neared graduation in 2021, a spark ignited my passion for software engineering.</motion.span>
                    <motion.span variants={span4Varients}>Entering university that same year, I've relentlessly pursued knowledge </motion.span>
                    <motion.span variants={span5Varients}> and honed my skills in this captivating field.</motion.span>
                </motion.div>
            </motion.section>
            {/* */}

        </div>
    )
}



function University() {
    let ref = useRef()
    let theView = useInView(ref, { threshold: 1, once: false })
    const [inView, setinView] = useState(false)
    let control1 = useAnimation()
    useEffect(() => {

        if (theView) {
            control1.start('visible')
        }
        setinView(theView)
        console.log(inView);

    }, [theView])

    return (

        <div>

            <motion.section
                className='datascience'
                ref={ref} variants={sectionVariens}
                initial='hidden' animate={control1}
            // style={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0, }}
            >
                <motion.div
                // variants={sectionVariens}
                // initial='hidden' animate={inView ? 'visible' : 'hidden'}

                >
                    <motion.span variants={span1Varients}>Fueled by a passion for software engineering discovered </motion.span>
                    <motion.span variants={span2Varients}> in my final years at Islamic Orientation Secondary School, </motion.span>
                    <motion.span variants={span3Varients}> I embarked on this exciting journey at Bayero University Kano in 2021. </motion.span>
                    <motion.span variants={span4Varients}>As a current third-year student, I've dived headfirst into the world of software development, </motion.span>
                    <motion.span variants={span5Varients}> actively learning and practicing data science, web development, and mobile development.</motion.span>
                </motion.div>
            </motion.section>
            {/* */}

        </div>
    )
}


export { University }
export default Secondary