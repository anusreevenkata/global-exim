import { useEffect, useState } from "react";

function Admin() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/inquiries")
      .then((res) => res.json())
      .then((data) => setInquiries(data.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteInquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/inquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setInquiries(
          inquiries.filter((item) => item._id !== id)
        );

        alert("Inquiry Deleted Successfully");
      }
    } catch (error) {
      console.error(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">
          Admin Dashboard
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Message</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((item) => (
                <tr key={item._id} className="border-b">

                  <td className="p-3">{item.name}</td>

                  <td className="p-3">{item.email}</td>

                  <td className="p-3">{item.phone}</td>

                  <td className="p-3">{item.message}</td>

                  <td className="p-3">
                    <button
                      onClick={() =>
                        deleteInquiry(item._id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Admin;