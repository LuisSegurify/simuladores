<template lang="">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="rgb(19, 59, 125)"
      mini-variant
    >
      <v-avatar
        v-for="menuElement in menuElements"
        :key="menuElement.id"
        color="#fff"
        :size="menuElement.id === 1 ? 40 : 30"
        class="d-block text-center mx-auto mb-9"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
                :size="menuElement.size"
            >
              {{menuElement.icon}}
            </v-icon>
          </template>
          <span>{{menuElement.info}}</span>
        </v-tooltip>
      </v-avatar>
    </v-navigation-drawer>
    <v-main class="mt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Modulos a evaluar</h1>
          </v-col>
          <v-col
            v-for="evaluation in evaluaciones"
            :key="evaluation.id"
            cols="4"
          >
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
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
                      <v-col class="pb-0" cols="12" v-if="evaluation.percentage > 0">
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
                      </v-col>
                      <v-col cols="12" class="text-end">
                        <v-btn depressed
                        small
                        :color="evaluation.percentage > 0 ?
                        'primary' : 'success'">
                        {{evaluation.percentage > 0 ?
                        'Reintentar Evaluación' : 'Empezar Evaluación'}}
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
  </v-app>
</template>
<script>
export default {
  name: 'Panel',

  data() {
    return {
      menuElements: [
        {
          id: 1,
          icon: 'mdi-home-circle',
          size: '35',
          info: 'Panel',
        },
        {
          id: 2,
          icon: 'mdi-scale-balance',
          size: '20',
          info: 'Legal',
        },
        {
          id: 3,
          icon: 'mdi-account-group',
          size: '20',
          info: 'Personas',
        },
        {
          id: 4,
          icon: 'mdi-skull-crossbones',
          size: '20',
          info: 'Daños',
        },
        {
          id: 5,
          icon: 'mdi-cash-multiple',
          size: '20',
          info: 'Mercado',
        },
        {
          id: 6,
          icon: 'mdi-exit-to-app',
          size: '20',
          info: 'Salir',
        },
      ],
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
    };
  },

  mounted() {},
};
</script>

<style >
.titulo {
  color: #fe924b;
  width: 100%;
  padding: 5px;
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
  background-color: rgba(#FFF, 0.8)
}
.v-card .on-hover .theme--dark>.v-card__text {
  color: #000
}
</style>
