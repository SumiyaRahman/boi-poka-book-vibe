import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();

    return (
        <div>
            {bookId}
        </div>
    );
};

export default BookDetail;