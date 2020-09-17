import { ADDCATEGORY, INIT, ADDNOTETITLE } from "../actionTypes";
import database from '../../database/firebase'

const initialState = {
  data: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT: {
      const { content } = action.payload;
      // for(let a in content){
      //   content[a].notelist=[]
      // }
      
      return {
        ...state,
        data: content
      };
    }
    case ADDCATEGORY: {
      const { content } = action.payload;
      const temp = { "name": content, notelist:[] }
     
    //  database.ref('notebook').push(temp)

      return {
        ...state,
        data: { [content]: temp,...state.data },
      };
    }
    case ADDNOTETITLE: {
      const { content } = action.payload;
      
      let temp;
      let id;
      for (let a in state.data) {
        if (state.data[a].name === content.id) {
          let ntlist =  state.data[a].notelist
          ntlist.push(content.note)      
          id = a
          temp = {
            [a]: {
              ...state.data[a],
              notelist: ntlist
            }
          }
          

          database.ref('notebook').update({
            [a]: {
              ...state.data[a],
              notelist: ntlist
            }})
    
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
