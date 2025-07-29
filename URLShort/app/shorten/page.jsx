"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate=()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`) 
    seturl("")
    setshorturl("")
    console.log(result)
  alert(result.message)
  })

  .catch((error) => console.error(error));
  }

  return (
    <div className="mx-auto max-w-lg my-16 p-8 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center text-white tracking-wide drop-shadow">
        Generate your short URLs
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Your URL"
          onChange={e=>{seturl(e.target.value)}}
          className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="text"
          placeholder="Enter your preferred short URL text"
          onChange={e=>{setshorturl(e.target.value)}}
          className="px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        <button
           onClick={generate} className="relative inline-flex items-center justify-center px-5 py-3 overflow-hidden font-medium transition-all rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 focus:ring-4 focus:outline-none focus:ring-pink-300"
        >
          <span className="relative text-white text-sm tracking-wide">
            Generate
          </span>
        </button>   
      </div>
      {generated && <>
        <span className='font-bold text-lg'>Your Link</span> <code> <Link target="_blank" href={generated}>{generated}</Link> 
        </code></>}
    </div>
  )
}

export default page
