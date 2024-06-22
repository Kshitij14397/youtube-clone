import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            {comment?.replies.length > 0 && (
                <div className="pl-5 border border-l-black ml-5">
                    <CommentsList comments={comment?.replies} />
                </div>
            )}
        </div>
    ));
};

export default CommentsList;
