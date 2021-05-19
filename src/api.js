import faker from 'faker'
import _ from 'lodash'



// NOTE: fake data initial results
const dummyResponse = _.times(10, () => ({
    title: faker.company.companyName(),
    stars: 5,
    downloads: faker.datatype.number(),
    github_url: faker.internet.url(),
    images: [
      faker.image.people(),
      faker.image.people(),
      faker.image.people(),
    ],
}))

export default class API {
  // server URI goes here

  SERVER_API_HTTP = 'google.com'

  getSearchQuery = (queryParam = null) => {
    return dummyResponse
  }

  // getSearchQuery = async (params) => {
  //   const response = await fetch(SERVER_API_HTTP + 'get_search_query')
  //   return response
  // }

}