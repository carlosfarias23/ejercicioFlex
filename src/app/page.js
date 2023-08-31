import Image from 'next/image'

export default function Home() {
  return (
      <div class="flex flex-wrap bg-gradient-to-r from-red-500 to-red-700 h-64">
    <div class="bg-cyan-300 hover:bg-red-600 h-20">suscribirse 1 </div> 
    <div class="bg-gradient-to-r from-pink-500 hover:bg-black text-center">aqui la magia del wind</div>
    <div class="bg-gradient-to-l hover:bg-gradient-to-r flex-1 text-center">nosotros</div>
    <div class="bg-gradient-to-r from-red-500 to-fuchsia-750 hover:bg-red-600 flex-1 font-sans hover:font-serif text-xl text-center">ellos</div>
    <div class="bg-gradient-to-r from-yellow-500 to-gray-750 hover:bg-gray-600 flex-1 text-4xl text-center">ofertas</div>
    <div class="bg-gradient-to-l hover:bg-gradient-to-r">Canasta</div>
      <iframe class="w-full h-full aspect-video md:aspect-square p-4 m-2 self-end " src="https://www.youtube.com/watch?v=fKKNPLowteY&list=RDfKKNPLowteY&start_radio=1"></iframe>
      <div class="">
        <h1 class="bg-green-500 h-50">esto es el h1</h1>
        <p class="bg-red-500">
          este es el paragraf
        </p>
        <h2 class=""> este s el h2</h2>
    </div>
    <div class="flex flex-wrap bg-gradient-to-r from-red-500 to-red-700 h-64">
      <h1 class="bg-blue-500 h-50 flex-1">el otro h1</h1>
    </div>
    </div>
  )
}