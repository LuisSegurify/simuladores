<template>
  <v-card elevation="2">
    <p class="infoForm">
      Nuestro simulador te permitirá reafirmar tus conocimientos para la
      acreditación del examen para la obtención de tu Cédula A.
    </p>

    <h2 class="tituloForm">Para comenzar crea una cuenta</h2>
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
          label="Nombre"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          label="Apellido Paterno"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="lastName2"
          :rules="nameRules"
          label="Apellido Materno"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="6">
        <v-text-field
          v-model="celular"
          :rules="emailRules"
          label="Celular"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>
      <!-- Estado de la República -->
      <v-col cols="6">
        <v-select
          item-text="estadoRepublica"
          item-value="id"
          v-model="estado"
          :items="estados"
          :rules="[(v) => !!v || 'Estado es necesario']"
          placeholder="Seleccionar Estado"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'Es necesario seleccciona para continuar']"
          label="¿Cuentas con Cédula?"
          required
        ></v-checkbox>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="validate"
        >
          Registrarse
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
    nameRules: [
      (v) => !!v || 'Nombre es necesario',
      (v) => (v && v.length <= 10) || 'Nombre must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail es necesario',
      (v) => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
    ],
    select: null,
    items: ['Si', 'No'],
    checkbox: false,
    estado: null,
    estados: [
      { id: 1, estadoRepublica: 'Aguascalientes' },
      { id: 2, estadoRepublica: 'Baja California' },
      { id: 3, estadoRepublica: 'Baja California Sur' },
      { id: 4, estadoRepublica: 'Campeche' },
      { id: 5, estadoRepublica: 'Coahuila de Zaragoza' },
      { id: 6, estadoRepublica: 'Colima' },
      { id: 7, estadoRepublica: 'Chiapas' },
      { id: 8, estadoRepublica: 'Chihuahua' },
      { id: 9, estadoRepublica: 'Ciudad de México' },
      { id: 10, estadoRepublica: 'Durango' },
      { id: 11, estadoRepublica: 'Guanajuato' },
      { id: 12, estadoRepublica: 'Guerrero' },
      { id: 13, estadoRepublica: 'Hidalgo' },
      { id: 14, estadoRepublica: 'Jalisco' },
      { id: 15, estadoRepublica: 'Estado de México' },
      { id: 16, estadoRepublica: 'Michoacán de Ocampo' },
      { id: 17, estadoRepublica: 'Morelos' },
      { id: 18, estadoRepublica: 'Nayarit' },
      { id: 19, estadoRepublica: 'Nuevo León' },
      { id: 20, estadoRepublica: 'Oaxaca' },
      { id: 21, estadoRepublica: 'Puebla' },
      { id: 22, estadoRepublica: 'Querétaro' },
      { id: 23, estadoRepublica: 'Quintana Roo' },
      { id: 24, estadoRepublica: 'San Luis Potosí' },
      { id: 25, estadoRepublica: 'Sinaloa' },
      { id: 26, estadoRepublica: 'Sonora' },
      { id: 27, estadoRepublica: 'Tabasco' },
      { id: 28, estadoRepublica: 'Tamaulipas' },
      { id: 29, estadoRepublica: 'Tlaxcala' },
      { id: 30, estadoRepublica: 'Veracruz' },
      { id: 31, estadoRepublica: 'Yucatán' },
      { id: 32, estadoRepublica: 'Zacatecas' },
      { id: 33, estadoRepublica: 'Desconocio' },
    ],
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
  },
};
</script>

<style >
</style>
