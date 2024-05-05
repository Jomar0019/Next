import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {

    return (
      <div>
        <form action={handleGithubLogin}>
          <button className="bg-white p-2 rounded">Login with GitHub</button>
        </form>
      </div>
    )
  };
  
  export default LoginPage;