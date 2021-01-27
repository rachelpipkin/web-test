<template>
  <div id="inventory-create" class="flex-column">
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
      <input type="number" id="quantity" min="1" max="20" v-model="quantity" />
    </label>
    <div id="action-items">
      <button type="button" class="button">Cancel</button>
      <button type="button" class="button primary" @click="createInventory">
        Create
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import DatePicker from '../components/DatePicker.vue'
import TimePicker from '../components/TimePicker.vue'

export default {
  name: 'InventoryCreate',
  components: { DatePicker, TimePicker },
  data() {
    return {
      date: moment(),
      startTime: null,
      endTime: null,
      quantity: 0
    }
  },
  methods: {
    createInventory() {
      console.log(this.date, this.startTime, this.endTime, this.quantity)
    },
    updateDate(newVal) {
      this.date = moment(newVal)
    },
    updateTime(event, type) {
      const newVal = event.target.value

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
