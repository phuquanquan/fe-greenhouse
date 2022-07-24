<template>
  <CRow>
    <CCol :sm="6" :lg="3">
      <CWidgetStatsD
        class="mb-4"
        style="--cui-card-cap-bg: #3b5998"
        :values="[
          { title: 'Tổng số quạt', value: '100' },
          { title: 'Đang bật', value: '45' },
        ]"
      >
        <template #icon
          ><CIcon icon="cib-apache-airflow" height="52" class="my-4 text-white"
        /></template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="3">
      <CWidgetStatsD
        class="mb-4"
        style="--cui-card-cap-bg: #00aced"
        :values="[
          { title: 'Tổng số bóng đèn', value: '973k' },
          { title: 'Đang bật', value: '1.792' },
        ]"
      >
        <template #icon
          ><CIcon icon="cilLightbulb" height="52" class="my-4 text-white"
        /></template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="3">
      <CWidgetStatsD
        class="mb-4"
        style="--cui-card-cap-bg: #4875b4"
        :values="[
          { title: 'Tổng số máy bơm', value: '500' },
          { title: 'Đang bật', value: '1.292' },
        ]"
      >
        <template #icon
          ><CIcon icon="cibCodewars" height="52" class="my-4 text-white"
        /></template>
      </CWidgetStatsD>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'WidgetsStatsD',
  components: {},
  setup() {
    const options = {
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    }

    return {
      options,
    }
  },
}
</script>

<style lang="scss" scoped>
.col-lg-3 {
  width: 33.3%;
}
</style>
