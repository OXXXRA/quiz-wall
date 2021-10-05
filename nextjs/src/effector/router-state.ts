
import { createStore, createEvent, } from 'effector';

export const setLoadingPage = createEvent<boolean>()

export const $routerStore = createStore({
  isLoading: false,
}).on(setLoadingPage, (state, isLoading) => ({ ...state, isLoading }))