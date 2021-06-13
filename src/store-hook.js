// USAGE:

// first wrap top most component with :,
// then inside the same file do this:

// this will instantiate state and pass the store into the context
// import { useStoreReducer } from './store-hook';

// const {state,dispatch} = useStoreReducer()

// <DispatchContext.Provider value={dispatch}>
//   <StateContext.Provider value={state}>
//   <div className="App">
//     ...
//   </div>
// </StateContext.Provider>
// </DispatchContext.Provider>

// and then in your components use the hook :
// first import :

// import { useStoreContext } from './store-hook';
// const {state } = useStoreContext()
// this will give you the state of the store

// IF you want to dispatch an action do this in your component:

// import { useStoreReducer } from './store-hook';
// const {state,dispatch} = useStoreReducer()


// React.useEffect(()=>{
//   let response = api.getSearchQuery(queryURLParam)
//
//   dispatch({
//     type: 'UPDATE_QUERY_PARAMS',
//     queryParams: queryURLParam,
//   })
//
//   dispatch({
//     type: 'UPDATE_RESULTS',
//     results: response,
//   })
// },[ queryURLParam, dispatch ])




// thx https://hswolff.com/blog/how-to-usecontext-with-usereducer/
// We won't be able to rely on only state changing to cause consuming
// components to re-render, we also have to worry about App re-rendering
// causing consuing components to re-render as well.
// SOLUTION: make two separate contexts and have each provide state and dispatch independently.

// const StateContext = createContext();
// const DispatchContext = createContext();


import React, {useContext, useReducer} from 'react'




const initialState = {
  loading: false,
  searchResults: [],
  searchValue: '',
  pageResults:[],
  results: [],
  queryParams: null,
  pageNumbers: [1],
  currentPage: 1,
}

function Reducer(state, action) {

  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, searchValue: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, searchResults: action.searchResults }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }
    case 'UPDATE_RESULTS':
      return { ...state, results: []}
    case 'UPDATE_PAGE_NUMBERS':

      return { ...state, pageNumbers: action.pageNumbers}
    case 'UPDATE_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage}
    case 'FINISH_UPDATE_RESULTS':
      return { ...state, results: action.results}
    case 'UPDATE_QUERY_PARAMS':
      return { ...state, queryParams: action.queryParams }
    default:
      throw new Error()
  }
}


export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export const useStoreReducer = function () {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return { dispatch, state }

}

export const useStoreContext = function () {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext)

  return { state, dispatch }
}


