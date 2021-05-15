import _ from 'lodash'
import React from 'react'
import { Search } from 'semantic-ui-react'
import faker from 'faker'


// ==============
// ENDPOINTS:
// ==============

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
}))



function SearchComponent({state, dispatch}) {
  const { loading, searchResults, searchValue } = state

  const timeoutRef = React.useRef()
  const handleSearchChange = React.useCallback((e, data) => {

    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      // api request goes here:
      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        searchResults: _.filter(source, isMatch),
      })
    }, 300)
  }, [])
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
    <Search
      loading={loading}
      onResultSelect={(e, data) =>
        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
      }
      onSearchChange={handleSearchChange}
      results={searchResults}
      value={searchValue}
    />
    </>

  )
}

export default SearchComponent