<template>
  <div id="submit-message">
    <p id="submit-message" v-if="submitMessage" :class="submitMessage.type">
      {{ submitMessage.text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SubmitMessage',
  props: ['submitMessage']
}
</script>
