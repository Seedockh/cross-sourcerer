<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'cross-sourcerer'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #app {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 10%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    width: 100%;
    min-width: 500px;
    min-height: 500px;
  }

  .text-bold {
    font-weight: 600;
  }

  .button {
    width: 100%;
    height: 40px;
    margin-top: 1em;
    align-self: center;
    background-color: #4ec44e;
    color: white;
    font-family: inherit;
    font-size: inherit;
    border: 0;
    border-radius: 3px;
  }
    .button:focus {
      outline: 0;
      border: solid 2px green;
      border-radius: 3px;
    }

  .form,
  .input,
  .apollo,
  .message {
    padding: 12px;
  }

  label {
    display: block;
    margin-bottom: 6px;
  }

  .input {
    font-family: inherit;
    font-size: inherit;
    border: solid 2px #ccc;
    border-radius: 3px;
  }

  .error {
    color: red;
  }
</style>
