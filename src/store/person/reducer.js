const getInitialState = () => ({
	name: '',
	dob: '',
	age: 0,
	ageMonth: 0,
});
const initialState = getInitialState();

const personReducer = (state=initialState, { type, payload }) => {
	switch (type) {
		case 'person/set-inputs':
			return {
				...state,
				...payload,
			}
		case 'person/change-input':
			return {
				...state,
				[payload.name]: payload.value,
			}
		case 'person/reset-input':
			return getInitialState();
		default: 
			return state
	}
}

export default personReducer;