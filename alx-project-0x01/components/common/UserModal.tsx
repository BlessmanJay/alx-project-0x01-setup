// components/common/UserModal.tsx
import { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

export default function UserModal({ isOpen, onClose, onSubmit }: UserModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes("company.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else if (name.includes("address.geo.")) {
      const key = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.includes("address.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(),
      ...formData,
    };
    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-xl space-y-4">
        <h2 className="text-xl font-bold">Add New User</h2>

        {/* Name, Username, Email */}
        <input name="name" onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" />
        <input name="username" onChange={handleChange} placeholder="Username" className="w-full p-2 border rounded" />
        <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        
        {/* Phone, Website */}
        <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
        <input name="website" onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded" />

        {/* Company Info */}
        <input name="company.name" onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded" />

        {/* Address Info */}
        <input name="address.street" onChange={handleChange} placeholder="Street" className="w-full p-2 border rounded" />
        <input name="address.city" onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" />
        <input name="address.geo.lat" onChange={handleChange} placeholder="Latitude" className="w-full p-2 border rounded" />
        
        <div className="flex justify-end gap-3">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>Add User</button>
        </div>
      </div>
    </div>
  );
}
