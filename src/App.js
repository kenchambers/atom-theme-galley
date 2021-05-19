import React from 'react'

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import StickyLayout from './sticky-layout'
import {  useLocation } from "react-router-dom";
import API from './api'
import { useStore, StoreContext } from './store-hook';
const api = new API()




function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {

  let query = useQuery();

  let queryURLParam = query.get("q")

  // const dispatch = useContext(DispatchContext);

  const { dispatch, state } = useStore()




  React.useEffect(()=>{
    let response = api.getSearchQuery(queryURLParam)

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
    <StoreContext>
      <div className="App">
        <StickyLayout/>
      </div>
    </StoreContext>

  );
}

export default App;










