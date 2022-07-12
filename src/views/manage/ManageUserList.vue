<template>
  <CRow>
    <CCol :md="12">
      <CCard class="mb-4">
        <CHeader>
          <CContainer fluid>
            <CHeaderBrand href="#"
              >Danh sách tài khoản quản lý nhà thông minh</CHeaderBrand
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
                <CTableHeaderCell class="text-center">User</CTableHeaderCell>
                <CTableHeaderCell>Tên tài khoản</CTableHeaderCell>
                <CTableHeaderCell class="text-center"
                  >Loại tài khoản</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Số lượng nhà quản lý</CTableHeaderCell
                >
                <CTableHeaderCell>Hoạt động</CTableHeaderCell>
                <CTableHeaderCell class="text-center"
                  >Cấp quyền</CTableHeaderCell
                >
                <CTableHeaderCell class="text-center"
                  >Chức năng</CTableHeaderCell
                >
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
                    <span>Add</span> :
                    {{ item.user.registered }}
                  </div>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <span>{{ item.user.admin ? 'Admin' : 'Thành viên' }}</span>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <div>{{ item.numberOfManagers }}</div>
                </CTableDataCell>
                <CTableDataCell>
                  <div class="small text-medium-emphasis">Last login</div>
                  <strong>{{ item.activity }}</strong>
                </CTableDataCell>
                <CTableDataCell class="text-center">
                  <span>{{
                    item.permission ? 'Đã cấp quyền' : 'Chưa cấp quyền'
                  }}</span>
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
</template>

<script>
import avatar1 from '@/assets/images/avatars/1.jpg'
// import avatar2 from '@/assets/images/avatars/2.jpg'
// import avatar3 from '@/assets/images/avatars/3.jpg'
// import avatar4 from '@/assets/images/avatars/4.jpg'
// import avatar5 from '@/assets/images/avatars/5.jpg'
// import avatar6 from '@/assets/images/avatars/6.jpg'
import axios from 'axios'

export default {
  name: 'ManageHomeList',
  components: {},
  data() {
    return {
      visible: true,
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
          registered: 'Jan 1, 2021',
        },
        numberOfManagers: '2',
        activity: '10 sec ago',
        permission: true,
      }
      key++
    })
    console.log(tableUser)
    return { tableUser }
  },
}
</script>
