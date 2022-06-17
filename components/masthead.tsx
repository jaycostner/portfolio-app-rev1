import React from 'react';
import Image from 'next/image'


const Masthead: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/8mhero2.mp4" type="video/mp4; codecs=hvc1" />
                <source src="/8mhero.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
                <Image src="/8mlogo.png" width={160 / 3} height={160 / 3} alt="logo" />
            </div>
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                <h1 className="mb-6 text-4xl xl:text-5xl">Gr8Minds Digital</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
                    <span>SaaS Developement</span>{' '} <span>Done Right</span>
                </h2>
            </div>
            <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
              <Image  
              src="/arrow-down-hero.png"
              width={188 / 3}
              height={105 / 3}
              alt="scroll down"
              />
            </div>
            </div>
    )
}

export default Masthead