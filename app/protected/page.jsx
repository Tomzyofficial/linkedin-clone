/* import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div>
        You are only seeing this because you are authenticated
        <p>This is a protected page</p>
      </div>
    </>
  )
} */