import axios from 'axios';

export default axios.create({
    // baseURL:'https://2f2a-122-171-23-14.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});