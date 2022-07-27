<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CCardBody>
          <CRow>
            <CCol :sm="5">
              <h4 id="traffic" class="card-title mb-0">Thời tiết</h4>
              <div class="small text-medium-emphasis">January 2021</div>
            </CCol>
            <CCol :sm="7" class="d-none d-md-block">
              <CButton color="primary" class="float-end">
                <CIcon icon="cil-cloud-download" />
              </CButton>
              <CButtonGroup
                class="float-end me-3"
                role="group"
                aria-label="Basic outlined "
              >
                <CButton color="secondary" variant="outline" active
                  >Day</CButton
                >
                <CButton color="secondary" variant="outline">Month</CButton>
                <CButton color="secondary" variant="outline">Year</CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
          <CRow>
            <MainChart
              style="height: 300px; max-height: 300px; margin-top: 40px"
            />
          </CRow>
        </CCardBody>
        <CCardFooter>
          <CRow :xs="{ cols: 1 }" :md="{ cols: 2 }" class="text-center">
            <CCol class="mb-sm-2 mb-0">
              <div class="text-medium-emphasis">
                Nhiệt độ cao nhất trong ngày
              </div>
              <CProgress
                class="mt-2"
                color="success"
                thin
                :precision="1"
                :value="100"
              />
            </CCol>
            <CCol class="mb-sm-2 mb-0 d-md-down-none">
              <div class="text-medium-emphasis">
                Nhiệt độ thấp nhất trong ngày
              </div>
              <CProgress
                class="mt-2"
                color="info"
                thin
                :precision="1"
                :value="100"
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import MainChart from '../charts/MainChart.vue'
export default {
  name: 'WidgetsStatsA',
  components: { MainChart },
}
</script>
