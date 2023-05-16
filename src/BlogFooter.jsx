import "./App.css";

/* eslint-disable react/prop-types */
export const  BlogFooter = ({name, date}) => {
    return (
        <div className="footer">
            <div>
                <hp>Youre logged in as <h5>{name}</h5> </hp>
            </div>
            <div>{date}</div>
        </div>
    )
} 