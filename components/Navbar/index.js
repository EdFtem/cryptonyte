import React from 'react'
import Image from 'next/image'
import icon from '../../public/ufo_icon.svg'
import { useMoralis } from 'react-moralis'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { authenticate, authError } = useMoralis();

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-4 bg-opacity-50">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src={icon} className="fill-current h-8 w-8 mr-2" width="54" height="54"/>
                <span className="font-semibold text-4xl tracking-tight ml-3">Cryptonyte</span>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                onClick={() => setNavbarOpen(!navbarOpen)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

            <div className={
              "w-full block flex-grow lg:flex lg:items-center lg:w-auto" +
              (navbarOpen ? " flex-grow" : " hidden")
            }>
                <div className="text-base lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                    Browse
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                    Create
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
                    About
                    </a>
                </div>
                <div>
                    <a onClick={authenticate} className="inline-block text-base px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        Connect Wallet
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar