<template>
  <v-container fluid grid-list-lg>
      <v-layout fill-height row wrap>
          <v-flex class="elevation-0 pl-5" d-flex xs12 sm6 md4>
            <v-card class="gradientColorClass">
                <div class="d-flex">
                  <v-card width="100px" class="lg6 sm6 xs6 pa-2 ma-2 gradientColorClass" style="border: 1px solid black; font-size: 1.7rem; font-weight: bold; color: #eed912; position: relative; right: 30px">YAAT TIZIMLARI</v-card>
                  <v-card class="lg6 sm6 xs6 pa-2 ma-2 gradientColorClass" style="border: 1px solid black; text-align: center; font-size: 1.7rem; font-weight: bold; color: black;">10</v-card>
                </div>
                <v-card style="background-color: rgba(115,144,168,0.58)!important; position: relative; right: 15px">
                  <data-table/>
                </v-card>
                <div class="d-flex">
                    <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                      <v-card-media>
                        <img class="pl-3" src="static/icons8-policeman-64.png">
                      </v-card-media>
                      <v-card-title>
                        <div>
                          <span class="white--text neonText" style="font-size: 1.5rem">32 235</span><br>
                          <span class="white--text">inspektorlar</span><br>
                          <span class="blue--text">+3 % bir kunlik</span>
                        </div>
                      </v-card-title>
                    </v-card>
                    <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                      <v-card-media>
                        <img class="pl-3" src="static/icons8-businessman-64.png">
                      </v-card-media>
                      <v-card-title>
                        <div>
                          <span class="white--text neonText" style="font-size: 1.5rem">32 235</span><br>
                          <span class="white--text">inspektorlar</span><br>
                          <span class="blue--text">+3 % bir kunlik</span>
                        </div>
                      </v-card-title>
                    </v-card>
                    <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                      <vue-ellipse-progress
                        :data="circles"
                        :progress="50"
                        :angle="90"
                        color="blue"
                        :colorFill="grey"
                        emptyColor="#2B2B2CFF"
                        :emptyColorFill="emptyColorFillGradient"
                        :size="180"
                        :thickness="20"
                        emptyThickness="5%"

                        lineMode="normal"
                        :legend="true"
                        :legendValue="100"
                        :legendFormatter="({currentValue}) => new Intl.NumberFormat('de-DE').format(currentValue)"
                        legendClass="legend-custom-style"
                        dash="60 0.9"
                        animation="reverse 700 400"
                        :noData="false"
                        :loading="true"
                        :determinate="true"
                        fontColor="white"
                        :half="false"
                        :gap="10"
                        dot="15% white"
                        :legendClass="ligtEffectBlue"
                        fontSize="1rem">

                        <span slot="legend-value" style="color: #ffff00!important; font-weight: bold!important;">/200</span>
                        <p slot="legend-caption" style="color: white; font-weight: bold">YAAT</p>

                      </vue-ellipse-progress>
                    </v-card>
                </div>
            </v-card>
          </v-flex>
          <v-flex class="elevation-0 pl-5" d-flex xs12 sm6 md4>
            <v-card class="gradientColorClass">
              <div class="d-flex">
                <v-card width="100px" class="lg6 sm6 xs6 pa-2 ma-2 gradientColorClass" style="border: 1px solid black; font-size: 1.7rem; font-weight: bold; color: #eed912; position: relative; right: 30px">YAAT TIZIMLARI</v-card>
                <v-card class="lg6 sm6 xs6 pa-2 ma-2 gradientColorClass" style="border: 1px solid black; text-align: center; font-size: 1.7rem; font-weight: bold; color: black;">10</v-card>
              </div>
              <v-card style="background-color: rgba(115,144,168,0.58)!important; position: relative; right: 15px">
                <data-table/>
              </v-card>
              <div class="d-flex">
                <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                  <v-card-media>
                    <img class="pl-3" src="static/icons8-policeman-64.png">
                  </v-card-media>
                  <v-card-title>
                    <div>
                      <span class="white--text neonText" style="font-size: 1.5rem">32 235</span><br>
                      <span class="white--text">inspektorlar</span><br>
                      <span class="blue--text">+3 % bir kunlik</span>
                    </div>
                  </v-card-title>
                </v-card>
                <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                  <v-card-media>
                    <img class="pl-3" src="static/icons8-businessman-64.png">
                  </v-card-media>
                  <v-card-title>
                    <div>
                      <span class="white--text neonText" style="font-size: 1.5rem">32 235</span><br>
                      <span class="white--text">inspektorlar</span><br>
                      <span class="blue--text">+3 % bir kunlik</span>
                    </div>
                  </v-card-title>
                </v-card>
                <v-card class="lg4 sm6 xs12 pa-2 ma-2 gradientColorClassCardFooter">
                  <vue-ellipse-progress
                    :data="circles"
                    :progress="50"
                    :angle="90"
                    color="blue"
                    :colorFill="grey"
                    emptyColor="#2B2B2CFF"
                    :emptyColorFill="emptyColorFillGradient"
                    :size="180"
                    :thickness="20"
                    emptyThickness="5%"

                    lineMode="normal"
                    :legend="true"
                    :legendValue="100"
                    :legendFormatter="({currentValue}) => new Intl.NumberFormat('de-DE').format(currentValue)"
                    legendClass="legend-custom-style"
                    dash="60 0.9"
                    animation="reverse 700 400"
                    :noData="false"
                    :loading="false"
                    fontColor="white"
                    :half="false"
                    :gap="10"
                    dot="15% white"
                    :legendClass="ligtEffectBlue"
                    fontSize="1rem">

                    <span slot="legend-value" style="color: #ffff00!important; font-weight: bold!important;">/200</span>
                    <p slot="legend-caption" style="color: white; font-weight: bold">YAAT</p>

                  </vue-ellipse-progress>
                </v-card>
              </div>
            </v-card>
          </v-flex>
          <v-flex class="elevation-10" d-flex xs12 sm6 md4>
            <v-card color="purple" dark>
              <div class="row">
                <v-card class="overflow-auto mx-auto" height="48%" width="100%">
                  <v-card class="ma-2" prepend-icon="mdi-home">
                    <v-card-text class="text-h4" style="font-size: 20px; font-weight: bolder; text-align: center; color: gold">asdasdsad</v-card-text>
                  </v-card>
                </v-card>
                <v-card class="overflow-auto mx-auto" height="48%" width="100%">
                  <v-card class="ma-2" prepend-icon="mdi-home">
                    <v-card-text class="text-h4" style="font-size: 20px; font-weight: bolder; text-align: center; color: gold">ккеекек</v-card-text>
                  </v-card>
                </v-card>
              </div>
            </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {

  data() {
    const myFormatter = ({ currentValue, currentRawValue, duration, previousCountStepValue, start, end, difference, oneStepDifference, startTime, elapsed }) => {
        return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(currentValue);
      }
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`

    }
  },
}
</script>

<style>
  .gradientColorClass {
    background: #3b5474;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3B5474FF, #3B5474FF, #3B5474FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .gradientColorClassCardFooter {
    background: #3f4265;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #3f4265, #3f4265, #3f4265);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3f4265, #3f4265, #3f4265); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-color: #4478a1 !important;
    box-shadow:0 0 10px #3d92d5 !important;
  }
  .ligtEffectBlue {
    border-color: #4478a1 !important;
    box-shadow:0 0 10px #3d92d5 !important;
  }
  .ligtEffectWhite {
    border-color: #ffffff !important;
    box-shadow:0 0 10px #ffffff !important;
  }
  .neonText {
    color: #fff;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff
      /*0 0 42px #0fa,*/
      /*0 0 82px #0fa*/
      /*0 0 92px #0fa,*/
      /*0 0 102px #0fa,*/
      /*0 0 151px #0fa;*/
  }
</style>
