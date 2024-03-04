const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id}>
            <h3> Contant: {review.content}</h3>
          </div>
        ))
      )}
    </div>
  )
}
export default Reviews