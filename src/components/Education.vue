<template>
  <div >
    <b-alert show variant="info" fade >
      <div class="alert-heading row">
      <h4 class="col-10">
        <font-awesome-icon icon="user-graduate" /> Formation
      </h4>
        <h6  class="col-2 " @click="faExpand"><font-awesome-icon class="float-lg-right  mr-0 pr-0" icon="expand-alt"/> </h6>
      </div>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr>
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </b-alert>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
  methods : {
    faExpand() {
      console.log('aaa')
  }
}
}
</script>

