export default {
  methods: {
    makeNumberList(min, max, step, padding) {
      const numList = []
      for (let i = min; i <= max; i = i + step) {
        numList.push(i.toString().padStart(padding, '0'))
      }

      return numList
    }
  }
}
