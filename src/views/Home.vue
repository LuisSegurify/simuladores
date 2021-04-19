<template>
  <v-container fluid>
    <v-row class="contenidoHome">
      <v-col class="contenInfo">
        <v-container>
          <v-row>
            <v-container>
              <v-carousel
                height="88vh"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item v-for="(note, i) in notes" :key="i + note.id">
                  <v-sheet color="transparent" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                      <img
                        v-if="note.typeMedia == 'picture'"
                        :src="note.media"
                        alt=""
                      />
                      <video
                        class="videoHome"
                        :src="note.media"
                        autoplay
                        poster="/img/home/logoB.png"
                        v-if="note.typeMedia == 'video'"
                        controls
                      ></video>
                      <p class="contenidoSlice">{{ note.contenido }}</p>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </v-container>
          </v-row>
        </v-container>
      </v-col>
      <v-col>
        <v-container class="contenidoLogeo">
          <v-row>
            <v-col cols="12" align="end" justify="center:">
              <v-btn
                class="ma-3"
                :color="registro == true ? 'primary' : 'secondary'"
                @click="registro = true"
              >
                Registrate</v-btn
              >
              <v-btn
                class="ma-3"
                :color="registro == true ? 'secondary' : 'primary'"
                @click="registro = false"
              >
                Iniciar Sesión
              </v-btn>
            </v-col>

            <v-col cols="12">
              <Login v-show="registro == false" />
              <Register v-show="registro == true" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-footer padless fixed>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Segurify-Simuladores</strong>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
import Login from '../components/login/Login.vue';
import Register from '../components/login/Register.vue';

export default {
  name: 'Home',

  components: {
    Login,
    Register,
  },

  data() {
    return {
      notes: [
        {
          id: 1,
          contenido:
            'Segurify Simuladores Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
          media: '/img/home/simulador.png',
          typeMedia: 'picture',
        },
        {
          id: 2,
          contenido: 'aqui hay contenido2',
          media: '/img/home/simulador.png',
          typeMedia: 'picture',
        },
        {
          id: 3,
          contenido: 'aqui hay contenido3',
          media: '/video/Video.mp4',
          typeMedia: 'video',
        },
        {
          id: 4,
          contenido: 'aqui hay contenido4',
          media: '/img/home/simulador.png',
          typeMedia: 'picture',
        },
        {
          id: 5,
          contenido: 'aqui hay contenido5',
          media: '/img/home/simulador.png',
          typeMedia: 'picture',
        },
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      registro: true,
    };
  },
};
</script>

<style >
.contenidoHome {
  height: auto;
  margin-bottom: 20px;
}
.contenInfo {
  background-color: #0c387d;
  height: 100%;
}

.contenidoSlice {
  font-size: 14px;
  padding: 20px;
  width: 100%;
}

.videoHome {
  max-width: 100%;
}

.contenidoLogeo {
  height: 100%;
}

.infoForm {
  width: 75%;
  text-align: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(0, 108, 161);
  margin: auto;
  margin-bottom: 0px !important;
  padding-top: 15px;
}

.tituloForm {
  color: rgb(27, 40, 91);
  width: 100%;
  text-align: center;
  padding: 5px;
}
</style>
