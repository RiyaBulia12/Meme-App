import { Meme } from "../api/Meme"
import React, {useEffect, useState} from "react";
import './Meme.css'

export const MemeForm  = () => {
   const [allMemes, setAllMemes] = useState([]);
   const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'https://i.imgflip.com/af002.jpg'
   })

   useEffect(() => {
      Meme().then(memeData => setAllMemes(memeData.data.memes))
   }, [])

   const getMemeImage = () => {
      const randomNum = Math.floor(Math.random() * allMemes.length);
      const randomUrl =  allMemes[randomNum]?.url

      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: randomUrl
      }))
   }

   const handleChange = (event) => {
      const {name, value} = event.target

      setMeme(prevMeme => ({
         ...prevMeme,
         [name]: value
      }))
   }

   return (
      <main>
         <form className="my-10 mx-auto w-3/5 lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
               <div className="form-group mb-6">
                  <input
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  name="topText"
                  id="topText"
                  value={meme.topText}
                  onChange={handleChange}
                  placeholder="Top Text"/>
               </div>
               <div className="form-group mb-6">
                  <input
                  className=" form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="text"
                  name="bottomText"
                  id="bottomText"
                  value={meme.bottomText}
                  onChange={handleChange}
                  placeholder="Bottom Text"/>
               </div>
            </div>
            <button
               type="button"
               className="w-full px-7 py-4 bg-zinc-800 text-white font-medium text-xs
               leading-tight uppercase shadow-md rounded hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700
               focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-900 active:shadow-lg transition duration-150 ease-in-out"
               onClick={getMemeImage}>
                  Get Random Meme Image</button>
         </form>
         <div className="m-auto relative w-3/5 lg:w-1/2">
            <img
               className="w-full"
               src={meme.randomImage}
               alt="Randomly generated meme"
            />
            <h3
               className="absolute w-11/12 text-center text-xl font-bold left-1/2
               translate-x-[-50%] top-0 py-0.5 meme-text md:text-3xl">
               {meme.topText}
            </h3>
            <h3
               className="absolute w-11/12 text-center text-xl font-bold left-1/2
               translate-x-[-50%] bottom-0 py-0.5 meme-text md:text-3xl">
               {meme.bottomText}
            </h3>
         </div>
      </main>
   )
}
