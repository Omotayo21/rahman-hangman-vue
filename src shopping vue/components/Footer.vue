<template>
    <div class="">
       <footer class="bg-gray-900  mt-12">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <router-link to="/about" href="#" class=" hover:underline">About</router-link>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brands</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Whatsapp</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                <router-link  to="/contact" class="hover:underline">Contact Us</router-link>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Download App</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>

    </div>
    <br/><br/>
    <div className="sm:ml-8 absolute right-4 -mt-20 ">
        <h3 className="text-white">Subscribe to our Newsletter</h3>
       <input className="mr-0 mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block lg:w-72 sm:w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email adress..."  />
            <button className=' lg:mt-1 sm:mt-1 lg:ml-44 text-white bg-blue-600 hover:bg-primary-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700  dark:focus:ring-primary-800" pr-5 cursor:pointer '>Subscribe</button>
      </div>
      <br/>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between mt-8">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 RAHMAN™. All Rights Reserved.
        </span>
       
      </div>

    </div>
</footer> 
    </div>
</template>