import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

let global = 0;

const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    /**
     * its not like ref=0
     * its like ref = {current: 0}
     */
    console.log('Rendering ', ref.current);

    // useRef()
    const i = useRef(null);
    // let i = { current: null };
    useEffect(() => {
        i.current = setInterval(() => {
            console.log('Namaste React', Math.random());
        }, 1000);
    }, []);

    return (
        <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        x++;
                        console.log(x);
                    }}
                >
                    Increase x
                </button>
                <span className="font-bold text-xl">Let = {x}</span>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    Increase y
                </button>
                <span className="font-bold text-xl">State = {y}</span>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        ref.current = ref.current + 1;
                    }}
                >
                    Increase Ref
                </button>
                <span className="font-bold text-xl">Ref = {ref?.current}</span>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        global++;
                        console.log(global);
                    }}
                >
                    Increase Global
                </button>
                <span className="font-bold text-xl">Global = {global}</span>
            </div>
            <button
                className="m-2 p-2 rounded bg-red-900 text-white"
                onClick={() => {
                    clearInterval(i.current);
                }}
            >
                Stop Printing
            </button>
        </div>
    );
};

export default Demo2;
