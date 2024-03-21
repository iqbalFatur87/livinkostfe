<template>
    <div class="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title justify-center mb-8">Login</h2>
          <p class="mb-4">Masuk sebagai :</p>
          <div class="grid grid-cols-1 grid-rows-2 gap-4 card-actions justify-end">
            <button class="btn btn-lg btn-primary">Penyewa Properti</button>
            <button class="btn btn-lg btn-primary">Pemilik Properti</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginCard'


  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  .card-title {
    font-size: 2.25rem;
  }
  </style>