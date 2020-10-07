import React from 'react'

const Search = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <form onSubmit={props.handleSubmit} className="input-field">
            <input type="text" placeholder="search movie" onChange={props.handleChange}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
