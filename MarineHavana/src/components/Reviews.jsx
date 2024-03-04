const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews ? (
        reviews.map((review) => (
          <div key={review._id}>
            <h3> Contant: {review.content}</h3>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  )
}
export default Reviews