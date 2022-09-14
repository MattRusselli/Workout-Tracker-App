export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '9647b52f00msh221b0edd03d7c4ap1b2cf8jsnf4b63fc19b3c'
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9647b52f00msh221b0edd03d7c4ap1b2cf8jsnf4b63fc19b3c'
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
