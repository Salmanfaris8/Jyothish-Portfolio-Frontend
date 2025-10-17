import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`);
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to fetch contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="d-flex">
      <Sidebar isadmincontact={true} />

      <div className="p-4 flex-grow-1">
        <h2>All Contacts</h2>
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr> 
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact,index) => (
                  <tr key={contact.id}>
                    <td>{index+1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No contacts found.
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

export default AdminContacts;
