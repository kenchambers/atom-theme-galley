// import _ from 'lodash'
import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
// import faker from 'faker'
import { useHistory } from "react-router-dom";
import {  useStoreReducer } from './store-hook';


// ==============
// ENDPOINTS:
// ==============
// NOTE: fake data initial results

// const source = _.times(10, () => ({
//     title: faker.company.companyName(),
//     stars: 5,
//     downloads: faker.datatype.number(),
//     github_url: faker.internet.url(),
//     images: [
//       faker.image.people(),
//       faker.image.people(),
//       faker.image.people(),
//     ],
// }))


function SearchComponent() {

  const {state,dispatch} = useStoreReducer()


  let history = useHistory();

  const { searchValue } = state

  const handleSearchChange = (e) => {
    dispatch({ type: 'START_SEARCH', query: e.target.value })
  }


  const onSubmit = (e) => {
    // async request goes here
    if (e.key === 'Enter') {
      history.push(`/?q=${searchValue}`)
      // console.log("CHEEB");
      // onSubmit()
    }
  }

  return (
    <Input icon placeholder='Search...' style={{padding: 10, backgroundColor: '#848C8E'}}>
      <input size="massive" value={searchValue} onChange={handleSearchChange} onKeyPress={onSubmit}/>
      <Icon onClick={onSubmit} name='search' />
    </Input>
  )
}

export default SearchComponent