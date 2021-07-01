import React from 'react'

export const AsideProcess = (props) => {

    const { title, process } = props;

    return (
        <ul className="nav">
            <li>
                <h4 className="aside-text">{title}</h4>
            </li>
            {process &&
                process.map((value, index) => (
                    <li key={index} className="sidebar-item" aria-haspopup="true">
                        <span>{value.title}</span>
                    </li>
                ))}
        </ul>
    );
}