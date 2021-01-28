<template>
  <div>
    <h1>Reservations</h1>
    <div :key="componentKey">
      <div id="reservation-create" class="flex-column component-wrapper">
        <h2>Create a new reservation</h2>
        <label>
          Name
          <input type="text" v-model="name" required />
        </label>
        <label>
          Email
          <input type="email" v-model="email" required />
        </label>
        <label>
          Party size
          <select id="quantity" v-model="quantity">
            <option v-for="option in quantityOptions" :key="option">{{
              option
            }}</option>
          </select>
        </label>
        <date-picker v-model="date" :withLabel="true" />
        <time-picker id="start-time" label="Time" v-model="startTime" />
        <div id="action-items">
          <button type="button" class="button" @click="resetForm()">
            Cancel
          </button>
          <button
            type="submit"
            class="button primary"
            @click="createReservation"
          >
            Book
          </button>
        </div>
        <submit-message :submitMessage="submitMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import makeNumberList from '../mixins/makeNumberList'
import today from '../mixins/today'
import DatePicker from '../components/DatePicker'
import SubmitMessage from '../components/SubmitMessage'
import TimePicker from '../components/TimePicker'

export default {
  name: 'Reservations',
  mixins: [makeNumberList, today],
  components: { DatePicker, SubmitMessage, TimePicker },
  data() {
    return {
      componentKey: 0,
      date: this.today,
      email: null,
      name: null,
      quantity: 0,
      submitMessage: null,
      startTime: '01:00'
    }
  },
  computed: {
    quantityOptions() {
      return this.makeNumberList(1, 20, 1, 1)
    }
  },
  methods: {
    createReservation() {
      const { email, name, quantity } = this
      const validEmail = this.validateEmail(email)

      if (!validEmail || !name || !quantity) {
        this.submitMessage = {
          text: 'One or more fields is invalid, please try again.',
          type: 'error'
        }
      } else {
        //   TODO format and submit to the server
        this.resetForm()
        this.submitMessage = {
          text: 'Reservation booked.',
          type: 'success'
        }
      }
    },
    resetForm() {
      this.email = null
      this.name = null
      this.startTime = '01:00'
      this.submitMessage = null
      this.quantity = 0
      this.componentKey += 1
    },
    validateEmail(email) {
      if (!email) return

      //eslint-disable-next-line
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(email)
    }
  }
}
</script>
