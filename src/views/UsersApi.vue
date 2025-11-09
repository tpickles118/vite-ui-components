<script setup>
import { ref, onMounted } from 'vue'
import { userService } from '@/api/services.js'

const users = ref([])
const loading = ref(false)
const error = ref(null)
const newUser = ref({ name: '', email: '' })

const fetchUsers = async () => {
    loading.value = true
    error.value = null
    try {
        const response = await userService.getAll()
        users.value = response.data
    } catch (err) {
        error.value = 'Failed to fetch users'
        console.error(err)
    } finally {
        loading.value = false
    }
}

const createUser = async () => {
    try {
        const response = await userService.create(newUser.value)
        console.log('User created:', response.data)
        alert(`User created with ID: ${response.data.id}`)
        newUser.value = { name: '', email: '' }
    } catch (err) {
        error.value = 'Failed to create user'
        console.error(err)
    }
}

onMounted(() => {
    fetchUsers()
})
</script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-6">Users (Axios Demo)</h1>

        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center">
            <span class="loading loading-spinner loading-lg"></span>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="alert alert-error mb-4">
            <span>{{ error }}</span>
        </div>

        <!-- Users List -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div v-for="user in users" :key="user.id" class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{{ user.name }}</h2>
                    <p class="text-sm">{{ user.email }}</p>
                    <p class="text-xs text-gray-500">{{ user.company.name }}</p>
                </div>
            </div>
        </div>

        <!-- Create User Form -->
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Create New User</h2>
                <form @submit.prevent="createUser">
                    <div class="form-control mb-4">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            v-model="newUser.name"
                            type="text"
                            placeholder="Enter name"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="form-control mb-4">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            v-model="newUser.email"
                            type="email"
                            placeholder="Enter email"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Create User</button>
                </form>
            </div>
        </div>
    </div>
</template>
