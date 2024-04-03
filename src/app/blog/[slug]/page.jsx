import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
      <div className={styles.container}>
        <div className="w-1/4 h-[550px] relative">
          <Image 
            src="https://images.pexels.com/photos/20750259/pexels-photo-20750259/free-photo-of-pigeon-point-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            fill
            className="object-contain"
          />
        </div>
        <div className="w-3/4 text-white p-6">
          <h1 className="text-4xl font-bold">Title</h1>
          <div className="flex items-center gap-3 my-6">
            <div className="w-10 h-10  relative">
              <Image src="/noavatar.png" fill className="object-contain rounded-full"/>
            </div>
            <div className="text-sm">
              <h5 className="font-bold text-white/70">Author</h5>
              <p>John Doe</p>
            </div>
            <div className="text-sm">
              <h5 className="font-bold text-white/70">Published</h5>
              <p>1-23-2333</p>
            </div>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum similique veniam facere id tempore dolorem placeat ea, hic impedit autem, assumenda vitae ut delectus.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SinglePostPage;