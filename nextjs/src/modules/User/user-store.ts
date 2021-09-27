import { createEvent, createStore } from "effector";

interface IUser {
  email: string;
  email_confirmed_at: string | null;
  avatar: string | null;
  nickname: string | null;
  id: string;
  created_at: string | null;
  updated_at: string | null;
}

export const setUser = createEvent<IUser>();

export const userStore = createStore({
  user: null,
}).on(setUser, (state, v) => ({ ...state, user: v }));
