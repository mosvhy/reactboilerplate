import moment from "moment";

export const setInput = (payload) => (dispatch,state) => {
	dispatch({ type: "person/set-inputs", payload });
}
export const changeInput = (name,value) => (dispatch) => {
	if (name === 'dob') {
		const payload = {
			dob: value,
			age: moment().diff(value,'years'),
			ageMonth: moment().diff(value,'months')%12,
		}
		dispatch(setInput(payload));
	}
	else {
		dispatch({
			type: "person/change-input",
			payload: { name, value }
		})
	}
}
export const resetInput = () => (dispatch) => {
	dispatch({ type: "person/reset-input" })
}