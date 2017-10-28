<template>
  <div class="row">
    <div class="col-sm-6 col-xs-12">
      <card>
        <h5 slot="header"></h5>
        <div>
          <canvas id="heightChart" width="250" height="250"></canvas>
        </div>
        <div slot="footer">
          <el-alert
            title="Se pare ca Sofia nu creste suficient!"
            type="error"
            description="Asigura-te ca cantarul functioneaza, si ca copilul a fosit acelasi cantar pentru monitorizarea greutatii."
            class="animated infinite pulse"
          >
          </el-alert>
          <el-row type="flex" justify="center" style="margin-top: 10px;">
            <el-button type="success">Contacteaza un doctor!</el-button>
          </el-row>

        </div>
      </card>
    </div>
    <div class="col-sm-6 col-xs-12">
      <card>
        <h5 slot="header"></h5>
        <div>
          <canvas id="weightChart" width="250" height="250"></canvas>
        </div>
        <div slot="footer">
          <el-alert
            title="Se pare ca Sofia este sub lmitita de greutate!"
            type="error"
            description="Ar fi bine sa fie consultata de un medic pediatru.  Asigura-te ca cantarul functioneaza, si ca copilul a fosit acelasi cantar pentru monitorizarea greutatii."
            class="animated infinite pulse"
          >
          </el-alert>
          <el-row type="flex" justify="center" style="margin-top: 10px;">
            <el-button type="success">Contacteaza un doctor!</el-button>
          </el-row>

        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import TimeLine from './Stats/TimeLine.vue'
  import TimeLineItem from './Stats/TimeLineItem.vue'
  import TaskList from './Stats/TaskList'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import Chart from 'chart.js'

  var chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(231,233,237)'
  };
  export default {
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      TaskList,
      Card
    },
    data() {
      return {}
    },
    mounted() {
      var options = {
        type: 'line',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [
            {
              label: 'Greutate',
              data: [2.6, 3, 3.2, 3.4, 3.2],
              borderWidth: 3,
              fill: false,
              backgroundColor: '#89cff0',
              borderColor: '#89cff0',
            },
            {
              label: 'Limita inferioara',
              data: [2.4, 2.5, 2.7, 2.9, 3.2],
              borderWidth: 1,
              fill: 2,
              backgroundColor: 'rgba(116, 230, 152, 0.1)',
              borderColor: '#54b07d',
            },
            {
              label: 'Limita superioara',
              data: [4.2, 4.4, 4.6, 5, 5.3],
              borderWidth: 1,
              fill: false,
              backgroundColor: 'rgba(116, 230, 152, 0.1)',
              borderColor: '#54b07d',
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Grafic greutate',
            fontColor: '#89cff0',
            fontSize: 20
          },
          scales: {
            yAxes: [{
              ticks: {
                reverse: false
              }
            }]
          },
          plugins: {
            filler: {
              propagate: true
            }
          }
        }
      }

      var heightOptions = {

        type: 'line',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [
            {
              label: 'Inaltime',
              data: [48, 49, 50, 51, 51],
              borderWidth: 3,
              fill: false,
              backgroundColor: '#89cff0',
              borderColor: '#89cff0',
            },
            {
              label: 'Limita inferioara',
              data: [45.6, 50, 53, 55, 58],
              borderWidth: 1,
              fill: 2,
              backgroundColor: 'rgba(116, 230, 152, 0.1)',
              borderColor: '#54b07d',
            },
            {
              label: 'Limita superioara',
              data: [52.7, 57, 60.5, 63.1, 67],
              borderWidth: 1,
              fill: false,
              backgroundColor: 'rgba(116, 230, 152, 0.1)',
              borderColor: '#54b07d',
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Grafic crestere',
            fontColor: '#89cff0',
            fontSize: 20
          },
          scales: {
            yAxes: [{
              ticks: {
                reverse: false
              }
            }]
          },
          plugins: {
            filler: {
              propagate: true
            }
          }
        }

      }

      var ctx = document.getElementById('weightChart').getContext('2d')
      var ctx2 = document.getElementById('heightChart').getContext('2d')
      var myChart = new Chart(ctx, options)
      var myChart2 = new Chart(ctx2, heightOptions)
    }
  }
</script>
<style>
  .el-alert {
    animation-duration: 5s;
    animation-delay: 5s;
    animation-iteration-count: infinite;
  }
</style>
