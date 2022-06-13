import React from 'react'

const WelcomeSection = () => {

    return (
        <section className='relative bg-primary pt-[100px] bg-opacity-5 pb-24'>
            <div className="container mx-auto px-6 grid md:grid-cols-2">
                <div className='flex items-center'>
                    <div className='relative'>
                        <p className='text-primary'>SIGN UP TODAY</p>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-normal'>
                            The World’s <br />
                            <span className='text-blue-gradient'>Fastest Growing</span> <br />
                            Cryptonyte Web-3.0
                        </h1>
                        <div className="mt-4 mb-8">
                            <p className="text-gray">Create a quiz in the web 3.0 world, join us and build the future together</p>
                            <p className="text-gray">Pass the quiz and get the reward.</p>
                        </div>
                    </div>
                </div>
                <div className='relative hidden md:block'>
                    2
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection