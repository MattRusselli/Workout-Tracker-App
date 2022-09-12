import Client from './api'

export const GetDays = async (scheduleId) => {
  try {
    const res = await Client.get(`/days/${scheduleId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleSubmit = async (scheduleId, data) => {
  try {
    const res = await Client.post(`/days/${scheduleId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleDelete = async (scheduleId) => {
  try {
    const res = await Client.delete(`/days/${scheduleId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleUpdate = async (scheduleId, dayOfWeek) => {
  try {
    const res = await Client.put(`/days/${scheduleId}`, {
      dayOfWeek
    })
    return res.data
  } catch (error) {
    throw error
  }
}
