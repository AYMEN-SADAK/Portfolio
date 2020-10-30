<template>
  <div >
    <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer" shadow v-bind:visible="isPhone">

      <template #footer="{ }">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <strong class="mr-auto">Aymen SADAK </strong>
          <b-button size="sm" >
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </b-button>
        </div>
      </template>
      <div class="px-3 py-1" >
        <div class="d-flex">
          <b-avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHQtjkaBFqbDA/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=N7h8kObS0Faw1s6GACRmQMlFdCFZ4V1NTlZB8CRwl8s" size="6rem"/>
          <div><h2 class="text-info ml-2 mb-0 pb-0">SADAK</h2>
            <h2 class="text-info ml-3">Aymen</h2></div>
        </div>
        <p class="p-1 m-2">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>

        <b-list-group style="max-width: 300px;">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <b-badge>5</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
            <span class="mr-auto">BootstrapVue</span>
            <b-badge>12</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto">Super Kitty</span>
            <b-badge>9</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
            <span class="mr-auto">ACME group</span>
            <b-badge>7</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
data: function () {
  return {
    isPhone :  ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600 ) )
  }
},
}
</script>

