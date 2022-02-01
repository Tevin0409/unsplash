import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OpEkH-8UgTDvjcZ34Xw6GvMu78xzSCR8aRASSUmQJsY'
    }
});
