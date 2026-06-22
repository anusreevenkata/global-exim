import { useEffect, useState } from "react";

function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  useEffect(() => {
    fetch("https://global-exim-backend.onrender.com/api/inquiries")
      .then((res) => res.json())
      .then((data) => setInquiries(data.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteInquiry = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;

    try {
      const response = await fetch(
        `https://global-exim-backend.onrender.com/api/inquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        setInquiries(
          inquiries.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditMessage(item.message);
  };

  const saveEdit = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/inquiries/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: editMessage,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setInquiries(
          inquiries.map((item) =>
            item._id === id
              ? { ...item, message: editMessage }
              : item
          )
        );

        setEditingId(null);
      }
    } catch (error) {
      console.error(error);
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

                  <td className="p-3">
                    {editingId === item._id ? (
                      <input
                        value={editMessage}
                        onChange={(e) =>
                          setEditMessage(e.target.value)
                        }
                        className="border p-2 w-full"
                      />
                    ) : (
                      item.message
                    )}
                  </td>

                  <td className="p-3 flex gap-2">

                    {editingId === item._id ? (
                      <button
                        onClick={() =>
                          saveEdit(item._id)
                        }
                        className="bg-green-500 text-white px-3 py-2 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          startEdit(item)
                        }
                        className="bg-yellow-500 text-white px-3 py-2 rounded"
                      >
                        Edit
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteInquiry(item._id)
                      }
                      className="bg-red-500 text-white px-3 py-2 rounded"
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