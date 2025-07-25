import Header from "@/components/layout/Header";
// pages/users/index.tsx
import { useState } from "react";
import { GetStaticProps } from "next";
import { UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-3xl mb-4">Users Page</h1>
    </div>
  );
};

interface UsersProps {
  posts: UserData[];
}

export default function Users({ posts }: UsersProps) {
  const [users, setUsers] = useState(posts);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Add User
        </button>
      </div>

      <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
};

export default UsersPage;
