export const getNoteCategoryList = (state) => {
  const categoryArray = []
  for(let a in state.notebook.data){
    categoryArray.push(state.notebook.data[a].name)
  }
  return categoryArray
};

export const getNoteCategory = (state) => {
  return state
};

export const getNoteList = (state) => {
  
  let notesArray = {};
  for(let a in state.notebook.data){
    debugger
    notesArray = {
      ...notesArray,
      [state.notebook.data[a].name] : state.notebook.data[a].name.notelist
      
    }
  }
  return notesArray
};
