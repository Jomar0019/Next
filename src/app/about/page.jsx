import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="flex">
          <div className="w-full">
            <h4 className="text-blue-500 font-bold text-xl">About Agency</h4>
            <p className="text-white text-6xl font-bold my-12 leading-tight">We create digital ideas that are bigger, bolder, braver and better.</p>
            <p className="text-white text-lg">We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We're world's Our Special and software developement services.</p>
            <div className="flex justify-between mt-12">
              <div>
                <h4 className="text-blue-500 font-bold text-2xl">10 K+</h4>
                <p className="text-white mt-1 text-sm">Year of experience</p>
              </div>
              <div>
                <h4 className="text-blue-500 font-bold text-2xl">234 K+</h4>
                <p className="text-white mt-1 text-sm">People reached</p>
              </div>
              <div>
                <h4 className="text-blue-500 font-bold text-2xl">5 K+</h4>
                <p className="text-white mt-1 text-sm">Services and plugins</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-3/4 h-full relative mx-auto">
            <Image src="/about.png" alt="a" fill className="object-contain"/>
            </div>
          </div>
        </div>
    );
  };
  
export default AboutPage;