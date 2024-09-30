'use client'
import SearchButton from "@/app/components/SearchButton"
import HomeButton from "./HomeButton"
import ProfileButton from "./ProfileButton"

const FooterNavigation = () => {
  return (
    <div className='flex w-full justify-center p-8 rounded-3xl bg-stone-400 gap-20
    '>
  
        <div>
            <HomeButton/>
        </div>
        <div>
            <SearchButton/>
        </div>
        <div>
            <ProfileButton/>
        </div>
    </div>
  )
}

export default FooterNavigation
