<template>
  <CRow>
    <Weather />
    <CCol :md="9">
      <WidgetsStatsA />
      <WidgetsStatsD />
    </CCol>
  </CRow>
</template>

<script>
import Weather from './widgets/Weather.vue'
import WidgetsStatsA from './widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsD from './widgets/WidgetsStatsTypeD.vue'

export default {
  name: 'Dashboard',
  components: {
    Weather,
    WidgetsStatsA,
    WidgetsStatsD,
  },
}
</script>
