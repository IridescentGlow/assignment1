import React from 'react';
import './GroupList.css'; 

const GroupList = () => {

    const groups = ['Group Alpha', 'Group Beta', 'Group Gamma', 'Group Delta'];

    return (
        <div className="group-list-container">
            <ul className="group-list">
                {groups.map((group, index) => (
                    <li key={index} className="group-item">
                        <img 
                            src={`/Image/PngItem_4377099-${index + 1}.png`}
                            alt={`Logo for ${group}`} 
                            className="group-image" 
                        />
                        {group}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupList;

