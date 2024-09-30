'use client'
import SearchField from "@/app/components/SearchField"

const FooterNavigation = () => {
  return (
    <div className='flex w-full justify-center p-8 rounded-3xl bg-stone-400 gap-10
    '>
        <div>
            home
        </div>
        <div>
            <SearchField/>
        </div>
        <div>
            profile
        </div>
    </div>
  )
}

export default FooterNavigation
