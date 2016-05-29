//State argument is NOT application state, but
//rather ONLY the state which the reducer is
//responsible for!
export default function(state = null,action){
  //--------------------------^------ When the app loads, the state will
  //initially be undefined. state = null is es6 for give it a default value
  // of null if its undefined
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
};

//this function gets called over and over and over again.
//by default, we want to return the previous state flowing
//into the function.
