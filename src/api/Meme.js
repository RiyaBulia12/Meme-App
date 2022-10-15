export const Meme = async () => {
   const resData = await fetch("https://api.imgflip.com/get_memes")
   return resData.json();
}
