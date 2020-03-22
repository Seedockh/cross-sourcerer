<template>
  <div class="auth">
    <!-- Init connection to Github API -->
    <ApolloQuery
      :query="require('../graphql/HelloGithub.gql')"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>
        <!-- Error -->
        <div v-else-if="error" class="error apollo">{{ error }}</div>
        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.hello }}</div>
        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
    <div class="form">
      <input
        v-model="nickname"
        placeholder="Type your Github nickname"
        class="input"
        id="field-name"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      nickname: ''
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
