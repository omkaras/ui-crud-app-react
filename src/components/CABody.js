import React, { useState, useCallback } from 'react';
import MyTable from './MyTable'

function CABody() {

    const [users, setUsers] = useState([

        {
            "userName": "v.kumar",
            "firstName": "Vinay",
            "lastName": "Kumar",
            "email": "vinay.kumar@gmail.com",
            "mobile": "9856565874"
        },
        {
            "userName": "nlondey",
            "firstName": "Nitin",
            "lastName": "Londey",
            "email": "nitin.lo@gmail.com",
            "mobile": "7898989898"
        },
        {
            "userName": "yfazwani12",
            "firstName": "Yasin",
            "lastName": "Fazwani",
            "email": "yasin.fazwani@gmail.com",
            "mobile": "7089855666"
        }
    ]);


    const deleteUser = useCallback(
        (userName) => {
            setUsers(users.filter(user => user.userName !== userName))
        },
        [users],
    )

    const updateUser = useCallback(
        (userName, updatedUser) => {
            setUsers(users.map(user => 
             {
                if(user.userName === userName){
                    return updatedUser;
                } else{
                    return user;
                }
             }    
            ))
        },
        [users],
    )

    return (
        <div>
            <MyTable
                delete={deleteUser}
                update={updateUser}
                users={users}
            />
        </div>
    )
}

export default CABody
