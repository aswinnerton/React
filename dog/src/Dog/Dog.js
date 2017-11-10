import React from 'react';



const Dog = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.age}
            </td>
            <td>
                {props.breed}
            </td>
        </tr>
    )
};

export default Dog;