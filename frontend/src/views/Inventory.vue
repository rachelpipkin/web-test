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
import today from '../mixins/today'
import InventoryCreate from './InventoryCreate'
import DatePicker from '../components/DatePicker'

export default {
  name: 'Inventory',
  mixins: [today],
  components: { DatePicker, InventoryCreate },
  data() {
    return {
      activeItem: 'view',
      filterDate: this.today,
      inventoryList: [
        {
          id: 1,
          date: '2021-01-28',
          startTime: '9:00am',
          endTime: '9:15am',
          booked: 2,
          total: 5
        }
      ]
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
