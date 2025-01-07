import ReviewCarousel from "../components/ReviewCarousel "



const IMAGES = [
  "./images/1f.png",
  "./images/BadReview2.png", 
  "./images/BadReview3.png",
  "./images/BadReview4.png",
  "./images/BadReview5.png",
  "./images/BadReview6.png"
]

const page = () => {
  return (
    <div className="flex flex-col items-center font-sans pt-14">
      <div className="flex flex-col items-center max-w-screen-md gap-4" alt="about">
        <h1 className="font-bold text-4xl">About Us</h1>
        <p>
          You’re a student, a coffee lover, or work remotely and only care about a tasty 
          drink and a nice ambiance. You go to the reviews to look for recommendations and 
          get hit with a 2-star review life lesson on sustainability. Im all for it but what 
          about my coffee? This application is built to be a guide to discovering the best 
          cafes in the city. We are dedicated to helping coffee enthusiasts and casual visitors 
          alike explore local coffee spots, read genuine reviews, and share their own experiences
          dedicated strictly to drinks, food, and ambiance.
        </p>
      </div>
      <div>
        Examples
      </div>

      <div className="pt-10">
        <ReviewCarousel imageUrls = {IMAGES}/>
      </div>
    </div>
  )
}

export default page