import { createEvent, createStore } from "effector";

export const setEmail = createEvent<string>();
export const setPassword = createEvent<string>();
export const toggleLoginForm = createEvent<unknown>();
export const setIsExistsEmail = createEvent<boolean>();

export const authFormStore = createStore({
  email: "",
  password: "",
  isExistsEmail: false,
  isLoginForm: false,
})
  .on(setEmail, (state, v) => {
    return { ...state, email: v };
  })
  .on(setPassword, (state, v) => {
    return { ...state, password: v };
  })
  .on(toggleLoginForm, (state, v) => {
    return { ...state, isLoginForm: !state.isLoginForm, isExistsEmail: false };
  })
  .on(setEmail, (state, v) => {
    return { ...state, email: v };
  })
  .on(setIsExistsEmail, (state, v) => {
    return { ...state, isExistsEmail: v };
  });

export const setToken = createEvent<string>();

export const authCoreStore = createStore({
  token: null,
}).on(setToken, (state, v) => {
  localStorage.setItem("token", v);
  return { ...state, token: v };
});
