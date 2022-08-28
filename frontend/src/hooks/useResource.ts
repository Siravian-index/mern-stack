import { useCallback, useEffect, useState } from "react"

export const useResource = <T>(endpoint: string, resourceName: string) => {

  const [resource, setResource] = useState<T[]>([]);
  // error GET
  const [error, setError] = useState('')
  const [errorPost, setErrorPost] = useState('')
  const [loading, setLoading] = useState(false);

  const addItem = useCallback(async (item: T) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      })
      if (response.ok) {
        const json = await response.json() as T
        setResource((prev) => [json, ...prev])
        setErrorPost('')
      }
    } catch (error) {
      setErrorPost(`Something went wrong while posting ${resourceName}`)
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
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadResource()
  }, [])

  return { resource, error, loading, errorPost, addItem, removeItem, updateItem }
}
