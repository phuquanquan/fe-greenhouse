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
</template>

<script>
export default {
  name: 'ManageHomeList',
  components: {},
  data() {
    return {
      visible: true,
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
      {
        user: {
          name: 'Điều hòa nhiệt độ',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng khách, VinHome Smart City',
        },
        usage: {
          value: Math.round((22 / 30) * 100),
          color: 'info',
        },
        activity: true,
      },
      {
        user: {
          name: 'Rèm cửa',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng master',
        },
        usage: {
          value: Math.round((74 / 120) * 100),
          color: 'warning',
        },
        activity: false,
      },
      {
        user: {
          name: 'Bóng đèn',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng bếp',
        },
        usage: {
          value: Math.round((98 / 1000) * 100),
          color: 'danger',
        },
        activity: true,
      },
      {
        user: {
          name: 'Bóng đèn',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng xyz',
        },
        usage: {
          value: 22,
          color: 'primary',
        },
        activity: false,
      },
      {
        user: {
          name: 'Bình nóng lạnh',
          serial: 'dfadfdfdsf42343432432',
          address: 'Phòng ABC',
        },
        usage: {
          value: 43,
          color: 'success',
        },
        activity: true,
      },
    ]

    return {
      tableSmartHome,
    }
  },
}
</script>
