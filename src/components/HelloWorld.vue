<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/gan_go.png')"
          class="my-3"
          contain
          height="120"
        />
      </v-col>


      <v-col class="mb-4">
        <h3 class="display-2 font-blue-bold mb-3">
          ברוכים הבאים
          <br>
          !GO- לגן
        </h3>

        <h2 class="headline font-weight-bold mb-3">
         <br>
          Art is here!
          <br>

          <v-col cols="13">
            <v-img
                :src="require('../assets/bg.jpg')"
                class="my-3"
                contain
                height="200"
            />
          </v-col>

        ?מוכנים למשחק
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >



      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-col cols="12">
          <v-img
              :src="require('../assets/galgadot.jpg')"
              class="my-3"
              contain
              height="180"
          />
        </v-col>
        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

      ecosystem: [

        {

          text: 'אתם גם מוזמנים לבקר בסיור 360 עם גל גדות',
          href: 'https://artsandculture.google.com/pocketgallery/_AUh_AKi5BkFSA?pgs=eyJvYyI6InRoZWF0ZXItdmlldyJ9\n',
        },


      ],

      whatsNext: [
        {
          text: '!צאו לדרך',
          href: '../public/map.html',

        },


      ],
    }
    ),

  }
</script>
