import Image from 'next/image'

export default function Home() {
  return (
      <div class="flex flex-wrap bg-orange-500 h-64 items-start  ">
          <div class="bg-red-500 p-4 m-2 self-center basis-1/4">1</div>
          <div class="bg-green-500 p-4 m-2 self-end flex-1 ">2</div>
          <div class="bg-blue-500 p-4 m-2">flexbox ejercicio 1 </div> 

      </div >
  )
}
