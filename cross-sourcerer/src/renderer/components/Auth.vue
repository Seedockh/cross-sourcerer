<template>
  <div class="auth">
  <!--
    <ApolloQuery
      :query="require('../graphql/InitGithub.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="apollo">
          <p>Couldn't connect to Github API. Did you forget API token ?</p>
        </div>
        <div v-else-if="data" class="result apollo">
          <p class="checks">✔️ <span class="text-bold">Valid Github token</span> ({{ data.viewer.login }})</p>
        </div>
      </template>
    </ApolloQuery>
  -->
    <div class="form">
      <button type="submit" name="Start" class="button" v-on:click="authGithub">Start</button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'auth',
  data () {
    return {
      nickname: null,
      selectedNickname: null
    }
  },
  methods: {
    authGithub () {
      ipcRenderer.on('github::token', (event, arg) => {
        console.log('Received token')
        console.log(event)
        console.log(arg)
      })
      ipcRenderer.send('github::auth')

      /* console.log(this.selectedNickname)
      if (typeof this.nickname !== 'string') return null
      this.selectedNickname = this.nickname */
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

.error {
  color: red;
}
</style>
