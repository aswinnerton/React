import React from 'react';
import close from '../close.svg';



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
            <td>
            <img src={close} className="App-close" alt="close" />
                </td>
        </tr>
    )
};

export default Dog;