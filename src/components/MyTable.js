import React, { useState, useCallback } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import UpdateForm from './UpdateForm';


export default function MyTable(props) {

  const emtpyUser = {userName:"", firstName:"", lastName:""}

  const tableStyles = useStyles();
  const [currentUser, setCurrentUser] = useState(emtpyUser);
  const [updateFlag, setUpdateFlag] = useState(false);

  const performUpdateOptions = useCallback(
    (user) => {
      setCurrentUser({
        userName: user.userName, 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile
      });
      setUpdateFlag({updateFlag:true})
    },
    [currentUser, updateFlag],
  )

  return (
    <div>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <td>Username</td>
            <td>First name</td>
            <td>Last name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {
            props.users.map(user => (
              <tr key={user.userName}>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Button className={tableStyles.button} onClick={() => performUpdateOptions(user)}>Update</Button>
                </td>
                <td>
                  <Button className={tableStyles.button} onClick={() => props.delete(user.userName)}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <div>
        { updateFlag?
          <UpdateForm 
          updateData = {props.update}
          currentUser = {currentUser}
          />
          :<div></div>
        }
      </div>
    </div>

  );
}

const useStyles = makeStyles({
  table: {
    maxWidth: 1000,
    marginLeft: "10px",
    thead: {
      backgroundColor: "white",
      color: "yellow",
      border: "1px solid black",
      padding: "8px",
    },
    tbody: {
      fontSize: 14,
      border: "1px solid black",
      padding: "8px",
    },
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 33,
    width: 100,
    padding: '0 30px',

  }
});