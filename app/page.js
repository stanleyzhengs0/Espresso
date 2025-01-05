
import SearchBar from './components/SearchBar';
import CompanyReviewCard from "./components/CompanyReviewCard";

export default function Home() {


  return (
  <div className="pt-12   ">
    <div className="">
      
    
      {/* Hero Section */}
      <div className="relative border-2 bg-custom-bg h-[50vh] w-screen">
       
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-60 w-60 border-2 z-20">
          <img src="./homepage.png"/>
        </div>


        <div className="border-2 flex flex-col justify-center items-center h-full gap-16">
          <div className='flex flex-col items-center gap-10 font-sans text-3xl'>
            <h1 className="text-5xl text-center font-bold font-sans">Discover Review the best Cafes in the City</h1>
            <p>Cafes, Review</p>
          </div>
          
          <SearchBar/>
        </div>
      </div>

    
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-4">Discover Cafes</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-5" >
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>
          <CompanyReviewCard/>

        </div>
        
        
      </div>

      
     
    </div>
  </div>
  );
}
