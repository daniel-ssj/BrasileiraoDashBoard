import React from 'react'

const Pagination = ({ matchesPerPage, totalMatches, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalMatches / matchesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='list-group list-group-horizontal d-flex flex-row justify-content-between'>
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className='list-group-item bg-primary rounded'
          >
            <a className='text-white text-decoration-none'>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
