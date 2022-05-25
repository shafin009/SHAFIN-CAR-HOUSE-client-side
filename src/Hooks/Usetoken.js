import { useEffect, useState } from 'react';

const UseToken = user => {




    const [token, setToken] = useState('');


    useEffect(() => {
        const email = user?.user?.email;
        const newUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {

                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(newUser)
            })
                .then((res) => res.json())
                .then((data) => {

                    console.log('data inside useToken', data);

                    const tokenAccess = data.token;
                    localStorage.setItem('accessToken', tokenAccess)
                    setToken(tokenAccess)
                })
        }

    }, [user]);
    return [token];
}
export default UseToken;