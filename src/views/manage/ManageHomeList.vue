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
                  >Ngày cập nhật</CTableHeaderCell
                >
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
          name: 'Vinhome Royal City 28-22',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: Math.round((40 / 100) * 100),
          color: 'success',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: '10 sec ago',
      },
      {
        user: {
          name: 'Vinhome Smart City 25-15A',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: Math.round((22 / 30) * 100),
          color: 'info',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: '5 minutes ago',
      },
      {
        user: {
          name: 'Quintin Ed',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: Math.round((74 / 120) * 100),
          color: 'warning',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: '1 hour ago',
      },
      {
        user: {
          name: 'Metro 20-12',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: Math.round((98 / 1000) * 100),
          color: 'danger',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: 'Last month',
      },
      {
        user: {
          name: 'Hotel A25',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: 22,
          color: 'primary',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: 'Last week',
      },
      {
        user: {
          name: 'Ocean Park',
          registered: 'Jan 1, 2021',
          address: '72A Nguyễn Trãi, Thượng Đình, Thanh Xuân, Hà Nội',
        },
        usage: {
          value: 43,
          color: 'success',
          temperature: '30',
          humidity: Math.round((40 / 100) * 100),
        },
        activity: 'Last week',
      },
    ]

    return {
      tableSmartHome,
    }
  },
}
</script>
