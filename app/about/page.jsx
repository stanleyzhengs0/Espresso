import ReviewCarousel from "../components/ReviewCarousel "

const IMAGES = [
  "./images/BR1.png",
  "./images/BR2.png", 
  "./images/BR3.png",
  "./images/BR4.png",
  "./images/BR5.png",
  "./images/BR6.png"
]

const page = () => {
  return (
    <div className="flex flex-col items-center font-sans pt-14 border-2">
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

      <div>
        standards
      </div>
 
    </div>
  )
}

export default page