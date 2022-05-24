import React, { useEffect, useState } from 'react';

const Usetoken = user => {
    const [token, setToken] = useState('');


    useEffect(() => {


    }, [user])
    return [token]
}
export default Usetoken;