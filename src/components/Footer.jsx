import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <footer className="bg-black py-16 border-t border-white/5">
            <div className="container mx-auto px-8 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-white text-[11px] font-bold uppercase tracking-[0.3em]">
                            Designed & Developed by Hridoy
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-zinc-600 text-[10px] font-medium uppercase tracking-[0.2em]">
                                © {new Date().getFullYear()}. All rights reserved.
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-16 text-[10px] font-bold uppercase tracking-[0.3em]">
                        <div className="flex flex-col items-center md:items-start gap-1">
                            <span className="text-zinc-700">Visitors</span>
                            <span className="text-white">#8326</span>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-1 text-right">
                            <span className="text-zinc-700">Tetulia, Panchagarh</span>
                            <span className="text-white">{formattedTime}</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
