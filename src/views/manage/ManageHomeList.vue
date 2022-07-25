<template>
  <div>
    <!-- Loading -->
    <!-- <Loading
    :active="isLoading"
    :can-cancel="false"
    :color="color"
    :is-full-page="fullPage"
  /> -->
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
                  <CTableHeaderCell class="text-center"
                    >Địa chỉ</CTableHeaderCell
                  >
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
                <CTableRow
                  v-for="(item, key) in tableSmartHome"
                  :key="item.name"
                >
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
    <HomeDetail v-if="visibleVerticallyCentered" />
  </div>
</template>

<script>
import axios from 'axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// import $ from 'jquery'
import { FormMode } from '@/enums/GEnum'
import HomeDetail from './detail/HomeDetail.vue'
export default {
  name: 'ManageHomeList',
  components: { Loading, HomeDetail },
  watch: {
    /**
     * Khi giá trị ô tìm kiếm thay đổi sẽ load lại danh sách nhân viên tương ứng
     * Author: Trần Phú Quân (28/6/2022)
     */
    HomeFilter: function (value) {
      this.HomeFilter = value
    },
  },
  methods: {
    /**
     * Hàm xóa 1 nhà kính
     * Author: Trần Phú Quân (25/6/2022)
     */
    deleteHome() {
      var me = this

      if (me.isDeleteMultiple == false) {
        axios
          .delete(`http://localhost:39593/api/v1/Homes/${me.HomeSelectedId}`)
          .then(function () {
            // Nếu xóa thành công: mở thông báo xóa thành công và load lại danh sách
            me.loadListHome()

            // Thông báo message
            me.openSuccess('Xóa nhà kính thành công')
          })
          .catch(function () {
            me.$alert(
              `Có lỗi xảy ra vui lòng liên hệ Admin để được trợ giúp`,
              'Thông báo',
              { confirmButtonText: 'OK', type: 'error' },
            )
          })
      }
    },
    /**
     * Hàm thực hiện tìm kiếm
     * Author: Nguyễn Hoàng Anh(28/6/2022)
     */
    filterHome(e) {
      var me = this
      clearTimeout(me.timer)
      me.timer = setTimeout(() => {
        me.page = 1
        me.loadListHome()
      }, 555)
    },
    /**
     * Mở confirm dialog xóa nhà kính
     * Author: Trần Phú Quân (22/6/2022)
     */
    btnXoaOnClick(emp) {
      this.isDeleteMultiple = false
      this.HomeSelectedId = emp.HomeId
      this.messageCf = `Bạn có thực sự muốn xóa Nhà kính <${emp.HomeCode}> không?`
      this.IsShowCfDialog = true
    },
    /**
     * Sự kiện kích đúp vào 1 dòng trên table danh sách nhân viên
     * Author: Trần Phú Quân (22/6/2022)
     */
    rowOnDbClick(emp) {
      this.formMode = FormMode.EDIT
      this.Homes.forEach((Home) => {
        this.$set(Home, 'isFocus', false)
      })
      if (emp.isFocus == undefined || emp.isFocus == false) {
        emp.isFocus = true
      } else {
        emp.isFocus = false
      }
      this.HomeSelectedId = emp.HomeId
      this.showDialog(true)
    },
    /**
     * Hàm đóng confirm dialog
     * Author: Trần Phú Quân (25/6/2022)
     */
    closeCfDialog(isShow) {
      this.IsShowCfDialog = isShow
    },
    /**
     * Mở Dialog Edit nhà kính
     * Author: Nguyễn Hoàng Anh (22/6/2022)
     */
    btnEditOnClick(emp) {
      this.formMode = FormMode.EDIT
      this.Homes.forEach((Home) => {
        this.$set(Home, 'isFocus', false)
      })
      if (emp.isFocus == undefined || emp.isFocus == false) {
        emp.isFocus = true
      } else {
        emp.isFocus = false
      }
      this.HomeSelectedId = emp.HomeId
      this.showDialog(true)
    },
    /**
     * Focus vào dòng khi click vào
     * Author: Trần Phú Quân (12/7/2022)
     */
    rowOnClick(emp) {
      this.Homes.forEach((Home) => {
        this.$set(Home, 'isFocus', false)
      })
      if (emp.isFocus == undefined || emp.isFocus == false) {
        emp.isFocus = true
      } else {
        emp.isFocus = false
      }
    },
    /**
     * Focus vào dòng khi mở menu con
     * Author: Trần :Phú Quân (12/7/2022)
     */
    openOptionsOnClick(emp) {
      this.Homes.forEach((Home) => {
        this.$set(Home, 'isFocus', false)
      })
      if (emp.isFocus == undefined || emp.isFocus == false) {
        emp.isFocus = true
      } else {
        emp.isFocus = false
      }
    },
    /**
     * Load danh sách nhà kính
     * Author: Trần Phú Quân (28/6/2022) updated
     */
    loadListHome() {
      // Giữ con trỏ this
      var me = this

      me.isLoading = true

      me.isSelectedAll = false

      // Tạo query string
      var str = 'http://localhost:8000/green-houses'

      if (me.HomeFilter) {
        str += `&HomeFilter=${me.HomeFilter}`
      }

      try {
        axios
          .get(str)
          .then(function (res) {
            me.Homes = res.data.Data
            me.totalPage = res.data.TotalPage
            me.TotalRecord = res.data.TotalRecord
            me.isLoading = false
          })
          .catch(function (res) {
            console.log(res)
          })
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Mở thông báo success
     * Author: Trần Phú Quân (8/7/2022)
     */
    openSuccess(message) {
      this.$message({
        message: message,
        type: 'success',
      })
    },
  },
  data() {
    return {
      // Biến chứa Id của nhân viên
      HomeSelectedId: null,
      // List chứa danh sách nhân viên
      Homes: [],
      // Biến xác định confirm dialog mở hay đóng
      IsShowCfDialog: false,
      // Biến xác định form thêm mới hay sửa (0 là thêm mới, 1 là sửa)
      formMode: 0,
      visible: true,
      // Biến xác định mở hay đóng dialog
      visibleVerticallyCentered: false,
      // Danh sách thiết bị có thể có trong một nhà kính
      listDevices: [
        'Máy bơm',
        'Bóng đèn',
        'Quạt điện',
        'Cảm biến nhiệt độ',
        'Cảm biến độ ẩm',
      ],
      // Biến kiểm tra có mở loading không
      isLoading: false,
      // Biến kiểm tra phần loading có mở toàn bộ trang không
      fullPage: false,
      // Biến xác định màu loading
      color: '#2ca01c',
      // Biến chứa thông tin lọc nhân viên
      HomeFilter: null,
      // Biến xác định time out khi thực hiện tìm kiếm
      timer: null,
      // Biến lưu message cho confirm dialog
      messageCf: null,
    }
  },

  created() {
    /**
     * Lấy danh sách nhân viên
     * Author: Nguyễn Hoàng Anh (22/6/2022)
     */
    this.loadListHome()
  },
}
</script>

<style lang="scss" scoped>
.col {
  padding-top: 16px;
}
</style>
