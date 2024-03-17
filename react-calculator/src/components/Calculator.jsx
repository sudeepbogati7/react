import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput('');
    };
    const clearAll = () => {
        setInput('');
        setResult('');
    };
    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="container flex w-2/3 flex-col bg-gray-300 justify-center items-center shadow p-10 rounded-3xl m-32">
            <h1 className="text-3xl font-semibold text-center mb-4">Calculator</h1>
            <input
                placeholder='Your input ....'
                type="text"
                className=" w-6/12  h-150 mb-2  px-4 py-2 border text-right border-gray-300 rounded-md"
                value={input}
                readOnly
            />
            <input
                placeholder='Result will appear here .....'
                type="text"
                className="w-6/12  h-150 mb-2  px-4 py-2 border text-right border-gray-300 rounded-md"
                value={result}
                readOnly
            />
            <div className="w-full flex flex-col items-center ">
                <div className="bg-white px-6 py-4 w-6/12 mx-auto shadow rounded-md flex  items-center">
                    <div className="w-full text-center mx-auto grid grid-cols-5 ">
                        <button
                            onClick={ () => handleInput('7')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            7
                        </button>
                        <button
                            onClick={ () => handleInput('8')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            8
                        </button>
                        <button
                            onClick={ () => handleInput('9')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            9
                        </button>
                        <button
                            onClick={() => clearAll()}
                            className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
                        AC
                        </button>
                        <button
                            onClick={ () => clearInput()}
                            className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline">
                            C
                        </button>

                        <button
                            onClick={ () => handleInput('4')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            4
                        </button>
                        <button
                            onClick={ () => handleInput('5')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            5
                        </button>
                        <button
                            onClick={ () => handleInput('6')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            6
                        </button>
                        <button
                            onClick={ () => {
                                clearAll();
                                if(result){
                                    handleInput(result+'*');   
                                }
                                else{
                                    handleInput('*')
                                }
            
                        }}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            *
                        </button>
                        <button
                            onClick={ () => handleInput('/')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            /
                        </button>
                        <button
                            onClick={ () => handleInput('1')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            1
                        </button>
                        <button
                            onClick={ () => handleInput('2')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            2
                        </button>
                        <button
                            onClick={ () => handleInput('3')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            3
                        </button>
                        <button
                            onClick={ () => handleInput('+')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            +
                        </button>
                        <button
                            onClick={ () => handleInput('-')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            -
                        </button>
                        <button
                            onClick={ () => handleInput('0')}
                            className=" col-span-2 border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            0
                        </button>
                        <button
                            onClick={ () => handleInput('.')}
                            className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                            .
                        </button>
                        <button
                            onClick={ () => calculateResult()}
                            className="col-span-2 border border-black-200 bg-blue-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:border-black focus:outline-none focus:shadow-outline">
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
