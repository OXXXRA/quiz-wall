import { createEvent, createStore } from "effector"

export const openCreateRecordModal = createEvent()
export const closeCreateRecordModal = createEvent()


export const $createRecordModalStore = createStore<boolean>(false)
  .on(openCreateRecordModal, _ => true)
  .on(closeCreateRecordModal, _ => false)
