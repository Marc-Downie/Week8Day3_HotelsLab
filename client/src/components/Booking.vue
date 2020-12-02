<template>
  <div class="booking">
      <h2>{{ booking.guest_name }}</h2>
      <p>{{ booking.guest_email }}</p>
      <p></p>
      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingService from '@/services/BookingService.js'

export default {
    name: 'booking',
    props: ['booking'],

    methods: {
        deleteBooking(){
            BookingService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('booking-deleted', this.booking._id));
        }
    }
}
</script>

<style>
.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>