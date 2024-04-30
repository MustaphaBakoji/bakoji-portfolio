import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import UseSplitter from './UseSplitter'

let projVarients = { hidden: { scale: 0 }, visible: { scale: 1, transition: { duration: 2, ease: "easeIn" } } }
let spanvariants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }
let shopProj = "Bakoji Shop* 'http://bakojishop.netlify.app'>(bakojishop.netlify.app)* :* Developed a *cart* management *system* using *react *and* redux"
let Calc = "Equate* Calculator :*> (https://mustaphabakoji.github.io/equateCalc/)*: *Created* a web-based* calculator* capable* of performing *basic *operations,* solving *quadratic *equations,* and *handling *simultaneous *equations."
let todo = "bakojitodoApp * : *a simple *to do * * App * for managing *todos store* infomation *in local storage >"
function MyProjects() {
    let [splitedShop, atag] = UseSplitter(shopProj)
    let projRef = useRef()
    let inView = useInView(projRef)
    let control = useAnimation()
    let [splitedCalc, tag] = UseSplitter(Calc)
    let [splittedTodo, g] = UseSplitter(todo)
    useEffect(() => {
        if (inView) {
            control.start("visible")

        }


    }, [inView])


    return (
        <motion.div
            ref={projRef}
            variants={projVarients}
            initial='hidden'
            animate={control}
            className=' mt-5 grid grid-cols-1 sm:flex sm:justify-around place-items-center gap-3'

        >
            <motion.div className='shop'>

                {splitedShop.map((span, i) => { return (<motion.span variants={spanvariants} transition={{ delay: 1 + (0.14 * i) }}>{span}</motion.span>) })}
                <motion.span
                    variants={spanvariants}
                    transition={{ delay: 3 }}

                >
                    <motion.a href='https://bakojishop.netlify.app'
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.3, color: 'rgb(30,5,189)', fontStyle: 'italic' }}
                        className=' text-blue-600'> BakojiShop</motion.a>
                </motion.span>

            </motion.div>
            <motion.div className='shop'>

                {splitedCalc.map((span, i) => { return (<motion.span variants={spanvariants} transition={{ delay: 1 + (0.14 * i) }}>{span}</motion.span>) })}
                <motion.span
                    variants={spanvariants}
                    transition={{ delay: 5 }}

                >
                    <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.3, color: 'rgb(30,5,189)', fontStyle: 'italic' }}
                        href='https://mustaphabakoji.github.io/equateCalc/' className=' text-blue-700'>EquateCalc</motion.a>
                </motion.span>
            </motion.div>
            <motion.div className='shop'>

                {splittedTodo.map((span, i) => { return (<motion.span variants={spanvariants} transition={{ delay: 1 + (0.14 * i) }}>{span}</motion.span>) })}
                <motion.span
                    variants={spanvariants}
                    transition={{ delay: 5 }}

                >
                    <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.3, color: 'rgb(30,5,189)', fontStyle: 'italic' }}
                        href='https://bakoji-todo.netlify.app/' className=' text-blue-700'> Bakoji-todo</motion.a>
                </motion.span>
            </motion.div>

        </motion.div>

    )
}

export default MyProjects