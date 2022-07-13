<template>
  <CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Launch demo modal</CButton>
  <CModal alignment="center" :visible="visibleVerticallyCenteredDemo" @close="() => { visibleVerticallyCenteredDemo = false }">
    <CModalHeader>
      <CModalTitle>Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleVerticallyCenteredDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
  export default {
    data() {
      return { 
        visibleVerticallyCenteredDemo: false,
      }
    }
  }
</script>