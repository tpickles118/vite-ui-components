import { ref } from 'vue'

export function useApi() {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const execute = async (apiCall) => {
        loading.value = true
        error.value = null
        try {
            const response = await apiCall()
            data.value = response.data
            return response.data
        } catch (err) {
            error.value = err.response?.data?.message || 'An error occurred'
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        data,
        loading,
        error,
        execute,
    }
}
