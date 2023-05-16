import "./App.css";

/* eslint-disable react/prop-types */
export const  BlogFooter = ({name, date}) => {
    return (
        <div className="footer">
            <div>
                <p>{name}</p>
            </div>
            <div>{date}</div>
        </div>
    )
} 