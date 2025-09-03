"use client"
import Header from "./components/Header";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import { useState } from "react";
const users = [
  { id: 1, name: "John Doe", email: "john.doe@techcorp.com", company: { name: "TechCorp Solutions" } },
  { id: 2, name: "Sarah Johnson", email: "sarah.johnson@innovate.io", company: { name: "Innovate.io" } },
  { id: 3, name: "Mike Chen", email: "mike.chen@webdev.co", company: { name: "WebDev Co." } },
  { id: 4, name: "Emma Wilson", email: "emma.wilson@startup.xyz", company: { name: "StartupXYZ" } },
  { id: 5, name: "David Rodriguez", email: "david.rodriguez@agency.net", company: { name: "AgencyNet" } },
  { id: 6, name: "Lisa Park", email: "lisa.park@design.studio", company: { name: "Design Studio Pro" } },
  { id: 7, name: "Alex Thompson", email: "alex.thompson@code.works", company: { name: "CodeWorks Inc." } },
  { id: 8, name: "Maria Garcia", email: "maria.garcia@digital.hub", company: { name: "Digital Hub" } },
];

// Sample comment data (as you've provided)
const initialComments = [
  { id: 1, postId: 1, name: "John Doe", email: "john.doe@techcorp.com", body: "Thanks for sharing this! The performance improvements you mentioned are exactly what we needed for our application. The before/after benchmarks really help demonstrate the impact.", company: "TechCorp Solutions" },
  { id: 2, postId: 1, name: "Sarah Johnson", email: "sarah.johnson@innovate.io", body: "Excellent tutorial! I appreciate how you broke down complex concepts into digestible steps. The troubleshooting section at the end is particularly valuable.", company: "Innovate.io" },
  { id: 3, postId: 1, name: "Mike Chen", email: "mike.chen@webdev.co", body: "This approach saved us hours of development time. The integration was smoother than expected, and the documentation quality is outstanding. Highly recommended!", company: "WebDev Co." },
];
export default function Home() {
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = (comment: { id: number; postId: number; name: string; email: string; company: string; body: string }) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="mx-auto px-4 py-8 max-w-4xl bg-[hsl(220 20% 98%)]">
      <Header />
      <AddComment users={users} onAddComment={handleAddComment} />
      <Comments comments={comments} />
    </div>
  );
}
