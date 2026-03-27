import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'John Doe',
      review: 'This product is amazing! Highly recommend.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: 'Great experience, will definitely buy again.',
      rating: 4,
    },
    {
      name: 'Alice Johnson',
      review: 'Not what I expected, but still good.',
      rating: 3,
    },
  ];

  return (
    <div className="testimonials">
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.name} - {review.rating} Stars</h3>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;