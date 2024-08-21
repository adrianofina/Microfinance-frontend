'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { TbSend } from 'react-icons/tb';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now(), role: 'user', content: input }
        ]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await axios.post('/api/bot', { message: input });
            const aiMessages = response.data.candidates.map((candidate: any, index: number) => ({
                id: index,
                role: 'ai',
                content: candidate.content.parts[0].text,
            }));

            setMessages((prevMessages) => [
                ...prevMessages,
                ...aiMessages
            ]);
        } catch (error) {
            console.error('Error fetching response:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <main className="flex-grow overflow-y-auto p-4">
                <div className="flex flex-col items-center justify-between custom-scrollbar">
                    <div className="flex flex-col space-y-4 w-full max-w-[45rem]">
                        {/* Chat Messages Container */}
                        <div className="flex flex-col space-y-2">
                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`flex gap-3 items-end ${m.role === 'user' ? 'self-end' : ''}`}
                                >
                                    {m.role === 'ai' && (
                                        <div className="flex-shrink-0">
                                            <Image
                                                src="/logo.png"
                                                height={40}
                                                width={40}
                                                className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                                                alt="Logo"
                                            />
                                        </div>
                                    )}
                                    <div
                                        className={`${
                                            m.role === 'user'
                                                ? 'bg-[#09ACBB]'
                                                : 'dark:bg-[#2b2b2b] bg-[#E2E2E2]'
                                        } p-4 rounded-e-3xl rounded-t-3xl max-w-xs flex-grow ${
                                            m.role === 'user'
                                                ? 'text-white'
                                                : 'dark:text-white text-[#000000]'
                                        }`}
                                    >
                                        <p className="text-sm lg:text-base xl:text-base">
                                            {m.content}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start gap-3 items-end">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="/logo.png"
                                            height={40}
                                            width={40}
                                            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                                            alt="Logo"
                                        />
                                    </div>
                                    <div className="max-w-md flex-grow ">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                </div>
            </main>

            {/* Chat Input Field */}
            <div className="flex justify-end w-full px-6 bg-[#21211] flex-col">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center w-full dark:bg-transparent m-auto border-[1px] dark:border-[#4E4E4E] dark:bg-[#252525] bg-[#1695a3a9] rounded-full py-[6px] pl-4 pr-4 justify-between max-w-4xl mx-auto"
                >
                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Reply conversation . . ."
                        className="w-full overflow-y-auto poppins bg-transparent outline-none border-none px-6 text-white dark:placeholder-[#828282] placeholder-[#ffffffec] resize-y disabled:cursor-not-allowed"
                        type="text"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="flex items-center justify-center text-center place-content-center disabled:cursor-progress"
                        disabled={isLoading}
                    >
                        <span className="flex justify-center items-center text-center dark:bg-[#444444] bg-[#12d3ecd5] p-2 rounded-full dark:hover:bg-[#525252] hover:bg-[#12d2ecab]">
                            <TbSend className="w-4 h-4 md:w-6 md:h-6 xl:w-6 xl:h-6 dark:text-[#00CDE3] text-white text-center" />
                        </span>
                    </button>
                </form>

                <div className="py-2 text-center md:px-10 ">
                    <div>
                        <span className="text-xs poppins font-normal text-gray-700 dark:text-gray-400 md:font-light">
                            Adriano Assistant AI Chatbot
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
