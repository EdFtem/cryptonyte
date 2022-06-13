import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Ufo from '../Ufo/Ufo'
import Ufo2 from '../Ufo/Ufo2'

const WelcomeSection = () => {

    return (
        <section className='relative bg-primary pt-[100px] bg-opacity-5 pb-24'>
            <div className="container mx-auto px-6 grid md:grid-cols-2">
                <div className='flex items-center'>
                    <div className='relative text-white'>
                        <p className='text-primary text-white'>SIGN UP TODAY</p>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
                            The World’s <br />
                            <span className='text-blue-gradient text-white'>Fastest Growing</span> <br />
                            Cryptonyte Web-3.0
                        </h1>
                        <div className="mt-4 mb-8 text-white">
                            <p className="text-gray">Create a quiz in the web 3.0 world, join us and build the future together</p>
                            <p className="text-gray">Pass the quiz and get the reward.</p>
                        </div>
                    </div>
                    <button>1</button>
                </div>
                <div className='relative hidden md:block'>
                    <Canvas>
                        <OrbitControls target={[0,1,0]}  enableZoom = {false}
                        rotateSpeed={2}
                        autoRotate={true}/>
                        <ambientLight intensity ={0.9}/>
                        <Ufo2 />                 
                        <Ufo />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection