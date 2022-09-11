import Client from './api'

export const GetExercises = async () => {
  try {
    const res = await Client.get(`/exercises/`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleSubmit = async (dayId, data) => {
  try {
    const res = await Client.post(`/exercises/${dayId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleDelete = async (dayId) => {
  try {
    const res = await Client.delete(`/exercises/${dayId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleUpdate = async (dayId, exerciseName) => {
  try {
    const res = await Client.put(`/exercises/${dayId}`, {
      exerciseName
    })
    return res.data
  } catch (error) {
    throw error
  }
}
