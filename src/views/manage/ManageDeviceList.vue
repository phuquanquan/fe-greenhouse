<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CHeader>
          <CContainer fluid>
            <CHeaderBrand href="#">Danh sách nhà thông minh</CHeaderBrand>
            <CHeaderToggler @click="visible = !visible" />
            <CCollapse class="header-collapse" :visible="visible">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Nhập vào đây để tìm"
                />
                <button class="btn btn-outline-success me-md-2" type="submit">
                  Search
                </button>
                <CButton
                  @click="
                    () => {
                      visibleVerticallyCentered = true
                    }
                  "
                  component="input"
                  type="button"
                  color="success"
                  value="Thêm thiết bị"
                />
              </form>
            </CCollapse>
          </CContainer>
        </CHeader>
        <CCardBody>
          <CTable align="middle" class="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell class="text-center">STT</CTableHeaderCell>
                <CTableHeaderCell>Tên thiết bị</CTableHeaderCell>
                <CTableHeaderCell class="text-center">Serial</CTableHeaderCell>
                <CTableHeaderCell class="text-center"
                  >Được lắp đặt ở</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Đang hoạt động</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Chức năng</CTableHeaderCell
                >
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(item, key) in tableSmartHome" :key="item.name">
                <CTableDataCell class="text-center">
                  {{ key + 1 }}
                </CTableDataCell>
                <CTableDataCell>
                  <div>{{ item.user.name }}</div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div class="small text-medium-emphasis">
                    {{ item.user.serial }}
                  </div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div>{{ item.user.address }}</div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <span>{{
                    item.activity ? 'Đang hoạt động' : 'Đang tắt'
                  }}</span>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <CButtonGroup
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <CButton color="success">Bật / Tắt</CButton>
                    <CButton color="secondary">Sửa</CButton>
                    <CButton color="primary">Xóa</CButton>
                  </CButtonGroup>
                </CTableDataCell>
              </CTableRow>
              <CTableRow> </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>

  <!--Modal-->
  <CModal
    size="xl"
    alignment="center"
    :visible="visibleVerticallyCentered"
    @close="
      () => {
        visibleVerticallyCentered = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Thêm thiết bị</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3">
        <CRow>
          <CCol>
            <CFormLabel for="validationDefaultUsername"
              >Tên thiết bị</CFormLabel
            >
            <CFormSelect
              aria-label="Default select example"
              :options="[
                'Mở menu chọn này',
                { label: 'Bóng đèn', value: '1' },
                { label: 'Quạt điện', value: '2' },
                { label: 'Máy bơm', value: '3' },
              ]"
            >
            </CFormSelect>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Serial Code</CFormLabel>
            <CFormInput id="validationTooltip05" required />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
          <CCol>
            <CFormLabel for="basic-url">Loại tài khoản</CFormLabel>
            <CFormSelect
              aria-label="Default select example"
              :options="[
                'Mở menu chọn này',
                { label: 'Bóng đèn', value: '1' },
                { label: 'Quạt điện', value: '2' },
                { label: 'Máy bơm', value: '3' },
              ]"
            >
            </CFormSelect>
          </CCol>
        </CRow>
        <CFormLabel for="basic-url">Cho phép quản lý các nhà kính:</CFormLabel>
        <CRow v-for="item in (1, 2, 3)" :key="item">
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CFormCheck
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </CInputGroupText>
            <CFormInput
              aria-label="Text input with checkbox"
              disabled="false"
              value="Nhà kính 1. Đ/c: Tầng 4, phòng 2, 40 ngõ 50 phố Xã Đàn, Phương Liên, Đống Đa, Hà Nội"
            />
          </CInputGroup>
        </CRow>
        <CRow>
          <CCol xs="12">
            <CFormCheck
              feedbackInvalid="You must agree before submitting."
              id="invalidCheck"
              label="Xác nhận cấp quyền cho tài khoản người dùng này quản lý nhà kính"
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
  name: 'ManageHomeList',
  components: {},
  data() {
    return {
      visible: true,
      visibleVerticallyCentered: false,
    }
  },
  setup() {
    const tableSmartHome = [
      {
        user: {
          name: 'Quạt điện',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng 1, VinHome Royal City',
        },
        usage: {
          value: Math.round((40 / 100) * 100),
          color: 'success',
        },
        activity: false,
      },
    ]

    return {
      tableSmartHome,
    }
  },
}
</script>

<style lang="scss" scoped>
.col {
  padding-top: 16px;
}
</style>
