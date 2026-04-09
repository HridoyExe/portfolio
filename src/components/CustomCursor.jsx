import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovered, setIsHovered] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleOver = (e) => {
            const target = e.target;
            const style = window.getComputedStyle(target);
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || style.cursor === 'pointer' || target.closest('a') || target.closest('button')) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 pointer-events-none z-[999] hidden lg:block backdrop-blur-[2px]"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                x: "-50%",
                y: "-50%",
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isPointer ? "rgba(6, 182, 212, 0.1)" : "transparent",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-400 rounded-full" />
            </div>
            {isPointer && (
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-[-4px] border border-cyan-500/20 rounded-full"
                />
            )}
        </motion.div>
    );
};

export default CustomCursor;
