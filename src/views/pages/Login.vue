<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <div class="bg-white text-center pd-t-20">
            <img src="@/assets/images/favicon-96x96.png" />
            <h1>GREEN HOUSE</h1>
          </div>
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <p class="text-center p-bold">
                    Đăng nhập vào tài khoản của bạn
                  </p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autocomplete="username"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="success" class="px-4">
                        Đăng nhập
                      </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Quên mật khẩu?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-success py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Đăng ký</h2>
                  <p>
                    Nếu bạn chưa có tài khoản, hãy thực hiện đăng ký ngay tại
                    đây để cùng trải nghiệm với chúng tôi!
                  </p>
                  <CButton color="light" variant="outline" class="mt-3">
                    Đăng ký ngay bây giờ!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
.bg-white {
  background-color: #fff;
}
.pd-t-20 {
  padding-top: 20px;
}
.p-bold {
  font-size: 20px;
  font-weight: 700;
  padding-top: 10px;
}
h1 {
  color: #2eb85c;
}
</style>
