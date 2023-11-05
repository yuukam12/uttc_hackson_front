import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://127.0.0.1:8080',
})

export async function getItems(category: string, keyword?: string) {
  try {
    const params = keyword ? { category, keyword } : { category }
    const response = await Api.get('/content', { params })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function getContent(id: string) {
  try {
    const response = await Api.get(`/content/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export async function updateContent(
  id: string,
  title: string,
  description: string,
) {
  try {
    await Api.put(`/content/${id}/`, {
      title: title,
      description: description,
    })
    console.log(description)
  } catch (error) {
    throw error
  }
}

export async function deleteItem(id: string) {
  try {
    await Api.delete(`/content/${id}/`)
    console.log('Itemを削除しました')
  } catch (error) {
    throw error
  }
}

export async function postItem(
  title: string,
  url: string,
  uploaded_by: string,
  category: string,
  media: string,
  description?: string,
  image?: Blob,
) {
  try {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('url', url)
    formData.append('uploaded_by', uploaded_by)
    formData.append('category', category)
    formData.append('media', media)
    if (description) {
      formData.append('description', description)
    }
    if (image) {
      formData.append('image', image)
    }

    await Api.post('/content/', formData)
  } catch (error) {
    throw error
  }
}
