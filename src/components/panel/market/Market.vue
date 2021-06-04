<template>
  <v-app id="inspire">
    <Nav />
    <v-main class="pa-0 pt-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Mercado</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste cupiditate sunt ipsam nesciunt
              explicabo dolores quibusdam accusantium.
              Eaque veritatis velit amet repellendus sunt, maiores
              harum non blanditiis. Dolor, ipsum sint?
            </p>
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
              <v-card
                height="auto"
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title>{{evaluation.name}}</v-card-title>

                <v-list-item class="d-flex">
                  <v-img
                    contain
                    height="100"
                    width="150"
                    calss="imgEvaluacion"
                    :src="evaluation.media"
                  ></v-img>
                </v-list-item>

                <v-card-text>
                  <div>Materiales de apoyo</div>
                </v-card-text>
                <v-card-actions class="d-flex justify-space-around">
                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar
                          color="primary"
                          dark
                        >{{evaluation.videoTitulo}}</v-toolbar>
                        <video
                          controls
                          width="100%"
                        >
                          <source
                            :src="evaluation.video"
                            type="video/mp4"
                          >
                          Sorry, your browser doesn't support embedded videos.
                        </video>
                        <v-card-actions class="justify-end">
                          <v-btn
                            color="primary"
                            text
                            @click="dialog.value = false"
                          >Cerrar</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                  <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="700"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-image-outline</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-card-title>
                          <span>{{evaluation.inforgraTitle}}</span>
                          <v-spacer></v-spacer>
                          <v-menu
                            bottom
                            left
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                icon
                                v-bind="attrs"
                                v-on="on"
                              >
                                <v-icon>mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                @click="() => { i == 0 ? download(evaluation.id, i)
                                : send(evaluation.id, i)}"
                              >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-card-title>
                        <v-img
                          contain
                          height="100%"
                          width="100%"
                          calss="imgEvaluacion"
                          :src="evaluation.infografia"
                        ></v-img>
                        <v-card-actions class="justify-end">
                          <v-btn
                            color="primary"
                            text
                            @click="dialog.value = false"
                          >
                            Cerrar
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                  <v-dialog
                    v-model="dialog"
                    scrollable
                    fullscreen
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-file-pdf</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-card-title>{{evaluation.pdfTitle}}</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text style="height: 500px;">
                          <pdf :src="evaluation.pdf"></pdf>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="justify-end">
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog.value = false"
                          >
                            Cerrar
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>

                </v-card-actions>

                <v-card-text>
                  <v-row>
                    <v-col
                      class="pb-0"
                      cols="12"
                      v-if="evaluation.percentage > 0"
                    >
                      <div>Porcentaje de aprobación</div>
                    </v-col>
                    <v-col
                      class="pb-0"
                      cols="12"
                      v-else
                    >
                      <div>Aun no has empezado esta Evaluación</div>
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
                    <v-col
                      cols="12"
                      class="text-center"
                    >
                      <v-btn
                        depressed
                        small
                        :color="evaluation.percentage > 0 ?
                        'primary' : 'success'"
                      >
                        {{evaluation.percentage > 0 ?
                        'Reintentar Evaluación' : 'Empezar Evaluación'}}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>

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
import pdf from 'vue-pdf';
import Nav from '../Nav.vue';
import Footer from '../../../views/Footer.vue';

export default {
  name: 'Market',

  data() {
    return {
      dialog: false,
      evaluaciones: [
        {
          id: 1,
          name: 'Gastos Médicos Mayores',
          percentage: 50,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/people/evaluaciones/gmmn.png',
          videoTitulo: 'Soy video de Gastos medicos',
          video: '/video/Video.mp4',
          infografia: '/img/panel/people/evaluaciones/infografia.png',
          inforgraTitle: 'Infografia 1',
          pdf: '/img/panel/people/evaluaciones/Riesgos.pdf',
          pdfTitle: 'PDF title',
        },
        {
          id: 2,
          name: 'Accidentes Personales',
          percentage: 30,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/people/evaluaciones/apn.png',
          videoTitulo: 'Soy video de Accidentes Personales',
          video: '/video/Video.mp4',
          infografia: '/img/panel/people/evaluaciones/infografia.png',
          inforgraTitle: 'Infografia 2',
          pdf: '/img/panel/people/evaluaciones/Riesgos.pdf',
          pdfTitle: 'PDF title',
        },
        {
          id: 3,
          name: 'Vida Individual',
          percentage: 0,
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          media: '/img/panel/people/evaluaciones/vin.png',
          videoTitulo: 'Soy video de Vida Individual',
          video: '/video/Video.mp4',
          infografia: '/img/panel/people/evaluaciones/infografia.png',
          inforgraTitle: 'Infografia 3',
          pdf: '/img/panel/people/evaluaciones/Riesgos.pdf',
          pdfTitle: 'PDF title',
        },
      ],
      items: [
        {
          title: 'Descargar',
        },
        {
          title: 'Compartir',
        },
      ],
    };
  },

  components: {
    Nav,
    pdf,
    Footer,
  },

  methods: {
    download(elemento, infografia) {
      console.log(elemento, infografia);
    },
    send(elemento, infografia) {
      console.log(elemento, infografia);
    },
  },
};
</script>

<style >
</style>
