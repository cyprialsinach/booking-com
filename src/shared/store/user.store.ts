import { useAtom } from "jotai";
import { userState } from "./index";

export default function useUser() {
  const [user, setUser] = useAtom(userState);

  const authenticate = () => {
    setUser({
      ...user!,
      user: {
        ...user.user!,
        authenticated: true,
      },
    });
  };

  const unAuthenticate = () => {
    setUser({
      ...user!,
      user: {
        ...user.user!,
        authenticated: false,
      },
    });
  };

  return {
    user,
    authenticate,
    unAuthenticate,
    setUser,
  };
}
