import axios from 'axios';

const api = axios.create({
	// baseURL: 'http://10.0.2.2:3333', // AndroidStudio
	baseURL: 'http://10.0.3.2:3333', //Genymotion
});

export default api;
