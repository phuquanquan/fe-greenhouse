<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <div class="text-center">
                  <img src="@/assets/images/favicon-96x96.png" />
                  <h1>GREEN HOUSE</h1>
                </div>
                <p class="text-center p-bold-bt">Tạo tài khoản của bạn</p>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput placeholder="Username" autocomplete="username" />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput placeholder="Email" autocomplete="email" />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup class="mb-4">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Repeat password"
                    autocomplete="new-password"
                  />
                </CInputGroup>
                <div class="d-grid mb-3">
                  <CButton color="success">Tạo tài khoản</CButton>
                </div>
                <div class="d-grid">
                  <CButton color="link" class="px-0">
                    Nhấn vào đây để đăng nhập!
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',
}
</script>

<style lang="scss" scoped>
.bg-light {
  background-image: url('@/assets/images/background.jpg');
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.p-bold-bt {
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;
  border-top: 1px solid #d8dbe0;
}
h1 {
  color: #2eb85c;
}
</style>
