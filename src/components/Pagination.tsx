import React from 'react';
import { PaginationProps } from '../types/Pagination';


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center mt-6">
            <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 mr-2"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Previous
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`px-4 py-2 rounded-lg focus:outline-none ${pageNumber === currentPage ? 'bg-sky-600 text-white' : 'bg-gray-300 text-gray-800'
                        }`}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                className="px-4 py-2 rounded-lg bg-gray-300 text-gray-800 ml-2"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
