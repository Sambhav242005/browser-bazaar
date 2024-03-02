'use client'

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function () {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex flex-col gap-6 p-6">
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
      </div>

      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
