<template>
  <v-app>
    <v-app-bar
      app
      color="success"
      dark
    >
      <div class="d-flex align-center">


         </div>

      <v-spacer></v-spacer>


        <h2>
          welcome to Gan-go!
        </h2>


    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>

    <template>
      <v-card height="400px">
        <v-footer
            v-bind="localAttrs"
            :padless="padless"
        >
          <v-card

              tile
              width="100%"
              class="green text--lighten-2 text-center"
          >
            <v-card-text>
              <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4"
                  icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>האקתון ר"ג</strong>
            </v-card-text>
          </v-card>
        </v-footer>

        <v-row
            align="center"
            justify="center"
            class="ma-12"
        >
          <v-col
              cols="12"
              md="8"
          >



          </v-col>
        </v-row>
      </v-card>
    </template>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
