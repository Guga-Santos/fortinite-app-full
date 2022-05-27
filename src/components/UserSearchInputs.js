import React, { useContext } from 'react';
import FortniteContext from '../context/FortniteContext';
import getStats from '../services/getStats';
import userFetch from '../services/userFetch';
import "./UserSearchInput.css";

export default function UserSearchInputs() {
    const context = useContext(FortniteContext);
    const {  
        users,
        setUsers,
        setUsersDataOne,
        setUsersDataTwo,
        setLoading,
     } = context;
    const { userOne, userTwo } = users;
    // const { dataOne, dataTwo } = userData;

    const handleClick = async () => {
        setLoading(true);
        const getUserOne = await userFetch(userOne);
        const dataOneInfo = await getStats(getUserOne);
        const getUserTwo = await userFetch(userTwo);
        const dataTwoInfo = await getStats(getUserTwo);

        setUsersDataOne(dataOneInfo)
        setUsersDataTwo(dataTwoInfo)

        setUsers({userOne: "", userTwo: ""})
        setLoading(false);
    }
    
    return(
        <div className='userInputs-Container'>
            <label className='label' htmlFor="userOne">
                User-One:
                <input 
                id='userOne'
                type="text"
                value={userOne}
                placeholder="Insert username"
                onChange={ (e) => setUsers({...users, userOne: e.target.value})}
                />
            </label>
            <label className='label' htmlFor="userTwo">
                User-Two:
                <input 
                id='userTwo'
                type="text"
                value={userTwo}
                placeholder="Insert username"
                onChange={ (e) => setUsers({...users, userTwo: e.target.value})}
                />
            </label>
            <button 
            className='compare-btn'
            type='button'
            onClick={ () => handleClick()}
            >
                Compare!
            </button>
            <span className='compare-btn-shadow' />
        </div>
    )
}