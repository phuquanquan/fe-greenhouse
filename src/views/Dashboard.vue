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
import WidgetsStatsA from './widgets/WidgetsA.vue'
import WidgetsStatsD from './widgets/WidgetsD.vue'

export default {
  name: 'Dashboard',
  components: {
    Weather,
    WidgetsStatsA,
    WidgetsStatsD,
  },
}
</script>
