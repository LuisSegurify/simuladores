<template lang="">
  <v-app id="inspire" >
    <Nav/>
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Gaceta</h1>
          </v-col>
          <v-col cols="12">
            <vue-pdf-app pdf="/img/gaceta/ALIGE.pdf"></vue-pdf-app>
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
  name: 'Gaceta',

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
