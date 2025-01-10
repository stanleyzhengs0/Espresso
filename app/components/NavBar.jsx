import Link from 'next/link'
import { HiOutlineNewspaper } from "react-icons/hi2";

const NavBar = () => {
  return (
        <div class="fixed w-full top-0 start-0 bg-blueGray bg-opacity-95 shadow-lg rounded-b-lg z-10">
            <div class="flex justify-between mx-4 p-2">
            
                <Link href="/" class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    Beans
                </Link>
                

                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex font-bold gap-4">
                        <li>
                            <Link 
                                href="./AllCafes" 
                                className="text-white hover:bg-gray-100 hover:bg-opacity-15 p-2 rounded-sm" 
                                aria-current="page">
                                All Cafes
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                                href="./dashboard" 
                                className="text-white hover:bg-gray-100 hover:bg-opacity-15 p-2 rounded-sm " 
                                aria-current="page">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link 
                                href="./about" 
                                className="block px-3 bg-grey text-white rounded-3xl">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavBar