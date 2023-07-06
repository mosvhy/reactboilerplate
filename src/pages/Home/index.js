import { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as personActions from "../../store/person/actions";
import { personCreate } from "../../utils/axios";

const Home = (props) => {
	const dispatch = useDispatch();
	const personReducer = useSelector(({ personReducer }) => personReducer);

	const handleChange = useCallback((e)=>{
		const { name, value } = e.target;
		dispatch(personActions.changeInput(name,value));
	},[dispatch])

	const handleSave = useCallback(()=>{
		personCreate(personReducer)
		.then(({ status, message, data }) => {
			alert(message)
		})
		.catch((r)=>{
			// alert(message)
		})
	},[personReducer])

	useEffect(()=>{
		dispatch(personActions.resetInput());
	},[dispatch])
	
	return (
		<Fragment>
			<div>
				<div className="form-group mb-3">
					<label className="control-label">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="form-control"
						value={personReducer.name}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label className="control-label">DOB</label>
					<input
						type="date"
						name="dob"
						placeholder="DOB"
						className="form-control"
						value={personReducer.dob}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-3">
					<span>
						{personReducer.name||'Your Name'}{' is '}
						{personReducer.age||'0'} years old and {personReducer.ageMonth||'0'} Months
					</span>
				</div>
				<div className="form-group mb-3">
					<button
						className={'btn btn-success'}
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
		</Fragment>
	)
}

export default Home;