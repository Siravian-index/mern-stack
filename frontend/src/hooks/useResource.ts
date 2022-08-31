import { useCallback, useEffect, useState } from "react"

// it ensures that T contains and id prop
interface K {
  id?: string
}

interface IError {
  error: string
}

export const useResource = <T extends K>(endpoint: string, resourceName: string) => {
  const SUCCESS = true
  const FAILED = false

  const [resource, setResource] = useState<T[]>([]);
  // error GET
  const [error, setError] = useState('')
  const [errorPost, setErrorPost] = useState('')
  const [loading, setLoading] = useState(false);

  // CRUD operations
  const addItem = useCallback(async (item: T): Promise<boolean> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      })
      const json = await response.json() as T | IError
      if (response.ok) {
        const resource = json as T
        setResource((prev) => [resource, ...prev])
        setErrorPost('')
        return SUCCESS
      }
      const { error } = json as IError
      setErrorPost(error)
    } catch (error) {
      setErrorPost(`Something went wrong while posting ${resourceName}`)
      console.error(error)
    }
    return FAILED
  }, [])
  const removeItem = useCallback(async (id: string) => {
    try {
      const response = await fetch(`${endpoint}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const json = await response.json() as T | IError
      if (response.ok) {
        setResource((prev) => prev.filter((resource) => resource.id !== id))
        setErrorPost('')
        return
      }
      const { error } = json as IError
      setErrorPost(error)
    } catch (error) {
      setErrorPost(`Something went wrong while posting ${resourceName}`)
      console.error(error)
    }
  }, [])
  const updateItem = useCallback(async (item: T) => {
    try {
      const response = await fetch(`${endpoint}${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      const json = await response.json() as T | IError
      if (response.ok) {
        const resourceUpdated = json as T
        setResource((prev) => prev.map((resource) => resource.id === item.id ? resourceUpdated : resource))
        setErrorPost('')
        return
      }
      const { error } = json as IError
      setErrorPost(error)
    } catch (error) {
      setErrorPost(`Something went wrong while posting ${resourceName}`)
      console.error(error)
    }
  }, [])
  const loadResource = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(endpoint)
      if (response.ok) {
        const json = await response.json() as T[]
        setResource(json)
        setError('')
      }
    } catch (error) {
      setError(`Something went wrong while fetching ${resourceName}`)
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadResource()
  }, [])

  return { resource, error, loading, errorPost, addItem, removeItem, updateItem }
}
