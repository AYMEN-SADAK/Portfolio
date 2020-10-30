<template>
  <div id="app">
    <div >
      <b-media class="mx-auto m-2 col-lg-5 p-2" tag="li">
        <template #aside>
          <b-avatar class="mt-2" src="https://media-exp1.licdn.com/dms/image/C5603AQHQtjkaBFqbDA/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=N7h8kObS0Faw1s6GACRmQMlFdCFZ4V1NTlZB8CRwl8s"  size="8rem"/>
        </template>
        <h5 class="mt-0 mb-1">SADAK Aymen</h5>
        <p class="mb-0">
          Software Project Engineer at S2M
        </p>
        <p class="mb-0">
          <i class="text-dark"><font-awesome-icon icon="birthday-cake"/> 21-04-1998</i>                </p>
        <p class="mb-0">
          <i class="text-dark ">  <font-awesome-icon icon="home"/> Casablanca, Morroco</i>
        </p>
        <p class="mb-0">
          <font-awesome-icon icon="at"/> <i class="text-dark">asadak@s2m.ma / sadakaymen6@gmail.com</i>
        </p>
        <p class="mb-0">
          <font-awesome-icon :icon="['fab','github']"/> <i class="text-dark"><b-link href="https://github.com/AYMEN-SADAK" target="_blank">AYMEN-SADAK</b-link></i>
        </p>
      </b-media>
      <div class="row m-1 p-2">
        <education class="col-lg-6"/>
        <professional class="col-lg-6"/>
        <projects class="col-lg-6"/>
        <about class="col-lg-6"/>
        <b-button class="menu-button" v-b-toggle.sidebar-footer pill variant="info" >
          <font-awesome-icon icon="bars"/></b-button>
      </div>
      <sidebar/>
    </div>
  </div>
</template>

<script>
import About from './components/About'
import Education from './components/Education'
import Professional from './components/Professional'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    About,
    Education,
    Professional,
    Projects,
    Sidebar
  },
  data: function () {
    return {

    }
  },
  methods : {

  }
}
</script>

<style>
  .menu-button{ position: fixed; bottom: 20px; right: 20px; }
</style>
