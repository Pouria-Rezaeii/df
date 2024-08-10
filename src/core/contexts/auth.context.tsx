import {UserInfo} from "@open-api";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextValue = {
  user: UserInfo | null;
  setUser: Dispatch<SetStateAction<UserInfo | null>>;
  isPending: boolean;
  setIsPending: Dispatch<SetStateAction<boolean>>;
};
// TODO check for optimization
const authContext = createContext<ContextValue>({
  user: null,
  setUser: () => {},
  isPending: true,
  setIsPending: () => {},
});

export default function AuthContextProvider({children}: PropsWithChildren) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isPending, setIsPending] = useState(true);

  return (
    <authContext.Provider value={{user, setUser, isPending, setIsPending}}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
