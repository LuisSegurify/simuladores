<template>
  <v-app id="inspire">
    <Nav />
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Test de {{origen == 1
              ? 'Hogar' : origen == 2
              ? 'Embarcaciones' : 'Autos' }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste cupiditate sunt ipsam nesciunt
              explicabo dolores quibusdam accusantium.
              Eaque veritatis velit amet repellendus sunt, maiores
              harum non blanditiis. Dolor, ipsum sint?
            </p>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="80%"
              elevation="7"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    OVERLINE
                  </div>
                  <v-list-item-title class="headline mb-1">
                    Headline 5
                  </v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello
                    coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn
                  outlined
                  rounded
                  text
                >
                  Button
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Nav from '../Nav.vue';
import Footer from '../../../views/Footer.vue';

export default {
  name: 'DamageTest',

  data() {
    return {
      origen: this.$route.params.id,
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
</style>
