import React, { useEffect, useState } from "react";
import Table from "./table";
import "./adminpage.css";

const AdminPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [reservationDetails, setReservationDetails] = useState([]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://event-website-main.onrender.com/table`);
        const data = await response.json();
        console.log("Full API Response:"); 

        if (response.ok) {
          if (Array.isArray(data)) {
            console.log("Data fetched successfully");
            setReservationDetails(data);
          } else {
            console.error("Unexpected data format:", JSON.stringify(data, null, 2));
          }
        } else {
          console.error("API Error:", data.error);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reservationDetails.slice(indexOfFirstItem, indexOfLastItem);

  // console.log("Reservation Details:", reservationDetails); 
  // console.log("Current Items:", currentItems); 

  return (
    <div className="admin-page-container">
      <div className="admin-page-header">
        <p>Admin Dashboard</p>
      </div>
      <div className="admin-page-content">
        <div className="admin-page-reservation-details">
          <Table
            title="Registration details"
            items={currentItems}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={reservationDetails.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
