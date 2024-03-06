const Reviews = ({ reviews }) => {
  return reviews && reviews.length > 0 ? (
    <div>
      <h3 className="reviews-title">Customer Reviews</h3>
      {reviews.map((review) => ( 
        <div className="centered-review" key={review._id}>
        <h3 className="review-content"> {review.content}</h3>
      </div>
      ))}
    </div>
    
  ) : (
    <p>No reviews available</p>
  )
}
export default Reviews
