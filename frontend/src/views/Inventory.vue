<template>
  <div>
    <h1>Inventory</h1>
    <div id="nav">
      <a
        href="#"
        :class="{ active: isActive('view') }"
        @click="setActive('view')"
        >View</a
      >
      <span>&nbsp;|&nbsp;</span>
      <a
        href="#"
        :class="{ active: isActive('create') }"
        @click="setActive('create')"
        >Create</a
      >
    </div>
    <inventory-create v-if="isActive('create')" />
    <div v-else>
      <date-picker v-model="filterDate" />
      <div class="flex-column" id="inventory-table">
        <table>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Booked</th>
            <th>Total</th>
          </tr>
          <tr v-for="inv in filtedInventoryList" :key="inv.id">
            <td>{{ inv.startTime }}</td>
            <td>{{ inv.endTime }}</td>
            <td>{{ inv.booked }}</td>
            <td>{{ inv.total }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import _filter from 'lodash/filter'
import moment from 'moment'
import { server } from '../server'
import InventoryCreate from './InventoryCreate'
import DatePicker from '../components/DatePicker'

const today = moment().format('YYYY-MM-DD')

export default {
  name: 'Inventory',
  components: { DatePicker, InventoryCreate },
  data() {
    return {
      activeItem: 'view',
      filterDate: today,
      inventoryList: []
    }
  },
  computed: {
    filtedInventoryList: {
      get() {
        return _filter(this.inventoryList, i => {
          return i.date == this.filterDate
        })
      }
    }
  },
  async created() {
    server.get('inventory').then(response => {
      this.inventoryList = response.data
    })
    // .catch(e => {
    //   this.errors.push(e)
    // })
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style>
#inventory-table {
  margin: 0 auto;
  text-align: left;
  width: 50%;
}
</style>
