import React from 'react';
import { toast } from 'react-toastify';


const UserDetails = ({ user, refetch }) => {
    const { email, role } = user;

    const adminMake = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an Admin !')
                }

                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    refetch();
                    toast.success('Admin successfully Made !')
                }
            })
    }

    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>

            <div className='grid justify-items-center'>


                <div className='flex flex-col'>
                    <span className='text-grey-400 font-xs'>{email}</span>
                </div>
                <br />
                {role !== 'admin' && <div className='flex-shrink-0'>
                    <button onClick={adminMake} className='btn btn-secondary'>Make Admin</button>

                </div>}
                <br />
                <div className='flex-shrink-0'>
                    <button className='btn btn-error'>Remove User</button>
                </div>
            </div>



        </div>
    );
};

export default UserDetails;