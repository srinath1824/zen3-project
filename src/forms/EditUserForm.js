import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>WorkItem</label>
      <input type="text" name="workItem" value={user.workItem} onChange={handleInputChange} />
      <label>Due Date</label>
      <input type="date" name="duedate" value={user.duedate} onChange={handleInputChange} />
      <label>Resources needed</label>
			<input type="text" name="resource" value={user.resource} onChange={handleInputChange} />
      <button>Update Item</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
