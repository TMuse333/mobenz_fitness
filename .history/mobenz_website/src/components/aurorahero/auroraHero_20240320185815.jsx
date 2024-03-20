import React from "react";
import { motion, useMotionTemplate, useMotionValue,
animate } from "framer-motion";
import './aurorahero.css'
import { useEffect } from "react";
import main from '../../media/mobenz-main-2-removebg-preview-2.png'
const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "#d8a5ff", // Lighter shade of the slight purple
  ];


const AuroraHero = () => {


      

const color = useMotionValue(colors[0])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125%
        at 50% 0%, #011117 50%, ${color})`

        const border = useMotionTemplate`1px solid ${color}`
const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

        useEffect(()=> {
            animate(color, colors, {
                ease: 'easeInOut',
                duration:10,
                repeat:Infinity,
                repeatType: 'mirror'

           })
        },[])

return (
    <motion.section className="aurora-hero-container"
    style={{
        backgroundImage

    }}>

    
        <div className="gradient-text">

       
       <h2 className="title-text">
       Transform Your Vision Today </h2> 
<p className='description-text'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque nulla unde laborum velit consectetur alias omnis cumque voluptatem dicta.  </p>

<br/>
<br/>

<p className="description-text">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis impedit beatae facere iusto? Quae unde necessitatibus explicabo, quas recusandae saepe. </p>
       
       
       

        <motion.button
        whileHover={{
            scale:1.015
        }}
        whileTap={{
            scale: 0.985
        }}
        style={{
            border,
            boxShadow
        }}>
            Click Me
        </motion.button>
        </div>
{/* salt */}
    </motion.section>
)

}

export default AuroraHero