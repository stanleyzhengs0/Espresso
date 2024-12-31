import Link from 'next/link'
import { HiOutlineNewspaper } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className = "shadow-lg">
        <div class="fixed w-full z-20 top-0 start-0">
            <div class="flex justify-between mx-auto p-2">
            
                <Link href="/" class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    Beans
                </Link>
                

                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex font-bold gap-4">
                        <li>
                            <Link 
                                href="./news-articles" 
                                className="text-white hover:bg-gray-100 hover:bg-transparent" 
                                aria-current="page">
                                News Articles
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                                href="./dashboard" 
                                className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 " 
                                aria-current="page">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="/" 
                                className="block px-3 bg-grey text-white rounded-3xl">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar