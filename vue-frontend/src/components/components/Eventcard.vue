<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  event: Object,
  isFull: Boolean,
  onClick: Function,
})

function formatDate(date) {
  const d = new Date(date)
  return d.toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
import { useRouter } from 'vue-router'
const router = useRouter()

function goToEvent() {
  router.push({ name: 'EventInfo', params: { id: props.event.id } })
}
</script>

<template>
  <router-link :to="`/event/${event.id}`">
    <div
      class="overflow-hidden transition-all duration-200 w-full rounded-lg border-1 border-gray-200"
      :class="
        isFull
          ? 'opacity-75 cursor-not-allowed'
          : 'cursor-pointer hover:shadow-lg hover:scale-[1.02]'
      "
      @click="!isFull && onClick && onClick(event)"
    >
      <div class="relative">
        <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover rounded-t-lg" />

        <div
          v-if="isFull"
          class="absolute inset-0 bg-red-600/80 flex items-center justify-center rounded-t-lg"
        >
          <span class="bg-white text-red-600 px-3 py-1 rounded font-semibold"> Volgeboekt </span>
        </div>
      </div>

      <div class="p-4 space-y-3 bg-white">
        <h3 class="line-clamp-2 font-bold text-lg">{{ event.title }}</h3>

        <div class="flex items-center gap-2 text-gray-500">
          <i class="fa-solid fa-calendar"></i>
          <span class="text-sm">{{ formatDate(event.startDate) }}</span>
        </div>

        <div
          v-if="event.endDate && event.endDate !== event.startDate"
          class="text-sm text-gray-500"
        >
          Tot {{ formatDate(event.endDate) }}
        </div>

        <div v-if="event.presenter" class="flex items-center gap-2 text-gray-500">
          <i class="fa-solid fa-user"></i>
          <span class="text-sm">{{ event.presenter }}</span>
        </div>

        <div v-if="event.location" class="flex items-center gap-2 text-gray-500">
          <i class="fa-solid fa-map-pin"></i>
          <span class="text-sm">{{ event.location }}</span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-gray-500">
            <i class="fa-solid fa-users"></i>
            <span class="text-sm">{{ event.availableSeats }} beschikbaar</span>
          </div>
          <div class="font-medium">€{{ event.price.toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>
