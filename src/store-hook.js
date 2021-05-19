// USAGE:

// first import :

// import { useStore, StoreContext } from './store-hook';


// first wrap top most component with :

// <StoreContext>
//  <App/>
// </StoreContext>

// and then in your components use the hook :

// const {state,dispatch} = useStore()



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
    console.log("UPDATE RESULTS FIRING");
    // FOR SOME REASON STORE IS NOT FIRING DISPATCH

      return { ...state, results: action.results }
    case 'UPDATE_QUERY_PARAMS':
      console.log("UPDATE QUERY PARAMS FIRING")
      return { ...state, queryParams: action.queryParams }

    default:
      throw new Error()
  }
}

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState)



  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
      {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export class StoreContext extends React.Component {

    render() {
        return (
            <Store>
              {this.props.children}
              {/* {React.cloneElement(this.props.children)} */}
            </Store>
        )
    }
}




export const useStore = function () {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // STOPPED HERE FOR SOME REASON DISPATCH IS NOT TRIGGERING OUR REDUCEr
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext)


  if (state && dispatch) {
    return { dispatch, state }
  } else {
    return { dispatch: ()=>{}, state: {}}
  }

}

