
<!-- vue 플러그인 임포트   -->
<script src="https://unpkg.com/vue@2.7.8/dist/vue.js">/* vue 플러그인 임포트 */</script>
<script src="https://unpkg.com/vuex@3.6.2/dist/vuex.js"> /* vuex 플러그인 임포트 */</script>
<script src="https://unpkg.com/vue-router@3.5.4/dist/vue-router.js"> /* vue 라우터 플러그인 임포트 */</script>
<script src="https://unpkg.com/axios/dist/axios.min.js"> /* axios 플러그인 임포트 */</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"> /* jQuery 플러그인 임포트 */</script>
<script>

new Vue({
  el: '#app',
  // =======================
  data: {
    title: 'Timer',
    timer: null,
    totalTime: (1 * 60),
    resetButton: false,
  },
  // =======================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = nullthis.resetButton = true;
    },
    resetTimer: function() {
      this.totalTime = (1 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      if(this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer;
      }
    }
  },
  // =======================
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
});   
 
</script>
