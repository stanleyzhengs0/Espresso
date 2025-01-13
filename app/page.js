
import SearchBar from './components/navigation/SearchBar';
import CompanyReviewCard from "./components/CompanyReviewCard";

export default function Home() {


  return (
  <div className="flex flex-col pt-48 bg-custom-bg bg-cover min-h-screen">
    
      
    
      {/* Hero Section */}
    
       
        {/* Logo  */}
        {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-60 w-60 border-2 z-20">
          <img src="./homepage.png"/>
        </div> */}


        <div className="flex flex-col border-2 justify-center items-center gap-10 p-10">
          <div className='flex flex-col items-center font-sans text-3xl'>
            <h1 className="text-5xl text-center font-bold font-sans">Discover the best Cafes for in the City</h1>
            <p>Cafes, Review</p>
          </div>
          <div className='flex w-full justify-center items-center'>
            <SearchBar/>
          </div>
          
        </div>
     

  

      
     
 
  </div>
  );
}
