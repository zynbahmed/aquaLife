const Reviews = ({ reviews }) => {
  return reviews && reviews.length > 0 ? (
    <div>
      {reviews.map((review) => (
        <div key={review._id}>
          <h3>Content: {review.content}</h3>
        </div>
      ))}
    </div>
  ) : (
    <p>No reviews available</p>
  )
}
export default Reviews
