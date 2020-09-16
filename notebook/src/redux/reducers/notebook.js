import { ADDCATEGORY, INIT, ADDNOTETITLE } from "../actionTypes";
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
    case ADDCATEGORY: {
      const { content } = action.payload;
     // const temp = { "name": content, "notelist": [''] }
     const temp = {"name": content, [content]: {"notelist": [''],"notecontent":[''] }}
   //  database.ref('notebook').push(temp)

      return {
        ...state,
        data: { [content]: temp, ...state.data },
      };
    }
    case ADDNOTETITLE: {
      const { content } = action.payload;
      let temp;
      let id;
      for (let a in state.data) {
        if (state.data[a].name === content.name) {
          let ntlist =  state.data[a].notelist
          ntlist.push(content.notelist)      
          id = a;
          temp = {
            [a]: {
              ...state.data[a],
              notelist: ntlist
            }
          }
         
        }
      }
      return {
        ...state,
        data: {
          [id]:temp[id].notelist,
           ...state.data }
      };
    }
    default:
      return state;
  }
}
