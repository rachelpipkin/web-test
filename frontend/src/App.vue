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
$teal: #42b983;
$dark-blue: #2c3e50;
$white: #fff;
$light-gray: #747474;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark-blue;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $dark-blue;

    &.router-link-exact-active,
    &.active {
      color: $teal;
    }
  }
}

.button {
  background-color: $white;
  border-radius: 5px;
  border: solid 1px $light-gray;
  color: $light-gray;
  margin: 5px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }

  &.primary {
    background-color: $teal;
    border-color: $teal;
    color: $white;
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

.success {
  color: rgb(0, 0, 175);
}

select {
  margin: 5px 2px;
  padding: 2px 0;
}

label {
  min-height: 30px;
}
</style>
