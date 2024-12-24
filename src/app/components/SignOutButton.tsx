"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-zinc-400 hover:text-zinc-100 transition-colors"
    >
      <LogOut className="h-4 w-4 mr-2" />
      Sign Out
    </Button>
  );
} 