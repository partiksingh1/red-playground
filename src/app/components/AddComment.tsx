"use client"
import { MessageCircleIcon, SendHorizonal } from "lucide-react";
import React, { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

interface Comment {
    id: number;
    postId: number;
    name: string;
    company: string;
    email: string;
    body: string;
}

const AddComment = ({ users, onAddComment }: { users: User[], onAddComment: (comment: Comment) => void }) => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [comment, setComment] = useState<string>("");

    const handlePostComment = () => {
        if (selectedUser && comment) {
            const newComment: Comment = {
                id: Date.now(),  // Unique id based on timestamp
                postId: 1,       // Assuming the postId is always 1 for simplicity
                name: selectedUser.name,
                email: selectedUser.email,
                company: selectedUser.company.name,
                body: comment,
            };
            onAddComment(newComment);
            setComment("");  // Reset comment field after posting
        }
    };

    return (
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-10">
            <div className="flex items-center gap-2 mb-4 p-1">
                <MessageCircleIcon size={25} className="text-blue-600" />
                <h3 className="text-lg font-semibold">Add a Comment</h3>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Choose a user to comment as</label>
                <select
                    onChange={(e) => setSelectedUser(users.find((user) => user.id === +e.target.value) || null)}
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Your Comment</label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={4}
                    placeholder="Write your comment here..."
                    className="w-full p-2 mt-1 border border-gray-300 rounded-lg"
                />
            </div>

            <button
                onClick={handlePostComment}
                className="flex w-full sm:w-1/5 py-2 px-4 bg-blue-500 text-white rounded-md justify-center hover:bg-blue-400 transition duration-200 text-sm"
            >
                <span className="px-1">
                    <SendHorizonal size={20} />
                </span>
                Post Comment
            </button>
        </section>
    );
};

export default AddComment;
