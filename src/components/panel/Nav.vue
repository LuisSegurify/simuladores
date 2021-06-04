<template>
  <v-navigation-drawer
    v-intro="'Menu de navegacion'"
    v-intro-step="2"
    app
    class="pt-4"
    color="rgb(19, 59, 125)"
    mini-variant
  >
    <img src="/img/home/segurifyBco.png" width="100%" alt="" style="padding-bottom:10px">

    <v-avatar
      v-for="menuElement in menuElements"
      :key="menuElement.id"
      color="#fff"
      :size="menuElement.id === 1 ? 40 : 30"
      class="d-block text-center mx-auto mb-9"
      v-intro="`Elemento de navegacion ${menuElement.id}`"
      v-intro-step="menuElement.id+2"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="cursor"
            v-bind="attrs"
            v-on="on"
            @click="movePage(menuElement.link)"
            :size="menuElement.size"
          >
            {{menuElement.icon}}
          </v-icon>
        </template>
        <span>{{menuElement.info}}</span>
      </v-tooltip>
    </v-avatar>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      menuElements: [
        {
          id: 1,
          icon: 'mdi-home-circle',
          size: '35',
          info: 'Home',
          link: '/conocenos',
        },
        {
          id: 2,
          icon: 'mdi-apps',
          size: '20',
          info: 'Simulador',
          link: '/panel',
        },
        {
          id: 3,
          icon: 'mdi-school',
          size: '20',
          info: 'Cursos',
          link: '/cursos',
        },
        {
          id: 4,
          icon: 'mdi-video-image',
          size: '20',
          info: 'Apoyo Visual',
          link: '/apoyosVisuales',
        },
        {
          id: 5,
          icon: 'mdi-newspaper-variant-outline',
          size: '20',
          info: 'Gaceta',
          link: '/gaceta',
        },
        {
          id: 6,
          icon: 'mdi-scale-balance',
          size: '20',
          info: 'Legal',
          link: '/legal',
        },
        {
          id: 7,
          icon: 'mdi-account-group',
          size: '20',
          info: 'Personas',
          link: '/people',
        },
        {
          id: 8,
          icon: 'mdi-skull-crossbones',
          size: '20',
          info: 'Daños',
          link: '/damage',
        },
        {
          id: 9,
          icon: 'mdi-cash-multiple',
          size: '20',
          info: 'Mercado',
          link: '/market',
        },
        {
          id: 10,
          icon: 'mdi-exit-to-app',
          size: '20',
          info: 'Salir',
          link: '/',
        },
      ],
    };
  },
  methods: {
    movePage(location) {
      this.$router.push(location);
    },

  },
};
</script>

<style>
.cursor{
  cursor: pointer;
}

</style>
