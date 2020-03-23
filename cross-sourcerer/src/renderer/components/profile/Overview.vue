<template>
  <div id="overview">
    <h2>OVERVIEW</h2>
    <ApolloQuery class="ovw-apollo" :query="require('../../graphql/Overview.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else-if="data" class="result">
          <OverviewLanguages :languages="data.viewer.repositories.edges" />
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import OverviewLanguages from './OverviewLanguages'

export default {
  name: 'overview',
  components: { OverviewLanguages }
}
</script>

<style lang="css">
  #overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em 0;
  }
  h2 {
    align-self: flex-start;
    margin-left: 30%;
  }
</style>
