
import React, { useState, useEffect } from 'react';

export default function Fake() {
    let [post, updatepost] = useState([])
    useEffect(() => {
        const url = 'https://reqres.in/api/users';
        fetch(url).then(resp => resp.json())
            .then(resp => updatepost(resp))
    }, [])
    return <div>
        <h5 >
            {
                post.map((post) => (<div>{`${post.first_name}`}</div>))
            }
            
        </h5>
    </div>;
}
