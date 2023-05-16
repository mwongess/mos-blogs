import "./App.css";

/* eslint-disable react/prop-types */
export const  BlogHeader = ({title}) => {
    return (
        <div className="header">
            <div className="logo">
                <h2>{title}</h2>
            </div>
            <div><input type="search" placeholder="Search blog"/></div>
        </div>
    )
} 