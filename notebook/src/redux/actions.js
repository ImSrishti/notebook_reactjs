import { ADDCATEGORY ,INIT, ADDNOTES, ADDNOTETITLE} from "./actionTypes";

export const initialize = content => ({
  type: INIT,
  payload: {
    content
  }
});

export const addCategory = content => ({
  type: ADDCATEGORY,
  payload: {
    content
  }
});

export const addNoteTitle = content => ({
  type: ADDNOTETITLE,
  payload: {
    content
  }
});

export const addNotes = content => ({
  type: ADDNOTES,
  payload: {
    content
  }
});

