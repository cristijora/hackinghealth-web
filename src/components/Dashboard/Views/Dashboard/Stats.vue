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
        <time-line-item class="timeline-inverted" badge-type="success" badgeIcon="ti-check-box">
          <span slot="header" class="label label-danger">Investigatii hemoglobina</span>
          <p slot="body">Am facut investigatii la hemoglobina</p>

          <h6 slot="footer">
            <i class="ti-time"></i>
            11 hours ago
          </h6>
        </time-line-item>

        <time-line-item class="timeline-inverted" badge-type="warning" badgeIcon="ti-info-alt">
          <span slot="header" class="label label-info">Investigatii auz</span>
          <p slot="body">Investigatii auz la medicul de familie. Avem mici probleme cu auzul.</p>
          <h6 slot="footer">
            <i class="ti-time"></i>
            2 days ago
          </h6>
        </time-line-item>

        <time-line-item class="timeline-inverted" badge-type="info" badgeIcon="ti-gallery">
          <span slot="header" class="label label-success">VACCINARE BCG</span>
          <div slot="body">
            <p>Vaccinare BCG</p>
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/se103124e44fdbcbf/image/id612437c0f180d0e/version/1454157528/image.jpg" width="100" alt="">
            <hr>
            <h6 slot="footer">
              <i class="ti-time"></i>
              7 days ago
            </h6>
          </div>
        </time-line-item>

      </time-line>
    </div>
    <!--<div class="col-xs-12">-->

      <!--<div class="card card-chat">-->
        <!--<div class="card-header">-->
          <!--<h4 class="card-title">Chat</h4>-->
          <!--<p class="category">With Tania Andrew</p>-->
        <!--</div>-->
        <!--<div class="card-content">-->
          <!--<ol class="chat">-->
            <!--<li class="other">-->
              <!--<div class="avatar">-->
                <!--<img src="static/img/faces/face-2.jpg" alt="crash"/>-->
              <!--</div>-->
              <!--<div class="msg">-->
                <!--<p>-->
                  <!--Hola!-->
                  <!--How are you?-->
                <!--</p>-->
                <!--<div class="card-footer">-->
                  <!--<i class="ti-check"></i>-->
                  <!--<h6>11:20</h6>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="self">-->
              <!--<div class="msg">-->
                <!--<p>-->
                  <!--Puff...-->
                  <!--I'm alright. How are you?-->
                <!--</p>-->
                <!--<div class="card-footer">-->
                  <!--<i class="ti-check"></i>-->
                  <!--<h6>11:22</h6>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="avatar">-->
                <!--<img src="static/img/default-avatar.png" alt="crash"/>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="other">-->
              <!--<div class="avatar">-->
                <!--<img src="static/img/faces/face-2.jpg" alt="crash"/>-->
              <!--</div>-->
              <!--<div class="msg">-->
                <!--<p>-->
                  <!--I'm ok too!-->
                <!--</p>-->
                <!--<div class="card-footer">-->
                  <!--<i class="ti-check"></i>-->
                  <!--<h6>11:24</h6>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li class="self">-->
              <!--<div class="msg">-->
                <!--<p>-->
                  <!--Well, it was nice hearing from you.-->
                <!--</p>-->
                <!--<div class="card-footer">-->
                  <!--<i class="ti-check"></i>-->
                  <!--<h6>11:25</h6>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="no-avatar"></div>-->
            <!--</li>-->
            <!--<li class="self">-->
              <!--<div class="msg">-->
                <!--<p>-->
                  <!--OK, bye-bye-->
                  <!--See you!-->
                <!--</p>-->
                <!--<div class="card-footer">-->
                  <!--<i class="ti-check"></i>-->
                  <!--<h6>11:25</h6>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="avatar">-->
                <!--<img src="static/img/default-avatar.png" alt="crash"/>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ol>-->
          <!--<hr>-->
          <!--<div class="send-message">-->
            <!--<div class="avatar">-->
              <!--<img src="static/img/default-avatar.png" alt="crash"/>-->
            <!--</div>-->
            <!--<input class="form-control textarea" type="text" placeholder="Type here!"/>-->
            <!--<div class="send-button">-->
              <!--<button class="btn btn-primary btn-fill">Send</button>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
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
