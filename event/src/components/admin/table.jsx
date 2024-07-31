import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table = ({ title, items, currentPage, itemsPerPage, totalItems, paginate, fetchAllData, allData }) => {
  const [search, setSearch] = useState('');
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    if (viewAll && allData.length === 0) {
      fetchAllData();
    }
  }, [viewAll, fetchAllData, allData.length]);

  const filteredItems = (viewAll ? allData : items).filter((item) =>
    search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
  );

  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const displayedItems = viewAll ? filteredItems : paginatedItems;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="table-section">
      <div className="table-title">
        <h2>{title}</h2>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='view-all'>
        <button onClick={() => setViewAll(!viewAll)}>
          {viewAll ? 'View Paginated ' : 'View All'}
        </button>
      </div>

      <div className="table-container">
        <table className="table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Reg No</th>
              <th>Course</th>
              <th>Hostel/Day Scholar</th>
              <th>Hostel ID</th>
              <th>Payment Screenshot</th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.length > 0 ? (
              displayedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.dob}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.regNo}</td>
                  <td>{item.course}</td>
                  <td>{item.hORd}</td>
                  <td>{item.hostelID}</td>
                  <td>
                    {item.paymentScreenshot ? (
                      <a href={item.paymentScreenshot} target="_blank" rel="noopener noreferrer">View</a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No items found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {!viewAll && (
        <div className="pagination">
          <button
            className="previous"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          ))}
          <button
            className="next"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  fetchAllData: PropTypes.func.isRequired,
  allData: PropTypes.array.isRequired,
};

export default Table;
