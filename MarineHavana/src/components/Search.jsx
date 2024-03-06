const Search = ({ onSubmit, searchRef }) => {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        className="searchTerm"
        type="text"
        ref={searchRef}
        placeholder="SEARCH ACTIVITIES"
      />
      <button className="searchButton searchButton1" type="submit">
        SEARCH
      </button>
    </form>
  )
}

export default Search



