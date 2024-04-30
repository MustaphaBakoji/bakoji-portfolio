import { motion, useAnimate, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
let sectionVariens = {
    visible: { opacity: 1, },
    hidden: { opacity: 0, },

}

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

function DataScience() {
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
                    <motion.span variants={span1Varients}>Aspiring Data Scientist with 1.5 years of experience in data exploration</motion.span>
                    <motion.span variants={span2Varients}>and building foundational models.</motion.span>
                    <motion.span variants={span3Varients}>Proficient in data visualization (Matplotlib, Seaborn) and data wrangling (Pandas).</motion.span>
                    <motion.span variants={span4Varients}> Possesses a grasp of machine learning concepts (Scikit-learn) and </motion.span>
                    <motion.span variants={span5Varients}>eager to learn and grow in the field.</motion.span>
                </motion.div>
            </motion.section>
            {/* */}

        </div>
    )
}


function ReactSkills() {

    return (
        <div> <motion.section
            variants={sectionVariens}
            initial={"hidden"}
            animate={"visible"}
            //transition={{ duration: 1, delay: 4 }}

            className='react'>
            <motion.div>
                <motion.span
                    variants={span1Varients}
                > Enthusiastic mid-level React.js developer </motion.span><motion.span>with 2+ years of experience building dynamic and responsive web applications.</motion.span>
                <motion.span
                    variants={span2Varients}
                > Skilled in state management (Redux),</motion.span>
                <motion.span
                    variants={span3Varients}
                > UI animation (Framer Motion),</motion.span>
                <motion.span
                    variants={span4Varients}
                > and navigation (React Router).</motion.span>
                <motion.span
                    variants={span5Varients}
                > Adept at creating scalable solutions that adapt to any screen size.</motion.span>
            </motion.div>
        </motion.section></div>
    )
}


export function ReactNative() {
    let control2 = useAnimation()
    let refNative = useRef()
    let nativeView = useInView(refNative)
    useEffect(() => {

        if (nativeView) {
            control2.start("visible")
        }

    }, [nativeView])

    return (
        <motion.section className='reactNative'

            ref={refNative} variants={sectionVariens}
            initial='hidden' animate={control2}
        >
            <motion.div>

                <motion.span variants={span1Varients}> Motivated React Native Mobile Developer with 1+ years of</motion.span>
                <motion.span variants={span2Varients}> experience seeking to leverage my skills</motion.span>
                <motion.span variants={span3Varients}> and continuous learning to contribute to a dynamic team.</motion.span>
                <motion.span variants={span4Varients}> Possesses strong understanding of core React Native concepts and</motion.span>
                <motion.span variants={span5Varients}> a passion for building high-quality, user-friendly mobile applications.</motion.span>


            </motion.div>

        </motion.section>
    )
}

export { ReactSkills }

export default DataScience