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
      inventory table here
    </div>
  </div>
</template>

<script>
import InventoryCreate from './InventoryCreate'
export default {
  name: 'Inventory',
  components: { InventoryCreate },
  data() {
    return {
      activeItem: 'view'
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
