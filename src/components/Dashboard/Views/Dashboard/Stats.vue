<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12">
      <chart-card :chart-data="salesChart.data" :chart-options="salesChart.options">
        <div slot="header">
          <h4 class="card-title">Growth chart</h4>
          <p class="category">Height growth</p>
        </div>
        <div class="stats" slot="footer-title">
          <i class="ti-check"></i> Data information certified
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Height

          </div>
        </div>
      </chart-card>
    </div>
    <div class="col-sm-6 col-xs-12">
      <chart-card :chart-data="weightChart.data" :chart-options="weightChart.options">
        <div slot="header">
          <h4 class="card-title">Growth chart</h4>
          <p class="category">Weight growth</p>
        </div>
        <div class="stats" slot="footer-title">
          <i class="ti-check"></i> Data information certified
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Weight
          </div>
        </div>
      </chart-card>
    </div>

    <div class="col-xs-12">
      <time-line type="simple">
        <time-line-item class="timeline-inverted" v-for="item in medicale" :key="item.name"
                        :badge-type="item.done ? 'success': 'danger' " :badgeIcon="item.done ? 'ti-check-box' : 'fa fa-exclamation'">
          <span slot="header" class="label">{{item.name}}</span>
          <div slot="body">
            <div class="text-danger">Descriere</div>
            <div>{{item.description}}</div>

            <div class="text-danger">Notite</div>
            <div>{{item.notes}}</div>
          </div>

          <h6 slot="footer">

            <div v-if="item.date">{{item.date}}</div>
            <div v-if="!item.done">
              <div class="text-danger"> <i class="ti-time"></i> Due date</div>
              <div>saptamana {{item.week}}</div>
            </div>
          </h6>
        </time-line-item>
      </time-line>
    </div>
  </div>
</template>
<script>
  import TimeLine from './Stats/TimeLine.vue'
  import TimeLineItem from './Stats/TimeLineItem.vue'
  import TaskList from './Stats/TaskList'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      TaskList
    },
    data () {
      return {
        weeks: [{week: 1, status: 'error'}, {week: 6, status: 'success'}, {week: 8, status: 'finish'}],
        medicale: [
          {
            week: 1,
            name: 'Screening boli metabolice',
            required: false,
            description: 'Screening boli metabolice care trebuie facut in prima saptamana',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 1,
            name: 'BCG (vaccin anti-tuberculoza)',
            required: true,
            description: 'BCG(vaccin anti-tuberculoza)',
            notes: '',
            files: [],
            done: false,
            date: ''
          },
          {
            week: 1,
            name: 'EUVAX(vaccin anti-hepatita B)',
            required: true,
            description: 'EUVAX(vaccin anti-hepatita B)',
            notes: 'Am facut vaccina in Cluj la spitalul public',
            files: [],
            done: true,
            date: ''
          },
          {
            week: 1,
            name: 'Screening oftalmologic',
            required: true,
            description: 'Screening oftalmologic care trebuie facut in prima saptamana',
            notes: '',
            files: [],
            done: true,
            date: ''
          },
          {
            week: 6,
            name: 'Bilirubina',
            required: false,
            description: 'Bilirubina care trebuie facut in a 2-a saptamana',
            notes: '',
            files: [],
            done: true,
            date: ''
          }
        ],
        salesChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [50, 52, 60, 61, 61, 65, 69, 70, 71, 72, 75, 78]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        weightChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [3100, 3700, 5000, 5500, 6500, 7000, 7120, 7520, 8000, 8250, 8400, 9000]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        }
      }
    }
  }
</script>
<style>
</style>
