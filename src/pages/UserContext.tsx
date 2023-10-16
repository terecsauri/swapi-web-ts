import { createContext } from "react";

export type UserContextType = boolean;

export const UserContext = createContext<UserContextType>(false);
