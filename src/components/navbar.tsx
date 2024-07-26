import { useState } from "react";
import {clsx} from "clsx";

export const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(true);

    const toggleNav = () => {
        setMobileNav(!mobileNav);
    }

    return (
        <>
            <nav id="mobileNavbar"
                className={clsx("fixed flex flex-col w-full h-dvh lg:hidden bg-body dark:bg-body-black transition-all duration-300 z-[6]", {"-translate-y-full":mobileNav})}>
                <div className="lg:hidden flex justify-end py-4 px-8 lg:px-20 gap-2"> 
                    <button id="closeMobileNav" className="size-16" onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="size-6 m-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="list-none text-xl basis-2/3 flex flex-col items-center justify-around *:*:p-4">
                    <li>
                        <a href="#" className="block w-100">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block w-100">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="block w-100">About</a>
                    </li>
                    <li>
                        <a href="#" className="block w-100">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="block w-100">Hire Me</a>
                    </li>
                    <li className="dark:hidden lg:hidden">
                        <button className="dark-toggle hover:bg-primary/20 p-4 rounded-full text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd"
                                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </li>
                    <li className="hidden dark:block lg:hidden">
                        <button className="light-toggle hover:bg-primary-dark/20 p-4 rounded-full text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path
                                    d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="backdrop-blur-md w-full h-20 flex items-center py-4 px-8 lg:px-20 gap-2">
                <h1 className="text-2xl lg:text-3xl font-semibold">Portfo<span className="text-violet-dark">lio.</span></h1>
                <ul className="hidden lg:flex flex-1 justify-end *:*:p-4 gap-4">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Hire Me</a>
                    </li>
                </ul>
                <button className="dark-toggle hidden lg:block dark:hidden hover:bg-primary/20 p-4 rounded-full text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd"
                            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                            clipRule="evenodd" />
                    </svg>
                </button>
                <button className="light-toggle hidden lg:dark:block hover:bg-primary-dark/20 p-4 rounded-full text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path
                            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                    </svg>
                </button>
                <div id="openMobileNav" className="lg:hidden flex flex-1 justify-end" onClick={(prev)=>{setMobileNav(!prev)}}>
                    <button className="size-16 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                            stroke="currentColor" className="size-6 m-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}