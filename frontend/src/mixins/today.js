import moment from 'moment'

export default {
  data() {
    return {
      today: moment().format('YYYY-MM-DD')
    }
  }
}
