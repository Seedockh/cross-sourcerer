<template>
  <p>{{ totalLines }}</p>
</template>

<script>
export default {
  name: 'commits',
  props: ['repositories'],
  data () {
    return {
      totalLines: 0
    }
  },
  mounted () {
    this.repositories.map(repo => {
      repo.node.defaultBranchRef.target.history.edges.map(commit => {
        this.totalLines += commit.node.additions
      })
    })
  }
}
</script>

<style lang="css" scoped>
</style>
