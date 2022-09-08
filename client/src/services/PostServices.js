import Client from './api'

export const GetPosts = async () => {
  try {
    const res = await Client.get(`/schedules/`)
    return res.data
  } catch (error) {
    throw error
  }
}
