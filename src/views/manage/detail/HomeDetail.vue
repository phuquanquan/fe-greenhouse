<template>
  <!--Modal-->
  <CModal size="xl" alignment="center">
    <CModalHeader>
      <CModalTitle>Thêm nhà kính</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3">
        <CRow>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltipUsername">Mã nhà kính</CFormLabel>
            <CInputGroup class="has-validation">
              <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
              <CFormInput
                id="validationTooltipUsername"
                value=""
                aria-describedby="inputGroupPrepend"
                disabled="false"
                required
              />
              <CFormFeedback tooltip invalid>
                Please choose a username.
              </CFormFeedback>
            </CInputGroup>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Tên nhà kính</CFormLabel>
            <CFormInput id="validationTooltip05" required />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Diện tích</CFormLabel>
            <CFormInput id="validationTooltip05" required />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
        </CRow>
        <CRow>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Địa chỉ</CFormLabel>
            <CFormInput id="validationTooltip05" required />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
        </CRow>
        <CFormLabel for="basic-url">Các thiết bị có trong nhà:</CFormLabel>
        <CRow v-for="item in (1, 2, 3, 4, 5)" :key="item">
          <CInputGroup class="mb-3">
            <CInputGroupText
              style="width: 155px; display: block"
              id="basic-addon3"
              >{{ listDevices[item - 1] }}</CInputGroupText
            >
            <CFormInput
              placeholder="Nhập serial thiết bị tại đây để kết nối"
              aria-label="Text input with dropdown button"
            />
            <CButton type="button" color="primary" variant="outline"
              >Connect</CButton
            >
          </CInputGroup>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormCheck
              feedbackInvalid="You must agree before submitting."
              id="invalidCheck"
              label="Xác nhận thêm mới/thay đổi nhà kính thông minh"
              required
              type="checkbox"
            />
          </CCol>
        </CRow>
      </CForm>
    </CModalBody>
    <CModalFooter>
      <CButton
        color="secondary"
        @click="
          () => {
            visibleVerticallyCentered = false
          }
        "
      >
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
export default {
  name: 'HomeDetail',
  component: {},
}
</script>
