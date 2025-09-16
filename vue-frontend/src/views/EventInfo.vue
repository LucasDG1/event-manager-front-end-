<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/components/Header.vue'
import Footer from '../components/components/Footer.vue'

const events = [
  {
    id: 1,
    title: 'Vue.js Workshop',
    image: 'https://picsum.photos/600/300?random=1',
    startDate: new Date('2025-10-10'),
    endDate: new Date('2025-10-12'),
    presenter: 'Lucas de Gooijer',
    location: 'Amsterdam',
    availableSeats: 25,
    price: 99.99,
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    image: 'https://picsum.photos/600/300?random=2',
    startDate: new Date('2025-10-01'),
    endDate: new Date('2025-11-01'),
    presenter: 'Jane Doe',
    location: 'Rotterdam',
    availableSeats: 50,
    price: 149.5,
  },
  {
    id: 3,
    title: 'Cybersecurity Conference',
    image: 'https://picsum.photos/600/300?random=3',
    startDate: new Date('2025-09-20'),
    endDate: new Date('2025-09-21'),
    presenter: 'Mark Visser',
    location: 'Utrecht',
    availableSeats: 120,
    price: 149.5,
  },
  {
    id: 4,
    title: 'Frontend Masters Bootcamp',
    image: 'https://picsum.photos/600/300?random=4',
    startDate: new Date('2025-12-01'),
    endDate: new Date('2025-12-03'),
    presenter: 'Emily Carter',
    location: 'Eindhoven',
    availableSeats: 0,
    price: 399.0,
  },
  {
    id: 5,
    title: 'Cloud Innovation Day',
    image: 'https://picsum.photos/600/300?random=5',
    startDate: new Date('2025-08-15'),
    endDate: new Date('2025-08-15'),
    presenter: 'Tom Bakker',
    location: 'Groningen',
    availableSeats: 200,
    price: 59.0,
  },
  {
    id: 6,
    title: 'Blockchain & Web3 Meetup',
    image: 'https://picsum.photos/600/300?random=6',
    startDate: new Date('2025-07-10'),
    endDate: new Date('2025-07-10'),
    presenter: 'Anna de Vries',
    location: 'Den Haag',
    availableSeats: 15,
    price: 29.99,
  },
  {
    id: 7,
    title: 'Startup Pitch Night',
    image: 'https://picsum.photos/600/300?random=7',
    startDate: new Date('2025-06-25'),
    endDate: new Date('2025-06-25'),
    presenter: 'Startup Hub NL',
    location: 'Haarlem',
    availableSeats: 50,
    price: 19.0,
  },
  {
    id: 8,
    title: 'Digital Marketing Trends 2025',
    image: 'https://picsum.photos/600/300?random=8',
    startDate: new Date('2025-10-18'),
    endDate: new Date('2025-10-19'),
    presenter: 'Sophie Janssen',
    location: 'Maastricht',
    availableSeats: 90,
    price: 129.99,
  },
  {
    id: 9,
    title: 'AI & Innovation Summit',
    image: 'https://picsum.photos/600/300?random=9',
    startDate: new Date('2025-12-10'),
    endDate: new Date('2025-12-12'),
    presenter: 'TechFuture Group',
    location: 'Groningen',
    availableSeats: 300,
    price: 349.0,
  },
  {
    id: 10,
    title: 'Food & Wine Festival',
    image: 'https://picsum.photos/600/300?random=10',
    startDate: new Date('2025-08-20'),
    endDate: new Date('2025-08-21'),
    presenter: 'Food Lovers NL',
    location: 'Leiden',
    availableSeats: 500,
    price: 45.0,
  },
  {
    id: 11,
    title: 'Yoga & Mindfulness Retreat',
    image: 'https://picsum.photos/600/300?random=11',
    startDate: new Date('2025-07-05'),
    endDate: new Date('2025-07-07'),
    presenter: 'Peaceful Minds',
    location: 'Veluwe',
    availableSeats: 40,
    price: 199.0,
  },
  {
    id: 12,
    title: 'Photography Workshop',
    image: 'https://picsum.photos/600/300?random=12',
    startDate: new Date('2025-09-12'),
    endDate: new Date('2025-09-12'),
    presenter: 'Lisa Vermeer',
    location: 'Zwolle',
    availableSeats: 18,
    price: 89.0,
  },
  {
    id: 13,
    title: 'Digital Art Exhibition',
    image: 'https://picsum.photos/600/300?random=13',
    startDate: new Date('2025-09-01'),
    endDate: new Date('2025-09-30'),
    presenter: 'Modern Arts NL',
    location: 'Eindhoven',
    availableSeats: 0,
    price: 15.0,
  },
  {
    id: 14,
    title: 'Healthcare Innovation Forum',
    image: 'https://picsum.photos/600/300?random=14',
    startDate: new Date('2025-11-20'),
    endDate: new Date('2025-11-21'),
    presenter: 'HealthTech NL',
    location: 'Utrecht',
    availableSeats: 120,
    price: 189.0,
  },
  {
    id: 15,
    title: 'Music Production Masterclass',
    image: 'https://picsum.photos/600/300?random=15',
    startDate: new Date('2025-06-15'),
    endDate: new Date('2025-06-16'),
    presenter: 'DJ Martinus',
    location: 'Tilburg',
    availableSeats: 30,
    price: 249.0,
  },
  {
    id: 16,
    title: 'Climate Change Symposium',
    image: 'https://picsum.photos/600/300?random=16',
    startDate: new Date('2025-10-05'),
    endDate: new Date('2025-10-06'),
    presenter: 'GreenFuture Org',
    location: 'Delft',
    availableSeats: 150,
    price: 119.0,
  },
]

const route = useRoute()
const eventId = parseInt(route.params.id)

const event = events.find((e) => e.id === eventId)

const ticketCount = ref(1)
const customerName = ref('')
const customerEmail = ref('')
const isSubmitting = ref(false)

const isFull = computed(() => event.availableSeats === 0)
const maxTickets = computed(() => Math.min(event.availableSeats, 10))

function handleSubmit() {
  isSubmitting.value = true
  setTimeout(() => {
    alert(`Boeking bevestigd voor ${ticketCount.value} tickets!`)
    isSubmitting.value = false
  }, 1000)
}

function formatDateTime(date) {
  return new Date(date).toLocaleString('nl-NL', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <Header />
  <div class="container mx-auto px-4 py-8">
    <Button variant="outline" @click="onBack" class="mb-6 flex items-center">
      <ArrowLeft class="w-4 h-4 mr-2" />
      Terug naar overzicht
    </Button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div class="relative">
          <img
            :src="event.image"
            :alt="event.title"
            class="w-full h-64 md:h-80 object-cover rounded-lg shadow"
          />
          <span
            v-if="isFull"
            class="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold"
          >
            Volgeboekt
          </span>
        </div>

        <div class="space-y-4">
          <h1 class="text-3xl font-bold">{{ event.title }}</h1>

          <div class="flex flex-wrap gap-6 text-gray-600">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4" />
              <span>{{ formatDateTime(event.startDate) }}</span>
            </div>

            <div v-if="event.endDate" class="flex items-center gap-2">
              <Clock class="w-4 h-4" />
              <span>Tot {{ formatDateTime(event.endDate) }}</span>
            </div>

            <div v-if="event.presenter" class="flex items-center gap-2">
              <User class="w-4 h-4" />
              <span>{{ event.presenter }}</span>
            </div>

            <div v-if="event.location" class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>{{ event.location }}</span>
            </div>
          </div>

          <div class="flex items-center gap-2 text-gray-700">
            <Users class="w-4 h-4" />
            <span>
              {{ event.availableSeats }} van {{ event.totalSeats }} plaatsen beschikbaar
            </span>
          </div>

          <p class="text-lg text-gray-800 leading-relaxed">
            {{ event.description || 'Geen beschrijving beschikbaar voor dit event.' }}
          </p>
        </div>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle class="text-xl font-semibold">Tickets boeken</CardTitle>
          </CardHeader>
          <CardContent class="space-y-4">
            <Alert v-if="isPast" variant="destructive">
              <AlertTriangle class="w-4 h-4" />
              <AlertDescription>
                Dit event is al afgelopen en kan niet meer geboekt worden.
              </AlertDescription>
            </Alert>

            <Alert v-else-if="isFull" variant="destructive">
              <AlertDescription> Dit event is volledig uitverkocht. </AlertDescription>
            </Alert>

            <Alert v-else-if="isLowAvailability" class="border-orange-200 bg-orange-50">
              <AlertTriangle class="w-4 h-4 text-orange-600" />
              <AlertDescription class="text-orange-800">
                Laatste kans! Nog maar {{ event.availableSeats }} tickets beschikbaar.
              </AlertDescription>
            </Alert>

            <form v-if="!isPast && !isFull" @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <Label for="tickets">Aantal tickets</Label>
                <Input
                  id="tickets"
                  type="number"
                  min="1"
                  :max="maxTickets"
                  v-model="ticketCount"
                  class="mt-1 w-full border-1 rounded-sm"
                />
                <p class="text-sm text-gray-500 mt-1">
                  Maximum {{ maxTickets }} tickets per bestelling
                </p>
              </div>

              <div>
                <Label for="name">Naam</Label>
                <Input id="name" type="text" v-model="customerName" required class="mt-1 w-full border-1 rounded-sm" />
              </div>

              <div>
                <Label for="email">E-mailadres</Label>
                <Input
                  id="email"
                  type="email"
                  v-model="customerEmail"
                  required
                  class="mt-1 w-full border-1 rounded-sm"
                />
              </div>

              <div class="border-t pt-4">
                <div class="flex justify-between items-center mb-2">
                  <span>Prijs per ticket:</span>
                  <span class="font-medium">€{{ event.price.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between items-center font-semibold">
                  <span>Totaal:</span>
                  <span>€{{ (ticketCount * event.price).toFixed(2) }}</span>
                </div>
              </div>

              <Button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
                :disabled="isSubmitting || ticketCount > event.availableSeats"
              >
                {{ isSubmitting ? 'Bezig met boeken...' : 'Boek nu' }}
              </Button>
            </form>

            <div v-else class="text-center py-8">
              <p class="text-gray-500">Boeking niet meer mogelijk</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  <Footer />
</template>
