import { useCallback, useEffect, useState } from "react"

export const useResource = <T>(endpoint: string, resourceName: string) => {

  const [resource, setResource] = useState<T[]>([]);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const addItem = useCallback(async (item: T) => {
    try {
      setLoading(true)
      const response = await fetch(endpoint, {
        headers: {},
        body: JSON.stringify(item),
      })
      if (response.ok) {
        const json = await response.json() as T
        setResource((prev) => [...prev, json])
      }
    } catch (error) {
      setError(`Something went wrong while posting ${resourceName}`)
    } finally {
      setLoading(false)
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

  return { resource, error, loading, addItem, removeItem, updateItem }
}
