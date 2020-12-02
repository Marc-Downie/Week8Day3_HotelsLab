<template>
    <form id="hotel-form" v-on:submit.prevent="handleSubmit">
        <h2>Add new Booking</h2>
        <div class="formWrap">
            <label for="guest_name">Name:</label>
            <input type="text" id="guest_name" v-model="guest_name" />
        </div>
        <div class="formWrap">
            <label for="guest_email">Guest Email:</label>
            <input type="text" id="guest_email" v-model="guest_email" />
        </div>
        <div>
            <input type="bool" id="checked_in_status" v-model="booking.checked_in_status" hidden>
        </div>
        <input type="submit" value="Save" id="save"/>
    </form>
</template>

<script>

import BookingService from '../services/BookingService.js'
import { eventBus } from '@/main.js'

export default {
    name: "hotel-form",
    data(){
        return {
            guest_name: '',
            guest_email: '',
            checked_in_status: false
        }
    },
    methods: {
        handleSubmit(){
            event.preventDefault()
            const booking = {
                guest_name: this.guest_name,
                guest_email: this.guest_email,
                checked_in_status: this.checked_in_status
            }
            BookingService.postBooking(booking)
            .then(res => eventBus.$emit('booking-added', res))

        }
    }
}
</script>

<style>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}
</style>