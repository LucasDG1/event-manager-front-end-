<template>
  <footer class="bg-gray-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-6">
            <font-awesome-icon :icon="['fas', 'calendar']" class="w-8 h-8 text-blue-400" />
            <span class="text-2xl font-bold">EventManager</span>
          </div>
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Jouw betrouwbare partner voor het ontdekken en boeken van inspirerende events. Van
            zakelijke conferenties tot creatieve workshops - wij brengen mensen samen.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <font-awesome-icon :icon="['fab', 'facebook']" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <font-awesome-icon :icon="['fab', 'twitter']" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <font-awesome-icon :icon="['fab', 'instagram']" class="w-6 h-6" />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">Snelle Links</h3>
          <ul class="space-y-3">
            <li>
              <a href="#events" class="text-gray-300 hover:text-blue-400 transition-colors"
                >Alle Events</a
              >
            </li>
            <li>
              <a href="#categories" class="text-gray-300 hover:text-blue-400 transition-colors"
                >Categorieën</a
              >
            </li>
            <li>
              <a href="#about" class="text-gray-300 hover:text-blue-400 transition-colors"
                >Over Ons</a
              >
            </li>
            <li>
              <a href="#help" class="text-gray-300 hover:text-blue-400 transition-colors"
                >Help & Support</a
              >
            </li>
            <li>
              <a href="#privacy" class="text-gray-300 hover:text-blue-400 transition-colors"
                >Privacybeleid</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4 text-lg">Contact</h3>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
              />
              <div class="text-gray-300">
                <div>Eventstraat 123</div>
                <div>1234 AB Amsterdam</div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="w-5 h-5 text-blue-400 flex-shrink-0"
              />
              <a
                href="tel:+31201234567"
                class="text-gray-300 hover:text-blue-400 transition-colors"
              >
                +31 20 123 4567
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <font-awesome-icon
                :icon="['fas', 'envelope']"
                class="w-5 h-5 text-blue-400 flex-shrink-0"
              />
              <a
                href="mailto:info@eventmanager.nl"
                class="text-gray-300 hover:text-blue-400 transition-colors"
              >
                info@eventmanager.nl
              </a>
            </div>
          </div>

          <div class="mt-6">
            <h4 class="font-medium mb-2 text-gray-200">Openingstijden</h4>
            <div class="text-sm text-gray-400 space-y-1">
              <div>Ma-Vr: 09:00 - 18:00</div>
              <div>Weekend: Op afspraak</div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 EventManager. Alle rechten voorbehouden.
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#terms" class="text-gray-400 hover:text-blue-400 transition-colors"
              >Algemene Voorwaarden</a
            >
            <a href="#privacy" class="text-gray-400 hover:text-blue-400 transition-colors"
              >Privacy</a
            >
            <a href="#cookies" class="text-gray-400 hover:text-blue-400 transition-colors"
              >Cookies</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendar, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faCalendar,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
)
</script>
