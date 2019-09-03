import React from 'react'

const Error = ({ error }) => (
  <section className="page-error">
    <div className="page-error__box">
      <span className="page-error__box--status">{error.response.status}</span>
      <span className="page-error__box--status-text">
        {`: ${error.response.data}`}
      </span>
      <p>Whoops! Something went wrong!</p>
      <hr className="page-error__box--line" />
      <p>There was an error loading the pokedex.</p>
    </div>
  </section>
)

export default Error
