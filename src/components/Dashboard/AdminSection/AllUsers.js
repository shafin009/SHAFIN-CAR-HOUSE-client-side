import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Hooks/Loading';
import UserDetails from './UserDetails';


const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>

    }

    return (
        <div>
            <h1 className='text-center text-gray-500 text-3xl'> All USER- {users.length}</h1>
            <br />
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-items-center'>

                {
                    users.map(user => <UserDetails

                        key={user._id}
                        user={user}
                        refetch={refetch}

                    ></UserDetails>)
                }
            </div>

        </div>
    );
};

export default AllUsers;