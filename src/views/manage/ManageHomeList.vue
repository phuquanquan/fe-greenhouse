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
                      visibleVerticallyCenteredDemo = true
                    }
                  "
                  component="input"
                  type="button"
                  color="success"
                  value="Thêm nhà thông minh"
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
                <CTableHeaderCell>Tên nhà thông minh</CTableHeaderCell>
                <CTableHeaderCell class="text-center">Địa chỉ</CTableHeaderCell>
                <CTableHeaderCell class="text-center"
                  >Số thiết bị đang hoạt động</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Nhiệt độ</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center">Độ ẩm</CTableHeaderCell>
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
                <CTableDataCell>
                  <div>{{ item.user.name }}</div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div class="small text-medium-emphasis">
                    {{ item.user.registered }}
                  </div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div>{{ item.user.address }}</div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div class="clearfix">
                    <div class="float-start">
                      <strong>{{ item.usage.value }}%</strong>
                    </div>
                  </div>
                  <CProgress
                    thin
                    :color="item.usage.color"
                    :value="item.usage.value"
                  />
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <strong>{{ item.usage.temperature }} &ordm; C</strong>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <strong>{{ item.usage.humidity }}%</strong>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <CButtonGroup
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <CButton color="success">Điều khiển</CButton>
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
            <CDropdown variant="input-group">
              <CDropdownToggle color="secondary" variant="outline"
                >Chọn thiết bị</CDropdownToggle
              >
              <CDropdownMenu>
                <CDropdownItem>Máy bơm</CDropdownItem>
                <CDropdownItem>Đèn điện</CDropdownItem>
                <CDropdownItem>Quạt điện</CDropdownItem>
                <CDropdownItem>CẢm biến nhiệt độ</CDropdownItem>
                <CDropdownItem>Cảm biến độ ẩm</CDropdownItem>
                <CDropdownDivider />
              </CDropdownMenu>
            </CDropdown>
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
            visibleVerticallyCenteredDemo = false
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
import axios from 'axios'
export default {
  name: 'ManageHomeList',
  components: {},
  methods: {
    /**
     * Mở dialog thêm tài khoản quản lý nhà kính
     * Author: Trần Phú Quân
     */
    btnAddUserOnClick() {
      //this.formMode = 0
      this.showDialog(true)
    },
    /**
     * Hàm mở (đóng) dialog
     * Author: Trần Phú Quân
     */
    showDialog(isShow) {
      this.IsShowDialog = isShow
    },
  },
  data() {
    return {
      // Biến xác định dialog mở hay đóng
      IsShowDialog: false,
      // Biến xác định form thêm mới hay sửa (0 là thêm mới, 1 là sửa)
      formMode: 0,
      //FormMode,
      visible: true,
      visibleVerticallyCenteredDemo: false,
      tableSmartHome: [],
    }
  },

  async mounted() {
    const response = await axios.get('http://localhost:8000/green-houses')
    const results = response.data.content
    const tableSmartHome = []
    let key = 0
    results.map((item) => {
      tableSmartHome[key] = {
        user: {
          name: item.name,
          registered: item.device.length,
          address: item.address,
        },
        usage: {
          value: item.device.length,
          color: 'success',
          temperature: item.device[0].value,
          humidity: Math.round((item.device[1].value / 100) * 100),
        },
        activity: '10 sec ago',
      }
      key++
    })
    console.log(tableSmartHome)
    this.tableSmartHome = tableSmartHome
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
