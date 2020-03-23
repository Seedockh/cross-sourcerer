<template>
  <p class="text-bold">{{ totalCommits }}</p>
</template>

<script>
export default {
  name: 'commits',
  props: ['repositories'],
  data () {
    return {
      totalCommits: 0
    }
  },
  mounted () {
    this.repositories.map(repo => {
      repo.node.defaultBranchRef.target.history.edges.map(commit => {
        this.totalCommits++
      })
    })
  }
}
</script>

<style lang="css" scoped>
</style>
