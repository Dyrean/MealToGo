import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(getAuth(), email, password);
};
