<template>
  <div id="overview">
    <h3>OVERVIEW</h3>
    <ApolloQuery class="apollo" :query="require('../../graphql/Overview.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="result">
          <p>{{ data }}</p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
