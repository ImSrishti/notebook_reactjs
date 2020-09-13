import { ADD,INIT } from "../actionTypes";
import database from '../../database/firebase'

const initialState = {
  data: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT: {
      const { content } = action.payload;
      return {
        ...state,
        data: content
      };
    }
    case ADD: {
      const { content } = action.payload;
      const temp = {"name":content,"notelist":['']}
      
      database.ref('notebook').push(temp)
      
      debugger
      return {
        ...state,
        data: {...state.data,temp}
      };
    }
    default:
      return state;
  }
}
