<template>
  <div class="auth">
    <div class="form">
      <button type="submit" name="Start" class="button" v-on:click="authGithub">Login to Github</button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'auth',
  methods: {
    authGithub () {
      ipcRenderer.on('github::token', (event, arg) => {
        localStorage.setItem('token', arg)
        this.$root.$emit('setToken', arg)
        this.$router.push({ name: 'profile' })
      })
      ipcRenderer.send('github::auth')
    }
  }
}
</script>

<style scoped>
.form,
.input,
.apollo,
.message {
  padding: 12px;
}

.auth {
  display: flex;
  flex-direction: column;
}

.checks {
  margin: 1em 0;
}

.input:focus {
  outline: 0;
}
.button:focus {
  outline: 0;
  border: solid 2px green;
  border-radius: 3px;
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
  width: 100%;
}

.error {
  color: red;
}
</style>
