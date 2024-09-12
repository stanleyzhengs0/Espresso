'use client'
import ReviewBox from "./components/ReviewBox";
import SearchField from "./components/SearchField";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-50">
      <SearchField/>
      <ReviewBox/>

    </main>
  );
}
