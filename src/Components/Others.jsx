import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { SiCplusplusbuilder, SiDjango, SiFramer, SiNumpy, SiPandas, SiReactrouter, SiRedux, SiScikitlearn, SiTensorflow } from 'react-icons/si'
import { FaGitAlt, FaPython } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa6'
let IconsVarints = { hidden: { opacity: 0, }, visible: { opacity: 1, transition: { duration: 1 } } }
let chldVarients = { hidden: { opacity: 0, }, visible: { opacity: 1 } }

function Others() {
    let divRef = useRef()
    let control = useAnimation()
    let inView = useInView(divRef)
    useEffect(() => {

        if (inView) {
            control.start("visible")
        }
    }, [inView])
    return (
        <motion.div
            variants={IconsVarints}
            initial="hidden"
            animate={control}
            ref={divRef}
            id='otherskills' className=' grid grid-cols-2 sm:grid-cols-4 ml-auto place-items-center'>
            <motion.div

                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, yoyo: ' infinity ', repeat: Infinity }}
            ><FaReact className=' text-blue-400  w-12 h-12' /></motion.div>
            <motion.div

                variants={chldVarients}

                transition={{ delay: 0.8 }}
            ><SiReactrouter className=' text-red-600  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}

                transition={{ delay: 1.4 }}
            ><SiFramer className=' text-purple-600  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 1.6 }}
            ><SiRedux className=' text-purple-600  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}

                transition={{ delay: 1.8 }}
            ><FaPython className=' text-blue-950  w-12 h-12' /></motion.div>

            <motion.div
                variants={chldVarients}
                transition={{ delay: 2 }}
            ><SiPandas className=' text-blue-950  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 2.2 }}
            ><SiNumpy className=' text-blue-600  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 2.4 }}
            ><SiScikitlearn className=' text-orange-500  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 2.6 }}
            ><SiTensorflow className=' text-orange-500  w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 3 }}
            ><SiDjango className=' text-green-900 w-12 h-12' /></motion.div>
            <motion.div
                variants={chldVarients}
                transition={{ delay: 3.1 }}
            ><SiCplusplusbuilder className=' text-blue-600  w-12 h-12' /></motion.div>

            <motion.div
                variants={chldVarients}
                transition={{ delay: 3.2 }}
            ><FaGitAlt className=' text-blue-600  w-12 h-12' /></motion.div>




        </motion.div>
    )
}

export default Others