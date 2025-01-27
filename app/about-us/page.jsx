import ReviewCarousel from "../components/aboutus/IrrelevantReviewCarousel "
import NavBar from "../components/navigation/NavBar"

const IMAGES = [
  "./images/irrelevant-reviews/BR1.png",
  "./images/irrelevant-reviews/BR2.png", 
  "./images/irrelevant-reviews/BR3.png",
  "./images/irrelevant-reviews/BR4.png",
  "./images/irrelevant-reviews/BR5.png",
  "./images/irrelevant-reviews/BR6.png"
]

const page = () => {
  return (
    
    <div className="flex flex-col items-center font-sans pt-14 border-2">
      <NavBar/>
      {/* About Us Description Container */}
      <div className="flex flex-col items-center sm:w-1/2 gap-4" alt="about">
        <h1 className="font-bold text-4xl">About Us</h1>
        <p className="md:text-lg">
          You’re a student, a coffee lover, or work remotely and only care about a tasty 
          drink and a nice ambiance. You go to the reviews to look for recommendations and 
          get hit with a 2-star review life lesson on sustainability. Im all for it but what 
          about my coffee? This application is built to be a guide to discovering the best 
          cafes in the city. We are dedicated to helping coffee enthusiasts and casual visitors 
          alike explore local coffee spots, read genuine reviews, and share their own experiences
          dedicated strictly to drinks, food, and ambiance.
        </p>
        <div className="bg-grey p-3 rounded-xl">
          1 Star Review's Gathered from cafe's with more that 4.5 Star's and 100+ Review's
        </div>
      </div>

      {/* Image Carousel Container */}
      <div className="w-full sm:w-1/2 pt-10">
        <ReviewCarousel imageUrls = {IMAGES}/>
      </div>

     
        <div class="relative bg-gray-900 p-6">
          {/* <!-- Content Box --> */}
          <div class="relative z-10 bg-yellow-500 text-black p-6 rounded-lg shadow-lg max-w-md">
            <h2 class="text-xl font-bold mb-4">Let it surprise you</h2>
            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint.
            </p>
            <ul class="space-y-2">
              <li><span class="font-bold">✔</span> Best team</li>
              <li><span class="font-bold">✔</span> Best quality</li>
              <li><span class="font-bold">✔</span> Best experience</li>
            </ul>
            <p class="mt-4">
              Duis sagittis turpis in ullamcorper venenatis. Vestibulum...
            </p>
          </div>

          {/* <!-- Image Box --> */}
          <div class="absolute  -left-16 z-0">
            <img
              src="https://via.placeholder.com/300"
              alt="Surprised child"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
 
   
  )
}

export default page