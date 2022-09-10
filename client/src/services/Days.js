import Client from './api'

export const GetDays = async () => {
  try {
    const res = await Client.get(`/days/`)
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

export const handleUpdate = async (scheduleId, scheduleName) => {
  try {
    const res = await Client.put(`/days/${scheduleId}`, {
      scheduleName
    })
    return res.data
  } catch (error) {
    throw error
  }
}
