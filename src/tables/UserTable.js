import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>WorkItem</th>
        <th>Due Date</th>
        <th>Resource required</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.workItem}</td>
            <td>{user.duedate}</td>
            <td>{user.resource}</td>
            <td>
            <img
              style={{ width: "30px", height: "30px" }}
              src={process.env.PUBLIC_URL + '/images/edit.jpg'}
              alt='EDIT'
              onClick={() => {
                props.editRow(user)
                }}
            />
            <img
              style={{ width: "30px", height: "30px" }}
              src={process.env.PUBLIC_URL + '/images/delete.jpg'}
              alt='DELETE'
              onClick={() => props.deleteUser(user.id)}
            />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
