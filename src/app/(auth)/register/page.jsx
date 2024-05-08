import { register } from "@/lib/action";

const LoginPage = async () => {

    return (
      <div >
        <form action={register} className="flex flex-col w-[40%] gap-5">
            <input type="text" name="username" id="username" placeholder="username" />
            <input type="email" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password " />
            <input type="password" name="passwordRepeat" id="password" placeholder="password again" />
        <button className="bg-white px-4 py-2 ">Register</button>
        </form>
      </div>
    )
  };
  
  export default LoginPage;