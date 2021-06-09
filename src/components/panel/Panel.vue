<template lang="">
  <v-app id="inspire"  v-intro="'Bienvenidos a Segurify simuladores'" v-intro-step="1">
    <Nav/>
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Modulos a evaluar</h1>
          </v-col>
          <v-col
            v-for="evaluation in evaluaciones"
            :key="evaluation.id"
            cols="4"
            class="text-center mb-10">
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
              v-intro="'The content of tooltip'"
              v-intro-if="evaluation.id == 1"
            >
              <v-card height="auto"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }">
                <v-list-item class="grow">
                  <v-list-item-avatar color="grey darken-3">
                    <v-img
                      class="elevation-6"
                      alt=""
                      :src="evaluation.media"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title><h3>{{evaluation.name}}</h3></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item >
                  <v-row>
                    <v-col>
                      <v-card-text class="description">
                        {{evaluation.description}}
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-list-item>
                <v-list-item >
                  <v-container fluid class="p-0">
                    <v-row>
                      <!-- <v-col class="pb-0" cols="12" v-if="evaluation.percentage > 0">
                        <p class="aprobacionText">Porcentaje de aprobación</p>
                      </v-col>
                      <v-col class="pb-0" cols="12" v-else>
                        <p class="aprobacionText">Aun no has empezado esta Evaluación</p>
                      </v-col>
                      <v-col cols="12">
                        <v-progress-linear
                          v-model="evaluation.percentage"
                          :color="evaluation.percentage == 0 ? 'grey' :
                          evaluation.percentage > 0 && evaluation.percentage < 60 ? 'red' :
                          'green accent-3'"
                          height="20"
                        >
                          <template v-slot:default="{ value }">
                            <strong>{{ Math.ceil(value) }}%</strong>
                          </template>
                        </v-progress-linear>
                      </v-col> -->
                      <v-col cols="12" class="text-end">
                        <v-btn depressed
                        small
                        @click='redirecccionar(evaluation.id)'
                        :color="evaluation.percentage > 0 ?
                        'primary' : 'success'">
                        {{evaluation.percentage > 0 ?
                        'Revisitar Modulo' : 'Empezar Modulo'}}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-list-item>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import 'intro.js/minified/introjs.min.css';
import Nav from './Nav.vue';
import Footer from '../../views/Footer.vue';

export default {
  name: 'Panel',

  data() {
    return {
      evaluaciones: [
        {
          id: 1,
          name: 'Legal',
          percentage: 50,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/legal.png',
        },
        {
          id: 2,
          name: 'Personas',
          percentage: 30,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/persona.png',
        },
        {
          id: 3,
          name: 'Daños',
          percentage: 0,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/damage.png',
        },
        {
          id: 4,
          name: 'Mercado',
          percentage: 80,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/market.png',
        },
      ],
      views: 0,
    };
  },

  components: {
    Nav,
    Footer,
  },

  mounted() {
    this.$intro().start(); // start the guide
    this.$intro().showHints(); // show hints
  },

  methods: {
    redirecccionar(id) {
      console.log(id);
      switch (id) {
        case 1:
          this.$router.push({ name: 'Legal' });
          break;
        case 2:
          this.$router.push({ name: 'People' });
          break;
        case 3:
          this.$router.push({ name: 'Damage' });
          break;
        case 4:
          this.$router.push({ name: 'Market' });
          break;

        default:
          break;
      }
    },
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
