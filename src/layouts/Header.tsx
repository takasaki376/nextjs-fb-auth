import Link from "next/link";
import { useAuthUser } from "next-firebase-auth";
import type { VFC } from "react";
import { useCallback } from "react";

export const Header: VFC = () => {
  const AuthUser = useAuthUser();

  const handleLogout = useCallback(() => {
    return AuthUser.signOut();
  }, [AuthUser]);

  return (
    <div className="flex justify-end w-full border-b border-gray-300">
      <div className="flex items-center justify-center h-full">
        <h2>{AuthUser.displayName}</h2>
        {AuthUser.displayName ? (
          <button
            onClick={handleLogout}
            className="m-auto mx-4 px-4 py-2 bg-red-200 rounded-3xl"
          >
            <span>ログアウト</span>
          </button>
        ) : (
          <Link href="/auth/signin" passHref>
            <a className="m-auto mx-4 px-4 py-2 bg-red-200 rounded-3xl">
              <span>ログイン</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
