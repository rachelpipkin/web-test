<template>
  <div class="date-picker">
    <label v-if="withLabel">Date&nbsp;</label>
    <input type="date" id="date" v-model="formattedDate" />
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DatePicker',
  props: {
    withLabel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: moment()
    }
  },
  computed: {
    formattedDate: {
      get: function() {
        return this.date.format('YYYY-MM-DD')
      },
      set: function(newVal) {
        this.$emit('change', newVal)

        return newVal
      }
    }
  }
}
</script>
