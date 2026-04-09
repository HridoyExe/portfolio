import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const Magnetic = ({ children, strength = 0.15 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        
        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;
        
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const springConfig = { damping: 25, stiffness: 150, mass: 0.1 };
    const springX = useSpring(position.x, springConfig);
    const springY = useSpring(position.y, springConfig);

    return (
        <motion.div
            style={{ 
                x: springX, 
                y: springY,
                willChange: "transform"
             }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center"
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
