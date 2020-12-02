<template>
  <div id="app">
    <hotel-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
import HotelForm from './components/HotelForm.vue'
import BookingService from './services/BookingService.js'
import BookingsGrid from './components/BookingsGrid.vue'
import Booking from './components/Booking.vue'

export default {
  name: 'app',
  components: {
    'hotel-form': HotelForm,
    'bookings-grid': BookingsGrid
  },

  data() {
    return {
      bookings: []
    };
  },

  mounted() {
    this.fetchBookings();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },

  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: url('https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/85/51/8551_v10.jpeg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>