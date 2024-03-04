const Search = ({ onSubmit, searchRef }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="searchTerm"
        type="text"
        ref={searchRef}
        placeholder="Search Activites."
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  )
}

export default Search
