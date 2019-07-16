import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const usersData = []

	const initialFormState = { id: null, workItem: '', duedate: '', resource: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		console.log(user);
		user.id = users.length + 1
		setUsers([ ...users, user ])
		localStorage.setItem('userData', users);
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
		localStorage.setItem('userData', users);
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)));
		localStorage.setItem('userData', users);
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, workItem: user.workItem, duedate: user.duedate, resource: user.resource })
		localStorage.setItem('userData', users);
	}

	return (
		<div className="container">
			<a
            style={{
              display: "inline-block",
              top: "8px",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            <h4>The Workitem</h4>
          </a>
          <a
            style={{
              display: "inline-block",
              right: "400px",
              position: "absolute",
              padding: "10px",
              textDecoration: "none"
            }}
            href="/"
          >
            <h5>Number of work item:{users.length}</h5>
			<button>Upload to google spreadsheet</button>
			<br/>
          </a>
		  
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add new Item</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Items</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
