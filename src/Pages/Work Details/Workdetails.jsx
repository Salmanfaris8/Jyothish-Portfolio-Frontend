import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const WorkDetails = () => {
  const { id } = useParams(); // get id from URL
  const [work, setWork] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/getallworks`);
        const foundWork = res.data.find((w) => w.id.toString() === id);
        setWork(foundWork);
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };
    fetchWork();
  }, [id]);

  if (!work) {
    return <p className="text-center mt-5">Loading work...</p>;
  }

  return (
    <div>
      <img
        src={`${import.meta.env.VITE_API_URL}${work.fullImage}`}
        alt={work.heading}
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
};

export default WorkDetails;
