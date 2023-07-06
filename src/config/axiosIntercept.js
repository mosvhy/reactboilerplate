import axios from "axios";

// HTTP MESSAGES
const httpMessage = (code,message) => {
	const messageList = {
		'200': 'OK',
		'401': 'UNAUTHORIZED',
		'403': 'ACCESS FORBIDDEN',
		'404': 'ROUTE NOT FOUND',
		'500': 'INTERNAL SERVER ERROR',
		'503': 'SERVICE UNAVAILABLE',
		'504': 'GATEWAY TIMEOUT',
	};
	return messageList[code] || message
}

function AxiosIntercept () {
	// INTERCEPT REQUEST
	axios.interceptors.request.use((config) => {
		switch (process.env.REACT_APP_AXIOS_ENV) {
			default:
				config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
				break;
		}
		return config;
	})

	// INTERCEPT RESPONSE
	axios.interceptors.response.use(
	  async ({ status, statusText, data }) => {
	  	return {
	  		status,
	  		statusText,
	  		message: httpMessage(status,statusText),
	  		data,
	  	};
		},
	  async (err) => {
	  	console.log('err',err)
	  	return err;
		}
	);
}

export default AxiosIntercept;