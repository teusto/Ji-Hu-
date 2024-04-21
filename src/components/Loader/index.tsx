import React, { useEffect } from 'react'
import './style.scss';
import { motion, useAnimate, stagger } from "framer-motion";

const Loader = (): React.JSX.Element => {
    const [scope, animate] = useAnimate();
    let sentence1: any = Array.from('Impressive,\xa0very\xa0nice\xa0...');
    let sentence2: any = Array.from(`Let's\xa0see\xa0Matheus\xa0Toscano\xa0card`);

    useEffect(() => {
        animate("p", { opacity: 1 }, { ease: "linear", delay: stagger(.05) })
    }, [scope])

    return (
        <div className='Loader__wrapper'>
            <motion.div className='Loader__top' animate={{ x: '-100%' }} transition={{ delay: 3.5, duration: 1.2 }}>
                <div ref={scope} className='__top__text'>
                    <div className='__text__sentence'>
                        {sentence1.map(l => <p className='--text'>{l}</p>)}
                    </div>
                    <div className='__text__sentence'>
                        {sentence2.map(l => <p className='--text'>{l}</p>)}
                    </div>
                </div>
            </motion.div>
            <motion.div className='Loader__bottom' animate={{ x: '100%' }} transition={{ delay: 3.5, duration: 1.2 }}></motion.div>
        </div>
    )
}

export default Loader;