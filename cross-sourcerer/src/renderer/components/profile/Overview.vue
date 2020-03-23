<template>
  <div id="overview">
    <h3>OVERVIEW</h3>
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

<style lang="css" scoped>
  #overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3em;
  }
</style>
