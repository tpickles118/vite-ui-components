<script setup></script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <ul class="list-disc list-inside">
            <li><router-link to="/about">About Page</router-link></li>
            <li><router-link to="/users-api">Axios API Demo</router-link></li>
        </ul>
    </div>
</template>
