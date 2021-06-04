import React from 'react'

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StickyLayout from './sticky-layout'
import {  useLocation } from "react-router-dom";
import API from './api'
import { useStoreReducer, DispatchContext, StateContext, useStoreContext } from './store-hook';
const api = new API()

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {

  let query = useQuery();

  let queryURLParam = query.get("q")

  const {state,dispatch} = useStoreReducer()

  React.useEffect(()=>{
    let response = api.getSearchQuery(queryURLParam)
    // let response = async function(){
    //   let body = await api.getSearchQuery(queryURLParam)
    //   console.log("________________");
    //     console.log(body);
    //     console.log("________________");
    //
    // }
    //
    //

    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      queryParams: queryURLParam,
    })

    dispatch({
      type: 'UPDATE_RESULTS',
      results: response,
    })
  },[ queryURLParam, dispatch ])

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
      <div className="App">
        <StickyLayout/>
      </div>
    </StateContext.Provider>
  </DispatchContext.Provider>

  );
}

export default App;