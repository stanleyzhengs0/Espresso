import BrowseCafeList from '../components/browse-all/BrowseCafeList'
import FilterSection from '../components/browse-all/FilterSection'
import NavBar from '../components/navigation/NavBar'

const page = () => {

  return (
    <div className='flex flex-col pt-12 gap-3'>
      <NavBar/>
      <div className="flex justify-between  items-center border-2 px-8 h-12 text-xl" alt= "Header">
        <div className='' alt = "CafeList_Title">
          <h1>
            <span>
              Cafes
            </span>
          </h1>
        </div>
        <div className="flex gap-3 border-2" alt="filter">
          <span>
            Sort: 
          </span>
          <span>
          placeholder for selected option
          </span>
        </div>

        {/* <div className='' alt ="dropdown">
         
        </div> */}
      
      </div>

      <div className='' alt='filter_options'>

      </div>

      <div className='flex flex-row min-w-[1060px] justify-center gap' alt='Listed_review_section'>
        <div className='flex justify-center'>
          <FilterSection/>
          <BrowseCafeList/>

        </div>
      </div>
    </div>
  )
}

export default page
