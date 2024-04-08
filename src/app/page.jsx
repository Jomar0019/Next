import Image from "next/image";

const Home = () => {

  return (
    <div className="flex ">
      <div className="w-full flex flex-col">
        <div className="text-[#FAFAFA] text-7xl font-bold">
          <h1>Creative</h1>
          <h1 className="my-5">Thoughts</h1>
          <h1>Agency.</h1>
        </div>
        <p className="my-12 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi cupiditate fuga dignissimos iste ea reprehenderit fugiat voluptates in incidunt!</p>
        <div>
          <button className="w-[120px] px-3 py-4 bg-blue-500 text-sm text-white rounded mr-3">Learn More</button>
          <button className="w-[120px] px-3 py-4 bg-white rounded text-sm">Contact</button>
        </div>
        <div className="w-[500px] h-[50px] relative mt-12">
          <Image src="/brands.png" alt="home" fill sizes="100%" className="grayscale cursor-pointer" />
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-3/4 mx-auto h-full">
          <Image src="/hero.gif" alt="home gif" fill sizes="100%" className="object-contain" priority="true"/>
        </div>
      </div>
    </div>
  )
};

export default Home;