import React from "react";

function Box({ box, handleClick }) {
    const onClick = () => {
        handleClick(box);
    };

    return (
        <div className={`box`} onClick={onClick}>
            <img src={box.imageUrl} alt="Random" className="box-image" />
        </div>
    );
}

export default Box;
