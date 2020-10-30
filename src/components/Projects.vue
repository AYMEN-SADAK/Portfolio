<template>
  <div >
    <b-alert show variant="success" fade >
      <h4 class="alert-heading"><font-awesome-icon icon="tasks"/> Projects<h6  class="float-lg-right"><font-awesome-icon icon="expand-alt"/> </h6></h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <b-list-group>
        <b-list-group-item  class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </p>

          <small>Donec id elit non mi porta.</small>
        </b-list-group-item>

        <b-list-group-item class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>

          <p class="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </p>

          <small class="text-muted">Donec id elit non mi porta.</small>
        </b-list-group-item>
        <b-collapse id="collapse-1">
          <b-list-group-item  class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Disabled List group item</h5>
              <small class="text-muted">3 days ago</small>
            </div>

            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </p>

            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-collapse>
      </b-list-group>
      <b-link v-b-toggle.collapse-1 class="text-success float-lg-right"> Display more...</b-link>
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
  }
}
</script>

