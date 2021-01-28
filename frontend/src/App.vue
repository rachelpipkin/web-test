<template>
  <div id="app">
    <div id="nav">
      <router-link to="/reservations">Reservations</router-link>|
      <router-link to="/inventory">Inventory</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active,
    &.active {
      color: #42b983;
    }
  }
}

.button {
  background-color: rgb(250, 250, 250);
  border-radius: 5px;
  margin: 5px;
  padding: 5px 10px;

  &.primary {
    font-weight: bold;
  }
}

.component-wrapper {
  align-items: flex-start;
  width: 75%;
  margin: 0 auto;
}

.error {
  color: rgb(175, 0, 0);
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.sucess {
  color: rgb(0, 0, 175);
}
</style>
