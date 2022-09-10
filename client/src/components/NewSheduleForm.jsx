import React from 'react'

const NewSheduleForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitSchedule}>
        <div className="title-wrapper">
          <label htmlFor="scheduleName"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setScheduleName(e.target.value)}
            type="text"
            id="scheduleName"
            placeholder="Schedule Name"
            value={props.scheduleName}
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

export default NewSheduleForm
