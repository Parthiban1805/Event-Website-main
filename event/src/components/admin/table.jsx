import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Table = ({ title, items, currentPage, itemsPerPage, totalItems, paginate }) => {
  console.log('Items in Table:');

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="table-section">
      <div className="table-title">
        <h2>{title}</h2>
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
            {items.map((item, index) => (
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
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          className="previous"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next
        </button>
      </div>
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
};

export default Table;
