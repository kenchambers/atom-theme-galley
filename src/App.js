import React from 'react'
import _ from 'lodash'

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StickyLayout from './sticky-layout'
import faker from 'faker'


// ==============
// ENDPOINTS:
// ==============


// NOTE: fake data initial results
const source = _.times(10, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  images: [
    faker.image.fashion(),
    faker.image.nightlife(),
    faker.image.people(),
  ]

}))


const initialState = {
  loading: false,
  searchResults: [],
  searchValue: '',
  pageResults:[],
  results: [],
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      console.log("START_SEARCH");
      return { ...state, loading: true, searchValue: action.query }
    case 'FINISH_SEARCH':
    console.log("FINISH");
      return { ...state, loading: false, searchResults: action.searchResults }
    case 'UPDATE_SELECTION':
    console.log("UPDATE");
      return { ...state, value: action.selection }
    case 'UPDATE_RESULTS':
      return { ...state, results: action.results }

    default:
      throw new Error()
  }
}



function App() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)

  React.useEffect(()=>{
    console.log("yo");

    dispatch({
      type: 'UPDATE_RESULTS',
      results: source,
    })
  },[])

  return (
    <div className="App">
      <StickyLayout state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;










