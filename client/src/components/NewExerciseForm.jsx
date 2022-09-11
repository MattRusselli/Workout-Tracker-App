import React from 'react'

const NewExerciseForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmitExercise}>
        <div className="title-wrapper">
          <label htmlFor="exerciseName"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setExerciseName(e.target.value)}
            type="text"
            id="exerciseName"
            placeholder="Flat DB Press"
            value={props.exerciseName}
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="weight"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setWeight(e.target.value)}
            type="text"
            id="weight"
            placeholder="60"
            value={props.weight}
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="sets"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setSets(e.target.value)}
            type="text"
            id="sets"
            placeholder="3"
            value={props.sets}
            required
          />
        </div>
        <div className="title-wrapper">
          <label htmlFor="reps"> </label>
          <input
            className="title-input"
            onChange={(e) => props.setReps(e.target.value)}
            type="text"
            id="reps"
            placeholder="10"
            value={props.reps}
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

export default NewExerciseForm
