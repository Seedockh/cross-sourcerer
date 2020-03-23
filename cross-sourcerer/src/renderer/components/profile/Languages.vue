<template>
  <div id="languages">
    <h3>LANGUAGES</h3>
    <ApolloQuery class="apollo" :query="require('../../graphql/Languages.gql')">
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
#languages {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
}
</style>
