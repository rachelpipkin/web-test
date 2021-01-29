<template>
  <div
    id="inventory-create"
    class="flex-column component-wrapper"
    :key="componentKey"
  >
    <h2>Create a new inventory slot</h2>
    <date-picker v-model="date" :withLabel="true" />
    <time-picker id="start-time" label="Start Time" v-model="startTime" />
    <time-picker id="end-time" label="End Time" v-model="endTime" />
    <label>
      Number of reservations for every 15 minute window:
      <select id="quantity" v-model="quantity">
        <option v-for="option in quantityOptions" :key="option">{{
          option
        }}</option>
      </select>
    </label>

    <div id="action-items">
      <button type="button" class="button" @click="resetForm()">Cancel</button>
      <button type="button" class="button primary" @click="createInventory">
        Create
      </button>
    </div>
    <submit-message :submitMessage="submitMessage" />
  </div>
</template>

<script>
import moment from 'moment'
import { server } from '../server'
import makeNumberList from '../mixins/makeNumberList'
import DatePicker from '../components/DatePicker'
import SubmitMessage from '../components/SubmitMessage'
import TimePicker from '../components/TimePicker'

const now = moment()
const today = moment().format('YYYY-MM-DD')

export default {
  name: 'InventoryCreate',
  mixins: [makeNumberList],
  components: { DatePicker, SubmitMessage, TimePicker },
  data() {
    return {
      componentKey: 0,
      date: today,
      endTime: '01:00',
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
    createInventory() {
      const { date, startTime, endTime } = this
      const validDate = this.validateDateTime(date, startTime, endTime)

      if (startTime == endTime || !this.quantity || !validDate) {
        this.submitMessage = {
          text: 'One or more fields is invalid, please try again.',
          type: 'error'
        }
      } else {
        const formattedReq = {
          date,
          startTime,
          endTime,
          booked: 0,
          total: this.quantity
        }

        server
          .post('inventory', formattedReq)
          .then(() => this.resetForm())
          .then(() => {
            this.submitMessage = {
              text: 'Inventory block created.',
              type: 'success'
            }
          })
          .catch(() => {
            this.submitMessage = {
              text: 'Unable to create inventory.',
              type: 'error'
            }
          })
      }
    },
    resetForm() {
      this.endTime = '01:00'
      this.startTime = '01:00'
      this.submitMessage = null
      this.quantity = 0
      this.componentKey += 1
    },
    validateDateTime(date, start, end) {
      const momentStart = moment(`${date} ${start}`, 'YYYY-MM-DD kk:mm')
      const momentEnd = moment(`${date} ${end}`, 'YYYY-MM-DD kk:mm')

      return momentStart.isAfter(now) && momentStart.isBefore(momentEnd)
    }
  }
}
</script>

<style scoped lang="scss">
#inventory-create input {
  padding: 5px 0;
  margin: 10px 0;
}
</style>
