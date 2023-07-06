import axios from "axios";

// ENDPOINTS
const personService = 'http://localhost:8001/api/v1/';
const personEndpoint = {
	get: personService + 'person-get',
	create: personService + 'person-create',
	update: personService + 'person-update',
	delete: personService + 'person-delete',
}

// DEFAULT CRUD
// create
export const personCreate = (payload) => {
	return new Promise((resolve, reject)=>{
		axios({
			url: personEndpoint.create,
			method: "POST",
			data: payload,
		})
		.then(({ status, message, data })=>{
			resolve({ status, message, data })
		})
		.catch((res)=>{
			// console.log(res)
			reject(true)
		})
	})
};

