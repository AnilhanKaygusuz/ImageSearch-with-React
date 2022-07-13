import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID eXM9ECDjVCHgfnwqBwndIiXVI89pY3dcSqkrzs_SVlk'
     }
});

