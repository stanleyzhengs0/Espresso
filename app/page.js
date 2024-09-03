'use client'
import SearchField from "./components/SearchField";
import { connectToDB } from "./utils/connectdb";
import { useState } from "react";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-50">
      <SearchField/>

    </main>
  );
}
