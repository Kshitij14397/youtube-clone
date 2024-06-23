import React from 'react';

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className="flex flex-row shadow-sm bg-gray-100 p-2 rounded-lg my-2">
            <img
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                className="w-12 h-12"
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Comment;
