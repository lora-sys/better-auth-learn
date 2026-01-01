import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-4xl flex py-8 px-8 max-w-7xl">
        Welcome to the Home Page!
      </h1>
      <p className=" text-3xl   px-8">Welcome back, {session.user.name}!</p>
    </div>
  );
}
/** client side implement sign out butoon
 * import { authClient } from "@/lib/auth-client" // import the auth client

 export function User(){

     const {
         data: session,
         isPending, //loading state
         error, //error object
         refetch //refetch the session
     } = authClient.useSession()

     return (
         //...
     )
 }
 */
