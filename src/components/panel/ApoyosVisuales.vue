<template lang="">
  <v-app id="inspire" >
    <Nav/>
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Apoyos Visuales </h1>
          </v-col>

          <v-col cols="12" class="text-center">
            <video
              controls
              autoplay
              height="450"
            >
              <source
                src="/img/conocenos/nuestroADN.mp4"
                type="video/mp4"
              >
            </video>
            <v-card>
              <v-tabs
                background-color="#969696"
                center-active
                dark
              >
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab><v-img
                  src="/img/cursos/curso.png"
                  width="50"
                ></v-img></v-tab>
                <v-tab>Nine</v-tab>
                <v-tab>Ten</v-tab>
                <v-tab>Eleven</v-tab>
                <v-tab>Twelve</v-tab>
                <v-tab>Thirteen</v-tab>
                <v-tab>Fourteen</v-tab>
                <v-tab>Fifteen</v-tab>
                <v-tab>Sixteen</v-tab>
                <v-tab>Seventeen</v-tab>
                <v-tab>Eighteen</v-tab>
                <v-tab>Nineteen</v-tab>
                <v-tab>Twenty</v-tab>
              </v-tabs>
            </v-card>
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
  name: 'Apoyo',

  data() {
    return {
      views: 0,
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
