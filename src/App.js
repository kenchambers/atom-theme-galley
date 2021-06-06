import React from 'react'
import axios from 'axios'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StickyLayout from './sticky-layout'
import {  useLocation } from "react-router-dom";
import API from './api'
import { useStoreReducer, DispatchContext, StateContext } from './store-hook';
const api = new API()

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {

  let query = useQuery();

  let queryURLParam = query.get("q")

  const {state,dispatch} = useStoreReducer()

  React.useEffect(()=>{


    dispatch({
      type: 'UPDATE_QUERY_PARAMS',
      queryParams: queryURLParam,
    })

    const url = 'https://atom-themes-gallery.onrender.com/return_themes_list/'
    axios.get(url).then((res) =>{

      dispatch({
        type: 'UPDATE_RESULTS',
        results: res,
      })
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