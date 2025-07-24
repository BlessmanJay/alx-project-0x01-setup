import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>
      <p className="text-gray-600 mb-2">📧 {email}</p>
      <p className="text-gray-600 mb-2">📱 {phone}</p>
      <p className="text-gray-600 mb-2">🌐 {website}</p>
      <div className="mt-2 text-sm text-gray-700">
        <p>
          <strong>Company:</strong> {company.name}
        </p>
        <p>
          <strong>Address:</strong> {address.street}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
