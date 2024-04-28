import { auth, signIn } from "@/lib/auth";

const LoginPage = async () => {

  const session = await auth();

  console.log(session);

  const handleGithubLogin = async (e) => {
    "use server"
    await signIn("github");
  }


    return (
      <div>
        <form action={handleGithubLogin}>
          <button className="bg-white p-2 rounded">Login with GitHub</button>
        </form>
      </div>
    )
  };
  
  export default LoginPage;