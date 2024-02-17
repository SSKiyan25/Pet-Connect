<template>
<nav class="bg-[#6892D5] border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/pet-connect-logo.png" class="h-12" alt="Logo" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap text-[#FFFFFF]">PetConnect</span>
    </a>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#6892D5] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#6892D5] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/" class="block py-3 px-4 text-[#FFFFFF] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#344561] md:p-0 dark:text-white md:dark:hover:text-sky-400/25 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block py-3 px-4 text-[#FFFFFF] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#344561] md:p-0 dark:text-white md:dark:hover:text-sky-400/25 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</router-link>
        </li>
        <li>
          <router-link to="/contactUs" class="block py-3 px-4 text-[#FFFFFF] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#344561] md:p-0 dark:text-white md:dark:hover:text-sky-400/25 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</router-link>
        </li>
      </ul>  
    </div>
  </div>
</nav>

</template>