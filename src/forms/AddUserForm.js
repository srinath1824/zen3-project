import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, workItem: '', duedate: '', resource: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
		console.log(user)
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.workItem || !user.duedate || !user.resource) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>WorkItem</label>
			<input type="text" name="workItem" value={user.workItem} onChange={handleInputChange} />
			<label>Due Date</label>
			<input type="date" name="duedate" value={user.duedate} onChange={handleInputChange} />
			<label>Resources needed</label>
			<input type="text" name="resource" value={user.resource} onChange={handleInputChange} />
			<button>Add workItem</button>
		</form>
	)
}

export default AddUserForm
