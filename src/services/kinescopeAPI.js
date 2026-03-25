import axios from 'axios'

const API_BASE = 'https://api.kinescope.io/v1'
const TOKEN = 'e6ba2259-9732-452a-973d-b6a67d6069ca'

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
  }
})

export const getVideoDetails = (videoId) => {
  return api.get(`/videos/${videoId}`)
}

export const getHighlights = (videoId) => {
  return api.get(`/videos/${videoId}/bookmarks`)
}