<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'overview-chart',
  extends: Line,
  props: ['datasets', 'options'],
  mounted () {
    this.renderChart(this.datasets, this.options)
  }
}
</script>
