import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import EditWorks from "../../Components/Edit Works/EditWorks";

const Admin = () => {
  const [works, setWorks] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [fullImage, setFullImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fullImagePreview, setFullImagePreview] = useState(null);

  // Fetch all works
  const fetchWorks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/getallworks`);
      setWorks(res.data || []);
    } catch (error) {
      console.error("Failed to fetch works:", error);
      alert("Failed to load works. Please try again later.");
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  // Handle image selection & preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleFullImageChange = (e) => {
    const file = e.target.files[0];
    setFullImage(file);
    if (file) setFullImagePreview(URL.createObjectURL(file));
  };

  // Add new work
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("description", description);
    if (image) formData.append("image", image);
    if (fullImage) formData.append("fullImage", fullImage);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/addworks`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Work added successfully!");

      // Reset form
      setHeading("");
      setDescription("");
      setImage(null);
      setFullImage(null);
      setImagePreview(null);
      setFullImagePreview(null);

      // Refresh works list
      fetchWorks();
    } catch (err) {
      console.error("Error adding work:", err);
      alert(err.response?.data?.message || "Failed to add work");
    }
  };

  // Delete a work
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this work?")) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/deletework/${id}`);
      alert("Work deleted successfully!");
      fetchWorks();
    } catch (err) {
      console.error("Error deleting work:", err);
      alert("Failed to delete work");
    }
  };
  console.log(works);
  

  return (
    <div className="d-flex">
      <Sidebar isadmin={true} />

      <div className="p-4 flex-grow-1">
        <h2 className="text-center mb-4">Add Work</h2>

        <form onSubmit={handleSubmit} className="mb-5 card p-4 shadow-sm">
          <div className="mb-3">
            <label className="form-label fw-semibold">Heading</label>
            <input
              type="text"
              className="form-control"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Image</label>
              <input type="file" className="form-control" onChange={handleImageChange} />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 rounded"
                  style={{ width: "120px", height: "80px", objectFit: "cover" }}
                />
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Full Image</label>
              <input type="file" className="form-control" onChange={handleFullImageChange} />
              {fullImagePreview && (
                <img
                  src={fullImagePreview}
                  alt="Full Preview"
                  className="mt-2 rounded"
                  style={{ width: "80px", height: "120px", objectFit: "cover" }}
                />
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Add Work
          </button>
        </form>

        <h2 className="text-center mb-3">All Works</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead className="table-light text-center">
              <tr>
                <th>#</th>
                <th>Heading</th>
                <th>Description</th>
                <th>Image</th>
                <th>Full Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {works.length > 0 ? (
                works.map((work, index) => (
                  <tr key={work._id || index}>
                    <td className="text-center">{index + 1}</td>
                    <td>{work.heading}</td>
                    <td>{work.description}</td>
                    <td className="text-center">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${work.image}`}
                        alt={work.heading}
                        style={{ width: "100px", height: "70px", objectFit: "cover" }}
                      />
                    </td>
                    <td className="text-center">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${work.fullImage}`}
                        alt={work.heading}
                        style={{ width: "60px", height: "100px", objectFit: "cover" }}
                      />
                    </td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <EditWorks work={work} fetchWorks={fetchWorks} />
                        <button
                          className="btn btn-sm btn-danger mb-3"
                          onClick={() => handleDelete(work.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted py-3">
                    No works found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
