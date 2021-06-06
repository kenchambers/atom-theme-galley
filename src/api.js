import faker from 'faker'
import _ from 'lodash'
import axios from 'axios'

var instance = axios.create({
    baseURL: "http://localhost:3000"
  });

  // instance.get(url)
  //     .then(function(response) {
  //   })

   // axios.defaults.timeout = 1500;

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
const url = 'https://atom-themes-gallery.onrender.com/return_themes_list/'

export default class API {
  // server URI goes here

  //
  // let newdates = new Date();
  // let month = newdates.getUTCMonth() + 1
  // let day = newdates.getUTCDate()
  // let year = newdates.getUTCFullYear()
  // let currentDate = year + "-" + month + "-" + day


  contactServer = async () => {
    // let headers = new Headers()
    // headers.append("Content-Type", "application/json");




    // const res = await axios.get(url, {headers: {
    //   'Content-Encoding' : 'br',
    //   'Content-Type': 'application/json',
    //   'Referrer-Policy': 'same-origin',
    //   'Vary': 'Accept-Encoding',
    //   'X-Content-Type-Options': 'nosniff',
    //   'X-Frame-Options': 'DENY',
    //   'Transfer-Encoding': 'chunked'
    // }});

    // res.headers['content-type']; // 'text/html; charset=utf-8'




    // let body = res.data; // '... <h1>Herman Melville - Moby-D
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
    // return body

  }

  asyncFunc = async (url)=> {
  // fetch data from a url endpoint
  // const url = 'https://atom-themes-gallery.onrender.com/return_themes_list/'
  //   const response = await axios.get(url);
  //   return response.data;
  }

  getSearchQuery = (queryParam = null) => {

    //
    // let response = this.asyncFunc(url).then((response)=>{
    //   return response
    // })
    //
    // return response
    //
  }

  // getSearchQuery = async (params) => {
  //   const response = await fetch(SERVER_API_HTTP + 'get_search_query')
  //   return response
  // }

}