import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fjI6rVdiRHizqmwl55L25SG8-9Uca_teSVULffcq3VQ'
    }
});


