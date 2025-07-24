import React from "react";

const PostCard: React.FC = () => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Post Title</h2>
      <p className="text-gray-700">Post content preview...</p>
    </div>
  );
};

export default PostCard;
