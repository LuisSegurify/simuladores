<template>
  <v-card elevation="2">
    <h2 class="tituloForm">Acceso a mis Evaluaciones</h2>
    <v-form
      class="ma-3 pa-2 mt-0 row"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-col cols="12">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Escribe tu número celular"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          :rules="nameRules"
          label="Escribe tu código sms"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="text-center">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="inicio"
        >
          Iniciar Sesión
        </v-btn>
      </v-col>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'Register',

  data: () => ({
    valid: true,
    name: '',
    password: null,
    nameRules: [
      (v) => !!v || 'Celular es necesario',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [(v) => !!v || 'Código es necesario'],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    inicio() {
      if (this.name === 'A' && this.password === 'A') {
        this.$router.push('/conocenos');
      } else {
        console.log('Falso');
      }
    },
  },
};
</script>

<style >
.infoForm {
  width: 75%;
  padding: 10px;
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(0, 108, 161);
  margin: auto;
  margin-top: 10px;
  margin-bottom: 0px !important;
  padding-top: 15px;
}

.tituloForm {
  color: rgb(27, 40, 91);
  width: 100%;
  text-align: center;
}
</style>
