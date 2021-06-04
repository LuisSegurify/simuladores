<template lang="">
  <v-app id="inspire" >
    <Nav/>
      <v-container fluid>
        <v-img
          src="/img/cursos/agendaExamen.png"
        ></v-img>
      </v-container>
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Programa tu curso de cédula con nosotros.</h1>
          </v-col>
        </v-row>
        <v-row class="mb-10">
          <v-col
            v-for="curso in cursos"
            :key="curso"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img
              :src="curso.src"
              cover
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Nav from './Nav.vue';
import Footer from '../../views/Footer.vue';

export default {
  name: 'Cursos',

  data() {
    return {
      views: 0,
      cursos: [
        {
          id: 1,
          src: '/img/cursos/curso.png',
        },
        {
          id: 2,
          src: '/img/cursos/curso.png',
        },
        {
          id: 3,
          src: '/img/cursos/curso.png',
        },
        {
          id: 4,
          src: '/img/cursos/curso.png',
        },
        {
          id: 5,
          src: '/img/cursos/curso.png',
        },
      ],
    };
  },

  components: {
    Nav,
    Footer,
  },

  methods: {
  },
};
</script>

<style >
.titulo {
  color: #fe924b;
  width: 100%;
}

h3 {
  color: rgb(19, 59, 125);
}

.aprobacionText {
  font-size: 12px;
  font-weight: bold;
  color: #111111;
  margin: 0 !important;
  padding-bottom: 0px !important;
}

.v-card .on-hover .theme--dark {
  background-color: rgba(#fff, 0.8);
}
.v-card .on-hover .theme--dark > .v-card__text {
  color: #000;
}
</style>
