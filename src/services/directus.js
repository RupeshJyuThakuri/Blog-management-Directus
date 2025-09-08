import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const DIRECTUS_URL = process.env.DIRECTUS_URL

const getApiUrl = path => `${DIRECTUS_URL}${path}`

export async function getAllBlog() {
    try {
        const query = new URLSearchParams({
          fields: "id, Title, Content, Date, Author, slug, image",
          sort: "-Date",
        }).toString();

        const res = await fetch(getApiUrl(`/items/Blog?${query}`))

        if (!res.ok) {
            throw new Error(`Directus fetching error ${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        
        return data.data;

    } catch (error) {
        console.error('Directus error', error)
    }
}
export async function getBlogBySlug(slug) {
    try {
        const query = new URLSearchParams({
            fields: "id, Title, Content, Date, Author, slug, image",
            filter: JSON.stringify({ slug: { _eq: slug } })
        }).toString()

        const res = await fetch(getApiUrl(`/items/Blog?${query}`))

        if (!res.ok) {
            throw new Error(`Directus fetching error ${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        if (data.data) {
            return data.data[0]
        } else {
            
            return null;
        }

    } catch (error) {
        console.error('Directus error', error)
    }
}