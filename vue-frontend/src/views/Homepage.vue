<script setup>
import { onMounted } from 'vue'
import Header from '../components/components/Header.vue'
import Eventcard from '../components/components/Eventcard.vue'
import Footer from '../components/components/Footer.vue'
const events = [
  {
    id: 1,
    title: "Vue.js Workshop",
    image: "https://picsum.photos/600/300?random=1",
    startDate: new Date("2025-10-10"),
    endDate: new Date("2025-10-12"),
    presenter: "Lucas de Gooijer",
    location: "Amsterdam",
    availableSeats: 25,
    price: 99.99,
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    image: "https://picsum.photos/600/300?random=2",
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-11-01"),
    presenter: "Jane Doe",
    location: "Rotterdam",
    availableSeats: 50,
    price: 149.5,
  },
  {
    id: 3,
    title: "Cybersecurity Conference",
    image: "https://picsum.photos/600/300?random=3",
    startDate: new Date("2025-09-20"),
    endDate: new Date("2025-09-21"),
    presenter: "Mark Visser",
    location: "Utrecht",
    availableSeats: 120,
    price: 149.5,
  },
  {
    id: 4,
    title: "Frontend Masters Bootcamp",
    image: "https://picsum.photos/600/300?random=4",
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-03"),
    presenter: "Emily Carter",
    location: "Eindhoven",
    availableSeats: 0,
    price: 399.0,
  },
  {
    id: 5,
    title: "Cloud Innovation Day",
    image: "https://picsum.photos/600/300?random=5",
    startDate: new Date("2025-08-15"),
    endDate: new Date("2025-08-15"),
    presenter: "Tom Bakker",
    location: "Groningen",
    availableSeats: 200,
    price: 59.0,
  },
  {
    id: 6,
    title: "Blockchain & Web3 Meetup",
    image: "https://picsum.photos/600/300?random=6",
    startDate: new Date("2025-07-10"),
    endDate: new Date("2025-07-10"),
    presenter: "Anna de Vries",
    location: "Den Haag",
    availableSeats: 15,
    price: 29.99,
  },
  {
    id: 7,
    title: "Startup Pitch Night",
    image: "https://picsum.photos/600/300?random=7",
    startDate: new Date("2025-06-25"),
    endDate: new Date("2025-06-25"),
    presenter: "Startup Hub NL",
    location: "Haarlem",
    availableSeats: 50,
    price: 19.0,
  },
  {
    id: 8,
    title: "Digital Marketing Trends 2025",
    image: "https://picsum.photos/600/300?random=8",
    startDate: new Date("2025-10-18"),
    endDate: new Date("2025-10-19"),
    presenter: "Sophie Janssen",
    location: "Maastricht",
    availableSeats: 90,
    price: 129.99,
  },
  {
    id: 9,
    title: "AI & Innovation Summit",
    image: "https://picsum.photos/600/300?random=9",
    startDate: new Date("2025-12-10"),
    endDate: new Date("2025-12-12"),
    presenter: "TechFuture Group",
    location: "Groningen",
    availableSeats: 300,
    price: 349.0,
  },
  {
    id: 10,
    title: "Food & Wine Festival",
    image: "https://picsum.photos/600/300?random=10",
    startDate: new Date("2025-08-20"),
    endDate: new Date("2025-08-21"),
    presenter: "Food Lovers NL",
    location: "Leiden",
    availableSeats: 500,
    price: 45.0,
  },
  {
    id: 11,
    title: "Yoga & Mindfulness Retreat",
    image: "https://picsum.photos/600/300?random=11",
    startDate: new Date("2025-07-05"),
    endDate: new Date("2025-07-07"),
    presenter: "Peaceful Minds",
    location: "Veluwe",
    availableSeats: 40,
    price: 199.0,
  },
  {
    id: 12,
    title: "Photography Workshop",
    image: "https://picsum.photos/600/300?random=12",
    startDate: new Date("2025-09-12"),
    endDate: new Date("2025-09-12"),
    presenter: "Lisa Vermeer",
    location: "Zwolle",
    availableSeats: 18,
    price: 89.0,
  },
  {
    id: 13,
    title: "Digital Art Exhibition",
    image: "https://picsum.photos/600/300?random=13",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-09-30"),
    presenter: "Modern Arts NL",
    location: "Eindhoven",
    availableSeats: 0,
    price: 15.0,
  },
  {
    id: 14,
    title: "Healthcare Innovation Forum",
    image: "https://picsum.photos/600/300?random=14",
    startDate: new Date("2025-11-20"),
    endDate: new Date("2025-11-21"),
    presenter: "HealthTech NL",
    location: "Utrecht",
    availableSeats: 120,
    price: 189.0,
  },
  {
    id: 15,
    title: "Music Production Masterclass",
    image: "https://picsum.photos/600/300?random=15",
    startDate: new Date("2025-06-15"),
    endDate: new Date("2025-06-16"),
    presenter: "DJ Martinus",
    location: "Tilburg",
    availableSeats: 30,
    price: 249.0,
  },
  {
    id: 16,
    title: "Climate Change Symposium",
    image: "https://picsum.photos/600/300?random=16",
    startDate: new Date("2025-10-05"),
    endDate: new Date("2025-10-06"),
    presenter: "GreenFuture Org",
    location: "Delft",
    availableSeats: 150,
    price: 119.0,
  },
];

</script>

<template>
  <Header />
  <section class="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">

    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1634155938686-24a26c55d71a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnQlMjBhdWRpZW5jZXxlbnwxfHx8fDE3NTc5MjgxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Conference audience"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-blue-900/60"></div>
    </div>

   
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="text-center">

        <div class="flex justify-center mb-6">
          <div
            class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white"
          >
            <i class="fa-regular fa-calendar text-white text-xl"></i>
            <span class="text-sm font-medium">Jouw Event Platform</span>
          </div>
        </div>

  
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ontdek en Boek
          <span class="block text-blue-200">Geweldige Events</span>
        </h1>


        <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Van inspirerende conferenties tot intieme workshops - vind het perfecte event dat past bij
          jouw interesses en boek direct online.
        </p>


        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            @click="onViewEvents"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center"
          >
            <span class="mr-2">Bekijk Events</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>

          <button
            class="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200"
          >
            Meer Informatie
          </button>
        </div>
      </div>
      <div class="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">

        <div class="text-center">
          <i class="fa-solid fa-calendar-check text-blue-200 text-3xl mb-2"></i>
          <div class="text-3xl font-bold text-white mb-1">500+</div>
          <div class="text-blue-200 text-sm">Events per jaar</div>
        </div>


        <div class="text-center">
          <i class="fa-solid fa-users text-blue-200 text-3xl mb-2"></i>
          <div class="text-3xl font-bold text-white mb-1">50K+</div>
          <div class="text-blue-200 text-sm">Tevreden bezoekers</div>
        </div>

 
        <div class="text-center col-span-2 md:col-span-1">
          <i class="fa-solid fa-star text-blue-200 text-3xl mb-2"></i>
          <div class="text-3xl font-bold text-white mb-1">98%</div>
          <div class="text-blue-200 text-sm">Tevredenheidscore</div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center items-center flex-col">
        <h2 class="font-bold pt-20 text-3xl">Ontdek Onze Events</h2>
        <p class="text-gray-400 text-xl pt-5 text-center">Van inspirerende conferenties tot praktische workshops <br></br> vind het event dat perfect bij je past</p>
    </div>
    <div class="flex justify-center mt-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
      <Eventcard
        v-for="event in events"
        :key="event.id"
        :event="event"
        :isFull="event.availableSeats === 0"
        class="max-w-sm w-full mx-auto"
      />
    </div>
  </div>
<Footer />
</template>
