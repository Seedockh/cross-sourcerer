<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'language-chart',
  extends: Pie,
  props: ['datasets', 'options'],
  mounted () {
    this.renderChart(this.datasets, this.options)
  }
}
</script>
