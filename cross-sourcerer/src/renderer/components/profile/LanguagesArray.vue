<template>
  <div class="language-array array">
    <div class="left-column">
      <div class="lang-languages">
        <div class="lang-language-cards" v-for="language in this.groupedLanguages">
          <div class="lang-language-card">
            <div class="lang-language-name">
              <p>{{ language.name }}</p>
              <span
                class="lang-language-color"
                v-bind:style="[colorStyle, { 'background-color': language.color }]">
              </span>
            </div>
            <div class="lang-language-details">
              <code>Commits:</code>
              <p>{{ language.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-column">
      <LanguagesChart v-if="datasets && options" :datasets="datasets" :options="options" />
    </div>
  </div>
</template>

<script>
import LanguagesChart from './LanguagesChart'

export default {
  name: 'language-array',
  components: { LanguagesChart },
  props: ['languages'],
  data () {
    return {
      datasets: null,
      options: null,
      groupedLanguages: [],
      colorStyle: {
        width: '10px',
        height: '10px',
        minWidth: '10px',
        borderRadius: '50%'
      }
    }
  },
  mounted () {
    // Defining languages to display
    this.setDisplayLanguages()
    // Defining charts datasets
    this.setChartsDatasets()
  },
  methods: {
    setDisplayLanguages () {
      this.languages.map(lang => {
        if (lang.node.primaryLanguage) {
          if (this.groupedLanguages.filter(grLang => grLang.name && grLang.name === lang.node.primaryLanguage.name).length === 0) {
            this.groupedLanguages.push({
              name: lang.node.primaryLanguage.name,
              color: lang.node.primaryLanguage.color,
              count: lang.node.defaultBranchRef.target.history.totalCount
            })
          } else {
            let index = this.groupedLanguages.findIndex(grLang => grLang.name === lang.node.primaryLanguage.name)
            this.groupedLanguages[index].count += lang.node.defaultBranchRef.target.history.totalCount
          }
        }
      })
      this.groupedLanguages.sort((aLang, bLang) => bLang.count - aLang.count)
    },
    setChartsDatasets () {
      let dataset = [{
        backgroundColor: [],
        data: []
      }]
      let labels = []

      // Setting data of dataset
      this.groupedLanguages.map(lang => {
        if (labels.indexOf(lang.name) === -1) {
          labels.push(lang.name)
          dataset[0].backgroundColor.push(lang.color)
          dataset[0].data.push(lang.count)
        }
      })

      this.datasets = {
        labels: labels,
        datasets: dataset
      }

      this.options = {
        responsive: true,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        elements: {
          arc: {
            borderWidth: 1
          }
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .array {
    display: flex;
    flex-direction: row;
    width: 700px;
  }
    .array .left-column {
      max-width: 400px;
    }
    .array .right-column {
      max-width: 300px;
      padding: 0 2em;
      background: #e3eae5;
    }

  .lang-chart-lang {
    display: flex;
    flex-direction: column;
  }
    .lang-chart-lang code {
      margin: 1em 2em;
    }
  .lang-languages {
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-wrap: wrap;
  }
  .lang-language-card {
    width: 180px;
    background: #e3eae5;
    margin: .5em .5em;
    box-shadow: 1px 1px 2px grey;
    border-radius: 0;
    font-size: 16px;
    height: 100px;
  }
    .lang-language-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #e3eae5;
      padding: 0 1em;
      border-radius: 0;
      height: 50px;
    }
    .lang-language-details {
      padding: 0 .5em;
      background: #f0f4f1;
      font-size: 13px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
      .lang-language-details p {
        margin-left: .5em;
      }
    .lang-language-card p {
      margin-right: .5em;
    }
</style>
