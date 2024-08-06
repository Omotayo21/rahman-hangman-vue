<script setup>
</script>
<template>
    <div className="">

<section class="bg-white mt-36 ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-700 ">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-blue-700 sm:text-xl">Got an issue? Want to send feedback about a your cart? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-700">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-700">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-black dark:placeholder-black dark:texT-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-700">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-black dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>

<h2 className=" text-blue-600 font-bold ml-8"> You can reach out to us on our social media handles below:</h2>
<ul className="ml-8">
   <div><li> <WhatsappLogo size={24} className="bg-green-600 text-white"/> Whatsapp: 09076930901 </li></div> 
    <li><TwitterLogo size={24} className="bg-blue-500 text-white" /> Twitter: @rahman_rufai</li>
    <li><Envelope size={24} className="text-red-500 bg-white" /> Gmail: rufaiabdulrahman21@gmail.com</li>
    <li><GithubLogo size={24} className="bg-black text-white" /> Github : omotayo21</li>
    </ul>
   
</div>

</template>