import "./App.css";

/* eslint-disable react/prop-types */
export const  BlogHeader = ({title}) => {
    return (
        <div className="header">
            <div className="logo">
                <h4>{title}</h4>
            </div>
        </div>
    )
} 