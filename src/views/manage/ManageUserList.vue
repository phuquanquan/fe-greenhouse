<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CHeader>
          <CContainer fluid>
            <CHeaderBrand href="#"
              >Danh sách tài khoản quản lý nhà kính</CHeaderBrand
            >
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
                  value="Thêm tài khoản quản lý"
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
                <CTableHeaderCell class="text-center"
                  >Tên quản lý</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Số điện thoại</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Loại tài khoản</CTableHeaderCell
                >
                <CTableHeaderCell>Địa chỉ</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="(item, key) in tableUser" :key="item.name">
                <CTableDataCell class="text-center">
                  {{ key + 1 }}
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <CAvatar
                    size="md"
                    :src="item.avatar.src"
                    :status="item.avatar.status"
                  />
                </CTableDataCell>
                <CTableDataCell>
                  <div>{{ item.user.name }}</div>
                  <div class="small text-medium-emphasis">
                    <span>Điện thoại</span> :
                    {{ item.user.phone }}
                  </div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <span>{{ item.user.admin ? 'Admin' : 'Thành viên' }}</span>
                </CTableDataCell>
                <CTableDataCell>
                  <div class="small text-medium-emphasis">Địa chỉ</div>
                  <strong>{{ item.address }}</strong>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <CButtonGroup
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <CButton color="success">Sửa</CButton>
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
      <CModalTitle>Thêm tài khoản quản lý nhà kính</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CForm class="row g-3">
        <CRow>
          <CCol>
            <CFormLabel for="validationDefaultUsername"
              >Tên tài khoản</CFormLabel
            >
            <CInputGroup class="has-validation">
              <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
              <CFormInput
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend"
                feedbackInvalid="Please choose a username."
                required
              />
            </CInputGroup>
          </CCol>
          <CCol class="position-relative">
            <CFormLabel for="validationTooltip05">User ID</CFormLabel>
            <CFormInput id="validationTooltip05" disabled="false" required />
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
                { label: 'Người xem', value: '1' },
                { label: 'Người điều khiển', value: '2' },
                { label: 'Admin', value: '3', disabled: true },
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
import axios from 'axios'
//import FormMode from '@/enums/GEmun'
import avatar1 from '@/assets/images/avatars/1.jpg'

export default {
  name: 'ManageHomeList',
  components: {},
  methods: {},
  data() {
    return {
      // Biến xác định dialog mở hay đóng
      IsShowDialog: false,
      // Biến xác định form thêm mới hay sửa (0 là thêm mới, 1 là sửa)
      formMode: 0,
      //FormMode,
      visible: true,
      visibleVerticallyCentered: false,
      tableUser: [],
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8000/user')
    const results = response.data.content
    const tableUser = []
    let key = 0
    results.map((item) => {
      tableUser[key] = {
        avatar: { src: avatar1, status: 'success' },
        user: {
          name: item.name,
          admin: true,
          phone: item.phone,
        },
        address: item.address,
      }
      key++
    })
    console.log(tableUser)
    this.tableUser = tableUser
    return { tableUser }
  },
}
</script>

<style lang="scss" scoped>
.col {
  padding-top: 16px;
}
</style>
