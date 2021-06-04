<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="institucional white--text text-center w-100"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text pb-0">
        <p class="">Consulta nuestros <a href="">Terminos, Condiciones</a> y
          <a href="m-0">Aviso de Privacidad</a>
          <br><strong>SEGURIFY</strong>-{{ new Date().getFullYear() }}
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    };
  },
};
</script>

<style >
  .w-100{
    width: 100%;
  }

  .institucional {
    background-color: #152189 !important;
  }

  a {
    color: #969696 !important;
  }
</style>
