<template>
  <div id="app">
    <div >
      <b-avatar class="mx-auto d-block m-2" src="https://media-exp1.licdn.com/dms/image/C5603AQHQtjkaBFqbDA/profile-displayphoto-shrink_400_400/0?e=1609372800&v=beta&t=N7h8kObS0Faw1s6GACRmQMlFdCFZ4V1NTlZB8CRwl8s"  size="8rem"/>

      <div class="row m-2 p-2">
        <education class="col-lg-6"/>
        <professional class="col-lg-6"/>
        <projects class="col-lg-6"/>
        <about class="col-lg-6"/>
      </div>

      <b-button v-b-toggle.sidebar-footer>Toggle Sidebar</b-button>
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

