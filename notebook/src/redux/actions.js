import { ADD ,INIT } from "./actionTypes";

export const initialize = content => ({
  type: INIT,
  payload: {
    content
  }
});

export const addNote = content => ({
  type: ADD,
  payload: {
    content
  }
});
