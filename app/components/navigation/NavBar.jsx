import ProfileNav from '@/app/components/navigation/ProfileNav'
import Link from 'next/link'
import { handleGoogleSignIn } from '@/app/lib/auth/googleSignInServerAction'
import { checkIsAuthenticated } from '@/app/lib/auth/checkIsAuthenticated'


const NavBar = () => {


  return (
        <div className="fixed w-full top-0 start-0 bg-blueGray bg-opacity-95 shadow-lg rounded-b-lg z-10">
            <div className="flex justify-between mx-4 p-2">
            
                <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                    Beans
                </Link>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex items-center font-bold gap-4">
                        <li>
                            <Link 
                                href="./browse-all" 
                                className="text-white hover:bg-gray-100 hover:bg-opacity-15 p-2 rounded-sm" 
                                aria-current="page">
                                All Cafes
                            </Link>
                        </li>
                        
                        {/* <li>
                            <Link 
                                href="./dashboard" 
                                className="text-white hover:bg-gray-100 hover:bg-opacity-15 p-2 rounded-sm " 
                                aria-current="page">
                                Dashboard
                            </Link>
                        </li> */}

                        <li>
                            <Link 
                                href="./about-us" 
                                className="block px-3 bg-grey text-white rounded-3xl">
                                About Us
                            </Link>
                        </li>

                        <li>
                      
                            {checkIsAuthenticated ? (
                                    // <ProfileNav userImage = {user?.user.image} /> 
                                    <div>log</div>
                                    
                                ): 
                                (
                                    <button onClick={handleGoogleSignIn}> not logged in</button>
                            )}
                        </li>


        
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default NavBar