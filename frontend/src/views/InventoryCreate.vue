<template>
  <div id="inventory-create" class="flex-column" :key="componentKey">
    <h1>Create a new inventory slot</h1>
    <date-picker @change="updateDate" :withLabel="true" />
    <time-picker
      id="start-time"
      label="Start Time"
      @change="newVal => updateTime(newVal, 'start')"
    />
    <time-picker
      id="end-time"
      label="End Time"
      @change="newVal => updateTime(newVal, 'end')"
    />
    <label>
      Number of reservations for every 15 minute window:
      <select id="quantity" v-model="quantity">
        <option v-for="option in quantityOptions" :key="option">{{
          option
        }}</option>
      </select>
    </label>

    <div id="action-items">
      <button type="button" class="button">Cancel</button>
      <button type="button" class="button primary" @click="createInventory">
        Create
      </button>
    </div>
    <submit-message :submitMessage="submitMessage" />
  </div>
</template>

<script>
import moment from 'moment'
import makeNumberList from '../mixins/makeNumberList'
import DatePicker from '../components/DatePicker'
import SubmitMessage from '../components/SubmitMessage'
import TimePicker from '../components/TimePicker'

export default {
  name: 'InventoryCreate',
  mixins: [makeNumberList],
  components: { DatePicker, SubmitMessage, TimePicker },
  data() {
    return {
      componentKey: 0,
      date: moment(),
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
      if (this.startTime == this.endTime || this.quantity == 0) {
        this.submitMessage = {
          text: 'One or more fields is invalid, please try again.',
          type: 'error'
        }
      } else {
        //   TODO format and submit to the server
        this.resetForm()
        this.submitMessage = {
          text: 'Inventory block created.',
          type: 'success'
        }
      }
    },
    resetForm() {
      this.startTime = '01:00'
      this.endTime = '01:00'
      this.quantity = 0
      this.componentKey += 1
    },
    updateDate(newVal) {
      this.date = moment(newVal)
    },
    updateTime(newVal, type) {
      if (type == 'start') {
        this.startTime = newVal
      } else if (type == 'end') {
        this.endTime = newVal
      }
    }
  }
}
</script>

<style scoped lang="scss">
#inventory-create {
  align-items: flex-start;
  width: 75%;
  margin: 0 auto;
}
#inventory-create input {
  padding: 5px 0;
  margin: 10px 0;
}
</style>
