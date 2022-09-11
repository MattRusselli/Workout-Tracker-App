import React from 'react'

const NewDayForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitDay}>
        <div className="title-wrapper">
          <label htmlFor="dayOfWeek"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setDayOfWeek(e.target.value)}
            type="text"
            id="dayOfWeek"
            placeholder="Monday"
            value={props.dayOfWeek}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create
        </button>
      </form>
    </div>
  )
}

export default NewDayForm
