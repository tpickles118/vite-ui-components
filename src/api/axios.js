import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content--Type': 'application/json',
    },
    timeout: 10000, // 10 seconds
})

// Request interceptor to add auth token if needed
apiClient.interceptors.request.use(
    (config) => {
        // Add auth token logic here if needed
        const token = localStorage.getItem('auth_token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor - handle errors globally
apiClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        // Handle common errors
        if (error.response?.status === 401) {
            // Redirect to login or refresh token
            console.log('Unauthorized - redirecting to login')
        }
        if (error.response?.status === 500) {
            console.error('Server error')
        }
        return Promise.reject(error)
    }
)

export default apiClient
