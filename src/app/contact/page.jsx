import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "aa"
}

const ContactPage = () => {
    return (
      <div className="flex">
        <div className="w-full">
          <div className="w-3/4 h-full relative mx-auto">
            <Image src="/contact.png" alt="a" fill className="object-contain"/>
          </div>
        </div>

        <div className="w-full">
          <form action="/" className="flex flex-col justify-center items-center gap-y-5">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-3/4 px-6 py-3 rounded bg-[#2d2b42]" 
            />
            <input 
              type="email" 
              name="" 
              id="" 
              placeholder="Email Address" 
              className="w-3/4 px-6 py-3 rounded bg-[#2d2b42]"
            />
            <input 
              type="text" 
              name="" 
              id="" 
              placeholder="Phone Number (Optional)" 
              className="w-3/4 px-6 py-3 rounded bg-[#2d2b42]"
            />
            <textarea 
              placeholder="Message" 
              className="w-3/4 px-6 py-3 rounded bg-[#2d2b42]" rows={5}></textarea>
            <button className="w-3/4 text-center bg-blue-500 text-white px-6 py-3 rounded">Send</button>
          </form>
        </div>
      </div>
    );
  };
  
export default ContactPage;