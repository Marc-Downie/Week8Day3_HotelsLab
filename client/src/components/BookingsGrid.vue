<template>
  <div id="bookingsGrid">
      <booking v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking';

export default {
    name: 'bookings-grid',
    components: {
        'booking': Booking
    },
    props: ['bookings']
}
</script>

<style>
#bookingsGrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

h2 {
    padding: 0;
    margin: 0;
}
</style>