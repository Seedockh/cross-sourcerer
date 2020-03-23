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

.error {
  color: red;
}
</style>
