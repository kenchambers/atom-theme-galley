import React from 'react'
import axios from 'axios'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StickyLayout from './sticky-layout'
import {  useLocation } from "react-router-dom";
import { useStoreReducer, DispatchContext, StateContext } from './store-hook';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {

  let query = useQuery();

  let queryURLParam = query.get("q")
  let pageURLParam = query.get("p")

  const {state,dispatch} = useStoreReducer()

  React.useEffect(()=>{

    let url = 'https://atom-themes-gallery.onrender.com'

    if (pageURLParam && queryURLParam) {
      url += `/return_search_result/?query=${queryURLParam}&?page${pageURLParam}`
      dispatch({
        type: 'UPDATE_CURRENT_PAGE',
        currentPage: pageURLParam,
      })

      dispatch({
        type: 'UPDATE_QUERY_PARAMS',
        queryParams: queryURLParam,
      })

      dispatch({
        type: 'UPDATE_RESULTS',
      })
      axios.get(url).then((res)=>{
        dispatch({
          type: 'FINISH_UPDATE_RESULTS',
          results: res.data.data,
        })
        return res
      }).then((res)=>{
        dispatch({
          type: 'UPDATE_PAGE_NUMBERS',
          pageNumbers: res.data.pages
        })
      })
    } else if (queryURLParam){
      url += `/return_search_result/?query=${queryURLParam}`
      dispatch({
        type: 'UPDATE_QUERY_PARAMS',
        queryParams: queryURLParam,
      })
      dispatch({
        type: 'UPDATE_RESULTS',
      })
      axios.get(url).then((res)=>{
        dispatch({
          type: 'FINISH_UPDATE_RESULTS',
          results: res.data.data,
        })
        return res
      }).then((res)=>{
        dispatch({
          type: 'UPDATE_PAGE_NUMBERS',
          pageNumbers: res.data.pages
        })
      })
    } else {
      url += '/return_themes_list/'
      axios.get(url).then((res) =>{
        dispatch({
          type: 'FINISH_UPDATE_RESULTS',
          results: res.data,
        })
      })
    }

  },[ queryURLParam, dispatch, pageURLParam ])

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