<template>
  <CCol :xs="3">
    <div class="container">
      <div class="header-weather">Thông tin thời tiết bên ngoài</div>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          class="search-input font-nomal"
          placeholder="Tìm kiếm"
          @change="getAPI"
        />
      </div>
      <div>
        <div class="time">
          <span class="font-nomal">{{ time }}</span>
        </div>
        <div class="hour">
          <span class="font-bold">{{ time1 }}</span>
        </div>
        <div v-if="data.data" class="address">{{ data.data.name }}</div>
        <div v-else class="address">- -</div>
      </div>
      <div>
        <img class="image" :src="srcImage" />
        <p class="temperature font-nomal">{{ temperature(data) }}</p>
        <span class="current-day font-nomal text-up">{{ time2 }}</span>
        <p class="line"></p>
      </div>
      <div class="footer-weather">
        <div class="footer-left">
          <p class="font-bold">
            MT Mọc: <span class="font-nomal"> {{ sunrise }} </span>
          </p>
          <p class="font-bold">
            Độ ẩm: <span class="font-nomal"> {{ humidity }}%</span>
          </p>
        </div>
        <div class="footer-right">
          <p class="font-bold">
            MT Lặn: <span class="font-nomal"> {{ sundown }} </span>
          </p>
          <p class="font-bold">
            Gió: <span class="font-nomal"> {{ wind }} m/s </span>
          </p>
        </div>
      </div>
    </div>
  </CCol>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

const getData = (params) =>
  axios.get(`https://api.openweathermap.org/data/2.5/weather`, { params })

export default {
  name: 'Weather',
  components: {},
  data: function () {
    return {
      city: '',
      data: '- -',
    }
  },
  computed: {
    srcImage() {
      if (this.data.data) {
        return `http://openweathermap.org/img/wn/${this.data.data.weather[0].icon}@2x.png`
      }

      return 'http://openweathermap.org/img/wn/10d@2x.png'
    },

    sunrise() {
      if (this.data.data) {
        const sunrise = this.data.data.sys.sunrise

        return moment.unix(sunrise).format('H:mm')
      }

      return '6:16'
    },

    sundown() {
      if (this.data.data) {
        const sundown = this.data.data.sys.sunset

        return moment.unix(sundown).format('H:mm')
      }

      return '6:00'
    },

    humidity() {
      if (this.data.data) {
        return this.data.data.main.humidity
      }

      return '80'
    },

    wind() {
      if (this.data.data) {
        return (this.data.data.wind.speed * 3.6).toFixed(2)
      }
      return '19.54'
    },

    time() {
      const date = moment(new Date())

      return date.locale('vi').format('dddd, Do MMMM')
    },

    time1() {
      const date = moment(new Date())

      return date.locale('vi').format('hh:mm')
    },

    time2() {
      const date = moment(new Date())

      return date.locale('vi').format('dddd')
    },
  },

  methods: {
    async getAPI() {
      try {
        const data = await getData({
          q: this.city,
          appid: '45574151a585f0f8674ac9b79324fc56',
          units: 'metric',
          lang: 'vi',
        }).then((response) => ({
          data: response.data,
        }))

        this.data = data
      } catch (e) {
        return { data: [] }
      }
    },

    temperature(value) {
      if (value.data) {
        const temperature = Math.round(value.data.main.temp)
        return temperature
      }

      return 23
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  background: rgb(254, 219, 101);
  background: linear-gradient(
    360deg,
    rgba(254, 219, 101, 1) 0%,
    rgba(214, 99, 134, 1) 100%
  );
  border-radius: 15px;
  margin-bottom: 20px;
  text-align: center;
}
.header-weather {
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
}
.search-input {
  border: 0;
  outline: 0;
  padding: 3px;
  background: transparent;
  height: 20px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  &::placeholder {
    color: rgb(206, 206, 206);
    text-align: center;
  }
}
.text-up {
  text-transform: uppercase;
}
.search-bar {
  width: 50%;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
}
.time {
  color: white;
  margin: 40px;
  font-size: 20px;
  text-transform: uppercase;
}

.hour {
  color: white;
  margin: 40px;
  font-size: 25px;
  font-weight: bold;
}
.address {
  color: white;
  margin: 40px;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.temperature {
  color: white;
  font-size: 80px;
  font-weight: lighter;
  line-height: 1;
  position: relative;
  margin-top: 10px;
  margin-bottom: 50px;
  &::after {
    content: 'o';
    position: absolute;
    font-size: 30px;
  }
}
.current-day {
  color: white;
  font-size: 27px;
}

.line {
  width: 80%;
  border: 1px solid white;
  margin-left: 10%;
  margin-bottom: 20px;
}
.footer-weather {
  display: flex;
  justify-content: space-around;
  color: white;
}

.font-bold {
  font-weight: bold;
  margin: 5px;
  color: black;
}
.font-nomal {
  font-weight: normal;
  color: black;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>
