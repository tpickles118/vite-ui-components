<script setup></script>

<template>
    <div class="container mx-auto p-8">
        <h1 class="text-4xl font-bold mb-4">Welcome to Daisy Component Tests</h1>
        <ul class="list-disc list-inside">
            <li><router-link to="/about" class="link link-hover">About Page</router-link></li>
            <li><router-link to="/users-api" class="link link-hover">Axios API Demo</router-link></li>
            <li><router-link to="/badge-view" class="link link-hover">Daisy Badge Tests</router-link></li>
            <li><router-link to="/alert-view" class="link link-hover">Daisy Alert Tests</router-link></li>
            <li><router-link to="/toast-view" class="link link-hover">Daisy Toast Tests</router-link></li>
        </ul>
    </div>
</template>
