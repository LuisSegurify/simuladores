<template lang="">
  <v-app id="inspire" >
    <Nav/>
    <v-main class="pa-0 pt-3 back">

      <v-col cols="auto">
        <v-dialog
          transition="dialog-top-transition"
          max-width="800"
          v-model="dialog"
        >
          <template>
            <v-card>
              <video
                controls
                autoplay
                width="100%"
              >
                <source
                  src="/img/conocenos/nuestroADN.mp4"
                  type="video/mp4"
                >
              </video>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>

      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="titulo">Conócenos</h1>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="mb-5">
        <v-row>
          <v-col cols="12">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                class="carrouselItem"
                v-for="(item,i) in imagesSlider"
                :key="i"
                :src="item.src"
              >
                <div class="display-3 d-flex justify-center align-center slide flex-colmn">
                  <h2 class="subtitulo2 mb-5">¿Quiénes somos?</h2>
                  <p class="titleSlider" v-if="item.title != null">{{ item.title }}</p>
                  <p class="textoSlider">{{ item.slide }}</p>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mb-5">
        <v-row>
          <v-col cols="12">
            <h2 class="subtitulo pl-4">Objetivos</h2>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Nuestra Misión
              </v-card-title>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Ver más...
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    En Alige, buscamos
                    transformar la
                    experiencia de nuestros
                    clientes, acercando
                    nuestros productos de
                    seguro, a través de una
                    estrategia omnicanal y,
                    promoviendo un cambio
                    en la cultura del seguro.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Nuestra Visión
              </v-card-title>

              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Ver más...
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show2 = !show2"
                >
                  <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text>
                    Ser la mejor experiencia
                    para nuestros clientes,
                    mediante la versatilidad
                    de nuestros servicios,
                    acompañamiento
                    continuo y ser una
                    referencia en el mercado
                    a través de la creación
                    de tendencias.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Nuestra filosofía
              </v-card-title>
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Ver más...
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show3 = !show3"
                >
                  <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show3">
                  <v-divider></v-divider>

                  <v-card-text>
                    Mantenernos en la
                    búsqueda constante del
                    bienestar, protección y
                    tranquilidad de nuestros
                    clientes, socios de
                    negocio, colaboradores;
                    sus vidas nos inspiran.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mb-15">
        <v-row>
          <v-col cols="12">
            <h2 class="subtitulo2 pl-4">Nuestra historia</h2>
          </v-col>

          <v-col cols="12" md="8" class="d-flex flex-column justify-center">
            <p class="textoHistoria">Alige es un bróker de Seguros y de Fianzas que
              cuenta con cuatro décadas de conocimiento,
              crecimiento y experiencia en el sector, lo que nos
              ha permitido ser expertos en diferentes estrategias
              de comercialización
            </p>
            <p class="textoHistoria">
              Hemos visto cómo el mercado ha cambiado y está en
              constante búsqueda de alternativas de productos, calidad,
              atención, servicio y eficiencia, al momento de contratar un
              seguro. Es por ello que nuestro Contact Center está
              enfocado 100% al negocio de seguros para Venta,
              Retención, Atención al Cliente, Cobranza, de los
              diferentes ramos que manejamos, gracias a esto nos
              hemos llenado de ventajas dentro del sector y a su vez,
              nos ha dado posicionamiento en el mercado.
            </p>
          </v-col>
          <v-col cols="12" md="4" class="d-flex flex-column justify-center">
            <v-img
              src="/img/conocenos/recluta0.jpeg"
              max-height="400"
              contain
            ></v-img>
          </v-col>

          <v-col cols="12" md="4">
            <v-img
              src="/img/conocenos/recluta1.jpeg"
              max-height="400"
              contain
            ></v-img>
          </v-col>

          <v-col cols="12" md="8" class="d-flex flex-column justify-center">
            <p class="textoHistoria">
              Nuestra estrategia digital se basa en la captación
              de leads y oferta inmediata de nuestros productos
              a los clientes por lo que, estamos presentes en
              todo momento, cualquier lugar y siempre con la
              mejor oferta al cliente, con solo un par de clics.
            </p>
            <p class="textoHistoria">
              Nos interesa acercar a nuestros clientes con
              nuestros socios aseguradores, que son los
              mejores del país así que, por ello creamos canales
              de comunicación que permiten que nuestros
              clientes conozcan de forma rápida y eficaz, los
              beneficios que, en conjunto con las aseguradoras,
              tenemos para ellos.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <div class="inscribe">
        <p class="textoIcono">Quieres formar parte</p>
        <v-btn
          color="#fe924b"
          elevation="12"
          fab
          large
          class="text-center"
        >
          <v-icon color="#fff">mdi-calendar-arrow-right</v-icon>
        </v-btn>
        <p class="textoIcono">agenda una cita</p>
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Nav from './Nav.vue';
import Footer from '../../views/Footer.vue';

export default {
  name: 'Conocenos',

  data() {
    return {
      dialog: null,
      views: 0,
      show: false,
      show2: false,
      show3: false,
      imagesSlider: [
        {
          src: '/img/conocenos/slider1.jpg',
          slide: 'Somos un canal de comunicación entre la aseguradoras y sus clientes, garantizando calidad en el servicio a través de nuestras diferentes campañas.',
          title: null,
        },
        {
          src: '/img/conocenos/slider2.jpg',
          title: 'Estrategia de ventas',
          slide: 'Está dedicada en su totalidad al ramo asegurador a través de nuestro Contact Center y Canal de Agentes, junto con nuestra amplia gama de productos, buscamos brindar al cliente la protección más amplia en los diferentes aspectos de su vida, todo en un mismo canal.',
        },
        {
          src: '/img/conocenos/slider3.jpg',
          title: 'Renovación de cartera',
          slide: 'Sabemos la importancia de continuidad de protección de nuestros clientes por lo que, nuestro equipo de Contact Center da seguimiento a las pólizas próximas a renovar, con el tiempo necesario para poder realizar una oferta y, garantizando que el cliente se mantenga protegido.',
        },
        {
          src: '/img/conocenos/slider4.jpg',
          title: 'Atención al cliente',
          slide: 'La voz de nuestros clientes es lo más importante es por ello que nuestro canal de ventas cuenta con un área dedicada a atender, apoyar, informar y dar seguimiento a cualquier solicitud que el cliente nos presente, siempre buscando su satisfacción.',
        },
        {
          src: '/img/conocenos/slider5.jpg',
          title: 'Cobranza',
          slide: 'Damos seguimiento de forma personalizada a la cobranza de cada una de nuestras pólizas, con diferentes comunicaciones al cliente; no lo vemos solo como una transacción, buscamos también la protección y tranquilidad de nuestros clientes.',
        },
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    };
  },

  components: {
    Nav,
    Footer,
  },

  mounted() {
    this.dialog = true;
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
.tituloBco {
  color: #ffffff;
  width: 100%;
}

h3 {
  color: rgb(19, 59, 125);
}
.subtitulo {
  color: #969696;
}
.subtitulo2 {
  color: #152189 !important;
  font-size: 35px;
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

.infoSegurify {
  font-size: 22px;
  color: #fff
}

.carrouselItem {
    color: #fff;
    filter: grayscale(100%);
}
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}

.inscribe {
  position: fixed !important;
  top: 60%;
  left: 93%;
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  align-items: center;
}
.textoIcono{
  color: #111111;
  font-size: 9px;
  font-weight: bold;
  text-align: center;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
}
.slide{
  height: 100%;
  flex-direction: column!important;
  padding: 30px;
  background: rgba(255,255,255,0.5);

}
.titleSlider{
  font-size: 25px;
  color: #0f25e4 !important;
  width: 100%;
  font-weight: bold;
  text-align: center;
}
.textoSlider{
  font-size: 20px;
  width: 80%;
  color: #363636;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
}

.textoHistoria {
  font-size: 15pt;
  text-align: justify;
}
</style>
