import { useCallback, useEffect, useState } from "react"
import { IError } from '../types/responseError';

export const useResource = <T>(endpoint: string, resourceName: string) => {

  const [resource, setResource] = useState<T[]>([]);
  // error GET
  const [error, setError] = useState('')
  const [errorPost, setErrorPost] = useState('')
  const [loading, setLoading] = useState(false);

  // CRUD operations
  const addItem = useCallback(async (item: T) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      })
      const json = await response.json() as T | IError
      if (response.ok && json) {
        const resource = json as T
        setResource((prev) => [resource, ...prev])
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
  const removeItem = useCallback((id: string) => {

  }, [])
  const updateItem = useCallback((item: T) => {

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
