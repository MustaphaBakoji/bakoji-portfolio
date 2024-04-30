

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import UseSplitter from './UseSplitter'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
let projVarients = { hidden: { borderWidth: 0, borderColor: "rgba(3, 37, 84,0)" }, visible: { borderWidth: '1px', borderColor: "rgba(3, 37, 84,1)", transition: { duration: 2, ease: "easeIn" } } }
let spanvariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }
let ahmadinfo = "I am *passionate *backend web* developer* with the* combination* of the *following *skills: *Node.js, *MongoDB, *Express,* authenticate *using authentication libraries* like Passport.js,* I look forward* to working with you."
let fadeel = "A tech* enthusiast* with a* developer and* educator* background. *Builds user* interfaces *with React *and teaches Python.* Constantly expanding *his skillset,* currently diving* into data science."
function Myteam() {
    let [splitedahmad, atag] = UseSplitter(ahmadinfo)
    let [splitedfadeel, tag] = UseSplitter(fadeel)
    let projRef = useRef()
    let inView = useInView(projRef)
    let control = useAnimation()
    // let [splitedCalc, tag] = UseSplitter(Calc)
    // let [splittedTodo, g] = UseSplitter(todo)
    useEffect(() => {
        if (inView) {
            control.start("visible")

        }


    }, [inView])
    return (
        <div>
            <motion.div
                ref={projRef}
                variants={projVarients}
                initial='hidden'
                animate={control}
                id='projects' className=' border-solid border-blue-950 rounded mt-5'

            >
                <motion.div
                    className=' font-light text-blue-950 text-2xl italic'
                >our Team(Collaborators)</motion.div>

                <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2'><div><img className='teampics rounded-full' src={require('../static/ahmad.jpg')} />ahmad dalha wazir
                    <p className=' text-green-500 flex justify-around '><a href='https://wa.me/2349032117028'><FaWhatsapp className='w-6 h-6' /></a><a href='https://t.me/2349032117028'><FaTelegram className='w-6 h-6 text-blue-500 bg-white rounded-full' /></a></p>
                </div><motion.div>{splitedahmad.map((span, i) => { return (<motion.span variants={spanvariants} transition={{ delay: 1 + (0.14 * i) }}>{span}</motion.span>) })}</motion.div>

                </div>
                <div className=' grid grid-cols-1 place-items-center sm:grid-cols-2'><div><img className='teampics rounded-full' src={require('../static/fadeel.jpg')} />Muhammad aliyu katagum
                    <p className=' text-green-500 flex justify-around '><a href='https://t.me/2348103291186'><FaWhatsapp className='w-6 h-6' /></a><a href='https://t.me/2348103291186'><FaTelegram className='w-6 h-6 text-blue-500 bg-white rounded-full' /></a></p>
                </div><motion.div>{splitedfadeel.map((span, i) => { return (<motion.span variants={spanvariants} transition={{ delay: 1 + (0.14 * i) }}>{span}</motion.span>) })}</motion.div>

                </div>
                <h1>we popurlarly Called ourSelves FAMtech</h1>
            </motion.div>


        </div>
    )
}

export default Myteam