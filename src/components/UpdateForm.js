import React, { useState, useEffect, useCallback } from 'react'

const UpdateForm = (props) => {

    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    // const handleChange = event => {
    //     const { name, value } = event.target

    //     setUser({ ...user, [name]: value })
    // }


    return (
        <form onSubmit={(event) => {
            console.log(event.target)
            console.log(user)
            props.updateData(user.userName, user)
        }}>
            <div>
                <label>First name  </label>
                <input type="text" value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })}></input>
            </div>
            <div>
                <label>Last name  </label>
                <input type="text" value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })}></input>
            </div>
            <div>
                <label>Email  </label>
                <input type="text" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })}></input>
            </div>
            <div>
                <label>Mobile </label>
                <input type="text" value={user.mobile} onChange={e => setUser({ ...user, mobile: e.target.value })}></input>
            </div>
            <button type="submit" >Save</button>
            <button>Reset</button>
        </form>
    )
}

export default UpdateForm
