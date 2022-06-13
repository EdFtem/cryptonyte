import React, { Suspense } from 'react'
import Image from 'next/image'
import Ufo from './Ufo'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Welcome = () => {
    return (
        <div class="flex">
            <div class="">
            <Canvas class="flex-none">
                <OrbitControls enableZoom={false}/>
                <ambientLight intency={0.5}/>
                <Suspense>
                    <Ufo/>
                </Suspense>
            </Canvas>
            </div>
            <div class="flex-grow">
                Welcome !
            </div>
            
        </div>
    )
}

export default Welcome