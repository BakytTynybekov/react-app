import "./pagination.scss";

function Pagination({ newsPerPage, totalNews, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number, idx) => (
        <li className="pagination-item" key={idx}>
          <button className="pagination-link" onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
    </div>
  );
}

export default Pagination;
