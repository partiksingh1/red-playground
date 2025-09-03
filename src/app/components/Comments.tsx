"use client"
import { Calendar, Clock } from "lucide-react";
import React, { useState } from "react";

interface Comment {
    id: number;
    postId: number;
    name: string;
    company: string;
    email: string;
    body: string;
}

const Comments = ({ comments }: { comments: Comment[] }) => {
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

    const sortedComments = comments.sort((a, b) => {
        return sortOrder === "newest" ? b.id - a.id : a.id - b.id;
    });

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold mb-4 md:mb-0">Comments ({comments.length})</h2>
                <div className="space-x-4 flex flex-wrap justify-center">
                    <button
                        onClick={() => setSortOrder("newest")}
                        className={`flex py-2 px-4 rounded-lg transition duration-200 ${sortOrder === "newest"
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        <span className="px-2"><Clock /></span>
                        Newest
                    </button>
                    <button
                        onClick={() => setSortOrder("oldest")}
                        className={`flex py-2 px-4 rounded-lg transition duration-200 ${sortOrder === "oldest"
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                    >
                        <span className="px-2"><Calendar /></span>
                        Oldest
                    </button>
                </div>
            </div>

            {sortedComments.map((comment) => (
                <div key={comment.id} className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                    <div className="mr-6 mb-4 md:mb-0">
                        <div className="flex items-center justify-center bg-black text-white rounded-full w-12 h-12">
                            {comment.name ? comment.name.charAt(0).toUpperCase() : ''}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between space-x-4">
                            <p className="font-semibold">{comment.name}</p>
                            <p className="text-sm text-gray-600">{comment.company}</p>
                        </div>

                        <p className="text-sm text-gray-600">{comment.email}</p>
                        <p className="mt-2 text-gray-800">{comment.body}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Comments;
