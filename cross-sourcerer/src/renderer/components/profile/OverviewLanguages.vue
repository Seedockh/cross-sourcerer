<template>
  <div class="ovw-chart-lang">
    <OverviewChart v-if="datasets && options" :datasets="datasets" :options="options" />
    <code class="text-bold">{{ languages.length }} repositories</code>
    <div class="ovw-languages">
      <div class="ovw-language-cards" v-for="language in groupedLanguages">
        <div class="ovw-language-card">
          <p>{{ language.name }}</p>
          <span
            class="ovw-language-color"
            v-bind:style="[colorStyle, { 'background-color': language.color }]">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewChart from './OverviewChart'

export default {
  name: 'commits',
  components: { OverviewChart },
  props: ['languages'],
  data () {
    return {
      groupedLanguages: [],
      yearLanguages: [],
      colorStyle: {
        width: '10px',
        height: '10px',
        minWidth: '10px',
        borderRadius: '50%'
      },
      datasets: null,
      options: null
    }
  },
  mounted () {
    // Defining languages to display
    this.setDisplayLanguages()
    // Defining charts languages & dates
    this.setChartsLanguages()
    // Defining charts datasets
    this.setChartsDatasets()
  },
  methods: {
    setDisplayLanguages () {
      this.languages.map(language => {
        let lang = { ...language.node.primaryLanguage, count: 0 }
        if (lang.name) {
          if (this.groupedLanguages.filter(grLang => grLang.name === lang.name).length === 0) {
            lang.count++
            this.groupedLanguages.push(lang)
          } else {
            let index = this.groupedLanguages.findIndex(grLang => grLang.name === lang.name)
            this.groupedLanguages[index].count++
          }
        }
      })
      this.groupedLanguages.sort((aLang, bLang) => bLang.count - aLang.count)
    },
    setChartsLanguages () {
      this.languages.map(language => {
        let date = new Date(language.node.updatedAt)
        let lang = { ...language.node.primaryLanguage, year: `${date.getFullYear()}-${date.getMonth()}`, count: 0 }
        if (lang.name) {
          if (this.yearLanguages.filter(yLang => yLang.name === lang.name && yLang.year === lang.year).length === 0) {
            lang.count++
            this.yearLanguages.push(lang)
          } else {
            let index = this.yearLanguages.findIndex(yLang => yLang.name === lang.name && yLang.year === lang.year)
            this.yearLanguages[index].count++
          }
        }
      })
    },
    setChartsDatasets () {
      let datasets = []
      let labels = []

      // Setting labels
      this.yearLanguages.map(lang => {
        if (labels.indexOf(lang.year) === -1) {
          labels.push(lang.year)
        }
      })

      // Creating datasets
      labels.map(year => {
        this.yearLanguages.map((lang, index) => {
          if (datasets.findIndex(dset => dset.label === lang.name) === -1) {
            datasets.push({
              label: lang.name,
              backgroundColor: lang.color,
              order: this.yearLanguages.length - index,
              showLine: true,
              fill: true,
              data: []
            })
          }
        })
      })

      // Pushing data to datasets
      labels.map((year, index) => {
        this.yearLanguages.filter(lang => lang.year === year).map(yLang => {
          const datasetIndex = datasets.findIndex(dset => dset.label === yLang.name && yLang.year === year)
          datasets[datasetIndex].data[index] = yLang.count
        })
      })

      this.datasets = {
        labels: labels,
        datasets: datasets
      }

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              min: 0,
              stepSize: 1
            }
          }]
        }
      }
    }
  }
}
</script>

<style lang="css">
  .ovw-chart-lang {
    display: flex;
    flex-direction: column;
  }
    .ovw-chart-lang code {
      margin: 1em 2em;
    }
  .ovw-languages {
    width: 550px;
    min-width: 400px;
    display: flex;
    justify-content: flex-start;
    align-self: center;
    flex-wrap: wrap;
  }
  .ovw-language-card {
    width: 120px;
    background: #e3eae5;
    margin: .5em;
    box-shadow: 1px 1px 2px grey;
    border-radius: 2px;
    font-size: 14px;
    padding: .5em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
    .ovw-language-card p {
      margin-right: .5em;
    }
</style>
