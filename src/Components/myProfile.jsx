import React, { useEffect, useState } from 'react'
import { motion, } from 'framer-motion'

function MyProfile() {
    const [image1, setimage1] = useState(true)
    useEffect(() => {

        let myinterval = setTimeout(() => { setimage1((prev) => !prev) }, 4000)
        return () => clearInterval(myinterval)

    },)
    return (
        <div className=''>


            <motion.div className='box mt-0'>
                <h1 style={{ color: "#c38EB4", marginTop: "4rem" }} className=' text-4xl '><motion.span initial={{ opacity: 0, y: -10, rotate: -180 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1 }}>Hi </motion.span> <motion.span
                    initial={{ opacity: 0, y: -10, rotate: -180 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, delay: 1 }}
                >I am  </motion.span> <motion.span
                    initial={{ opacity: 0, y: -10, rotate: -180 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, delay: 2 }}
                >Mustapha Adamu bakoji </motion.span></h1>
            </motion.div>

        </div>
    )
}

export default MyProfile