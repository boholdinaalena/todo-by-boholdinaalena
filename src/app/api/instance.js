import axios from "axios";

export default axios.create({
  method: 'post',
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: {
    title: 'Article title',
    body:  'Article body content',
    userId: 1,
  }
})