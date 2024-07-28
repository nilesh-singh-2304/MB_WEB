import {create} from "zustand";

interface IUser {
    fullName : string;
    setfullName : (name : string) => void;
}

export const useUser = create<IUser>((set) => ({
    fullName : "",
    setfullName : (name : string) => set({fullName : name})
}))

export default useUser;