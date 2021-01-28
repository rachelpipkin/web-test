<template>
  <div class="date-picker">
    <label v-if="withLabel">Date&nbsp;</label>
    <input type="date" id="date" v-model="inputVal" />
  </div>
</template>

<script>
import moment from 'moment'

const todayString = moment().format('YYYY-MM-DD')

export default {
  name: 'DatePicker',
  props: {
    value: {
      type: String,
      default: todayString
    },
    withLabel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>
.date-picker {
  margin-bottom: 7px;
  padding: 1px;
}
</style>
