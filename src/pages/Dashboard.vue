<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <!-- DataTable&TimeLine Starts -->
          <v-flex d-flex lg4 sm6 xs12>
            <v-card>
                <v-card-title class="d-flex" >
                    <v-card style="width: 10vw;">
                      <v-card-title class="ma-2 shades elevation-5 text-h4" style="font-size: 20px; font-weight: bolder; text-align: center; color: gold">
                        Ички хизматлар
                      </v-card-title>
                    </v-card>
                    <v-card style="width: 10%;">
                      <v-card-title class="ma-2 shades elevation-5 text-h4" style="font-size: 20px; font-weight: bolder; color: gold">
                       50
                      </v-card-title>
                    </v-card>
                </v-card-title>
              <v-card-text>
                <data-table/>
              </v-card-text>
              <v-card-actions>
                <v-flex d-flex lg4 sm6 xs12>
                  <v-card>
                    <v-card-text>1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex lg4 sm6 xs12>
                  <v-card>
                    <v-card-text>1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex lg4 sm6 xs12>
                  <v-card>
                    <v-card-text>1</v-card-text>
                  </v-card>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex d-flex lg4 sm6 xs12>
        <v-card>
          <v-card-title class="ma-2 shades elevation-10 text-h4" style="font-size: 20px; width: 35%; font-weight: bolder; text-align: center; color: gold">
            Ички хизматлар
          </v-card-title>
          <v-card-text>
            <data-table/>
          </v-card-text>
          <v-card-actions>
            <v-flex d-flex lg4 sm6 xs12>
              <v-card>
                <v-card-text>1</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex lg4 sm6 xs12>
              <v-card>
                <v-card-text>1</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex lg4 sm6 xs12>
              <v-card>
                <v-card-text>1</v-card-text>
              </v-card>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
          <div class="row">
            <banner />
            <banner />
          </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando.`
    }
  }
}
</script>

<style>

</style>
