import React, { useState } from 'react'

const Listget = () => {
    const [list, setList] = useState("");
    const getData = () => {
        fetch(' http://localhost:3000/list')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setList(data);
            })
    }
    return (
        <div>
{
    
}
        </div>
    )
}

export default Listget
