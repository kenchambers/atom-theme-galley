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
  let pageURLParam = query.get("p")

  const {state,dispatch} = useStoreReducer()

  React.useEffect(()=>{

    if (pageURLParam && queryURLParam) {
      // console.log("1111111");
      const url = `https://atom-themes-gallery.onrender.com/return_search_result/?query=${queryURLParam}&?page${pageURLParam}`
      // dispatch({
      //   type: 'UPDATE_QUERY_PARAMS',
      //   queryParams: `?query=${queryURLParam}&?page${pageURLParam}`,
      // })
      // clears results for new ones
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
      console.log("222222222");

      const url = `https://atom-themes-gallery.onrender.com/return_search_result/?query=${queryURLParam}`
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
      console.log("333333333");

      const url = 'https://atom-themes-gallery.onrender.com/return_themes_list/'
      axios.get(url).then((res) =>{
        dispatch({
          type: 'FINISH_UPDATE_RESULTS',
          results: res.data,
        })
        // dispatch({
        //   type: 'UPDATE_RESULTS',
        //   results: res,
        // })
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