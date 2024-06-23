import React from 'react';
import CommentsList from './CommentsList';

const commentsData = [
    {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
        replies: [
            {
                name: 'Akshay Saini',
                text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                replies: [
                    {
                        name: 'Akshay Saini',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                        replies: [],
                    },
                    {
                        name: 'Akshay Saini',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                        replies: [],
                    },
                    {
                        name: 'Akshay Saini',
                        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                        replies: [],
                    },
                ],
            },
            {
                name: 'Akshay Saini',
                text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                replies: [],
            },
            {
                name: 'Akshay Saini',
                text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                replies: [],
            },
            {
                name: 'Akshay Saini',
                text: 'Lorem ipsum dolor sit amet, consectetuer adip',
                replies: [],
            },
        ],
    },
    {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
        replies: [],
    },
    {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
        replies: [],
    },
    {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
        replies: [],
    },
    {
        name: 'Akshay Saini',
        text: 'Lorem ipsum dolor sit amet, consectetuer adip',
        replies: [],
    },
];

const CommentsContainer = () => {
    return (
        <div className="mt-5 pl-2 ml-4 w-[1050px]">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
