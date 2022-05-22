
import { useEffect, useState } from 'react';

const UseToolsDetails = (_id) => {
    const [tools, setTools] = useState({})

    useEffect(() => {


        fetch(`http://localhost:5000/tools/${_id}`)

            .then(res => res.json())
            .then(data => setTools(data))

    }, [_id])

    return [tools, setTools]

};

export default UseToolsDetails;