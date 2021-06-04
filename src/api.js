import faker from 'faker'
import _ from 'lodash'
import axios from 'axios'

// schema
// [
//   {
//     title: 'sdfsdf',
//     stars: 2,
//     downloads: 1,
//     github_url: 'https://gay.com'
//     images: [
//       'https://killme.com',
//       'https://existanceispain.com'
//     ]
//   }
// ]


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

// const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
const url = 'https://atom-themes-gallery.onrender.com/return_themes_list'

export default class API {
  // server URI goes here

  SERVER_API_HTTP = 'google.com'

  contactServer = async () => {
    // let headers = new Headers()
    // headers.append("Content-Type", "application/json");
    const res = await axios.get(url, {headers: {
      'Access-Control-Allow-Origin' : '*',
    },responseType: 'json'});

    // res.headers['content-type']; // 'text/html; charset=utf-8'


    let body = res.data; // '... <h1>Herman Melville - Moby-D
    // console.log(body);
    // let response = await fetch(url, {
    //   method: 'GET',
    //   headers: headers,
    //   mode: 'no-cors'
    // })
    // .then((res) => {
    //   console.log(JSON.parse(res).json());
    //   // return res.json()
    // }).then((body) => {
    //   console.log("----------");
    //   console.log(body);
    //   console.log("----------");
    //
    // })

    // let body = await response.json()
    // let result = await body
    return body

  }

  getSearchQuery = (queryParam = null) => {




    return this.contactServer()
  }

  // getSearchQuery = async (params) => {
  //   const response = await fetch(SERVER_API_HTTP + 'get_search_query')
  //   return response
  // }

}