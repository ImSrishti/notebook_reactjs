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
  
  let notesArray = []
  for(let a in state.notebook.data){
    if(state.notebook.data[a].name=="abc"){
      notesArray = state.notebook.data[a].notelist
    }
  }
  debugger
  return notesArray
};
