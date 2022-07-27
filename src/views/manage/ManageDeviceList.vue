<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CHeader>
          <CContainer fluid>
            <CHeaderBrand href="#">Danh sách nhà kính</CHeaderBrand>
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
                      visibleVerticallyCenteredDemo = true
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
                <CTableHeaderCell class="text-center"
                  >Mã số nhà</CTableHeaderCell
                >
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
    :visible="visibleVerticallyCenteredDemo"
    @close="
      () => {
        visibleVerticallyCenteredDemo = false
      }
    "
  >
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
                required
              />
              <CFormFeedback tooltip invalid>
                Please choose a username.
              </CFormFeedback>
            </CInputGroup>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Tên nhà kính</CFormLabel>
            <CFormInput
              id="validationTooltip05"
              v-model="house.name"
              required
            />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Diện tích</CFormLabel>
            <CFormInput
              id="validationTooltip05"
              v-model="house.areage"
              required
            />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
        </CRow>
        <CRow>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">Địa chỉ</CFormLabel>
            <CFormInput
              id="validationTooltip05"
              v-model="house.address"
              required
            />
            <CFormFeedback tooltip invalid>
              Please provide a valid zip.
            </CFormFeedback>
          </CCol>
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
            visibleVerticallyCenteredDemo = false
          }
        "
      >
        Close
      </CButton>
      <CButton @click="btnAddUserOnClick" color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ManageHomeList',
  components: {},
  data() {
    return {
      visible: true,
      visibleVerticallyCenteredDemo: false,
      tableSmartHome: [],
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8000/device')
    const results = response.data.content
    const tableSmartHome = []
    let key = 0
    results.map((item) => {
      tableSmartHome[key] = {
        user: {
          name: item.name,
          serial: item._id,
          address: item._id,
        },
        usage: {
          value: Math.round((40 / 100) * 100),
          color: 'success',
        },
        activity: item.status,
      }
      key++
    })
    console.log(tableSmartHome)
    this.tableSmartHome = tableSmartHome
    return { tableSmartHome }
  },
  methods: {
    /**
     * Mở dialog thêm tài khoản quản lý nhà kính
     * Author: Trần Phú Quân
     */
    async btnAddDeviceOnClick() {
      //this.formMode = 0
      await axios.post('http://localhost:8000/device', {
        name: this.house.name,
        areage: this.house.areage,
        userId: this.house.userId,
        address: this.house.address,
        device: this.house.device,
      })
      this.showDialog(true)
    },
  },
}
</script>
