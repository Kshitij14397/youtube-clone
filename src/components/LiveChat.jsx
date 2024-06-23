import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomString } from '../utils/helper';
import { useState } from 'react';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState();
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store?.chat?.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            // API Polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: `${makeRandomString(20)} 🙏`,
                })
            );
        }, 1500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                <div>
                    {chatMessages?.map((c, i) => (
                        <ChatMessage
                            key={i}
                            name={c?.name}
                            message={c?.message}
                        />
                    ))}
                </div>
            </div>
            <form
                className="flex justify-between w-full p-2 ml-2 border border-black rounded-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: 'Kshitij Pandey',
                            message: liveMessage,
                        })
                    );
                }}
            >
                <input
                    className="w-[350px] px-2"
                    type="text"
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}
                />
                <button className="px-2 mx-2 bg-green-100 rounded-md">
                    Send
                </button>
            </form>
        </>
    );
};

export default LiveChat;
