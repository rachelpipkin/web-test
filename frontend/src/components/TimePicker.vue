<template>
  <div class="time-picker">
    <label v-if="label.length">{{ label }}&nbsp;</label>
    <input
      type="time"
      id="time"
      @change="newVal => this.$emit('change', newVal)"
    />
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TimePicker',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
