<template>
  <div class="time-picker">
    <label v-if="label.length">{{ label }}&nbsp;</label>
    <select id="hours" @change="handleChange" v-model="hour">
      <option v-for="option in hourOptions" :key="option">{{ option }}</option>
    </select>
    <select id="minutes" @change="handleChange" v-model="minute">
      <option v-for="option in minuteOptions" :key="option">{{
        option
      }}</option>
    </select>
    <select id="period" @change="handleChange" v-model="period">
      <option value="am">AM</option>
      <option value="pm">PM</option>
    </select>
  </div>
</template>

<script>
import makeNumberList from '../mixins/makeNumberList'

export default {
  name: 'TimePicker',
  mixins: [makeNumberList],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hour: '01',
      minute: '00',
      period: 'am'
    }
  },
  computed: {
    hourOptions() {
      return this.makeNumberList(1, 12, 1, 2)
    },
    minuteOptions() {
      return this.makeNumberList(0, 45, 15, 2)
    }
  },
  methods: {
    handleChange() {
      const { hour, minute, period } = this
      let formattedTime = `${hour}:${minute}`

      if (period == 'pm') {
        formattedTime = `${parseInt(hour) + 12}:${minute}`
      } else if (period == 'am' && hour == '12') {
        formattedTime = `00:${minute}`
      }

      this.$emit('input', formattedTime)
    }
  }
}
</script>
