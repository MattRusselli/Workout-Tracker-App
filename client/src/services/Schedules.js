import Client from './api'

export const GetSchedules = async (userId) => {
  try {
    const res = await Client.get(`/schedules/userid/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleSubmit = async (userId, data) => {
  try {
    const res = await Client.post(`/schedules/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleDelete = async (userId) => {
  try {
    const res = await Client.delete(`/schedules/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const handleUpdate = async (userId, scheduleName) => {
  try {
    const res = await Client.put(`/schedules/${userId}`, {
      scheduleName
    })
    return res.data
  } catch (error) {
    throw error
  }
}
