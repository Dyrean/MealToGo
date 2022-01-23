import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(getAuth(), email, password);
};

export const registerRequest = async (email, password) => {
  return await createUserWithEmailAndPassword(getAuth(), email, password);
};

export const signOutRequest = async () => {
  return await signOut(getAuth());
};
