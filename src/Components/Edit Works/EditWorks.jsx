import React, { useState, useEffect } from "react";
import axios from "axios";

const EditWorks = ({ work, fetchWorks }) => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [fullImage, setFullImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fullPreview, setFullPreview] = useState(null);

  useEffect(() => {
    if (work) {
      setHeading(work.heading || "");
      setDescription(work.description || "");
      setPreview(work.image ? `${import.meta.env.VITE_API_URL}${work.image}` : null);
      setFullPreview(work.fullImage ? `${import.meta.env.VITE_API_URL}${work.fullImage}` : null);
      setImage(null);
      setFullImage(null);
    }
  }, [work]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleFullImageChange = (e) => {
    const file = e.target.files[0];
    setFullImage(file);
    setFullPreview(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    if (!heading || !description) {
      alert("Heading and description are required");
      return;
    }

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("description", description);
    if (image) formData.append("image", image);
    if (fullImage) formData.append("fullImage", fullImage);

    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/updatework/${work.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Work updated successfully!");
      fetchWorks()
      // onUpdated(res.data.work);
      const modalEl = document.getElementById(`editWorkModal-${work.id}`);
      const modal = window.bootstrap.Modal.getInstance(modalEl);
      modal.hide();
    } catch (err) {
      console.error(err);
      alert("❌ Error updating work");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success mb-3"
        data-bs-toggle="modal"
        data-bs-target={`#editWorkModal-${work.id}`}
      >
        Edit
      </button>

      <div className="modal fade" id={`editWorkModal-${work.id}`} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Work</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label fw-bold">Heading</label>
                <input type="text" className="form-control" value={heading} onChange={(e) => setHeading(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Description</label>
                <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Image</label>
                <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
                {preview && <img src={preview} alt="preview" className="img-fluid mt-2" style={{ maxHeight: "100px" }} />}
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Image</label>
                <input type="file" className="form-control" accept="image/*" onChange={handleFullImageChange} />
                {fullPreview && <img src={fullPreview} alt="full preview" className="img-fluid mt-2" style={{ maxHeight: "100px" }} />}
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditWorks;
