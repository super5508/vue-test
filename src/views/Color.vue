<template>
  <v-row>
    <v-col cols="12">
      <h2 class="headline font-weight-bold">Let's sort the colour next</h2>
      <p class="my-0 font-medium">Choose a colour for your logo</p>
    </v-col>
    <v-col cols="12" v-for="(color, index) in colors" :key="index">
      <v-card>
        <v-card-text class="py-1">
          <v-row>
            <v-col 
              cols="3" 
              v-for="detail in color" :key="detail" 
              :style="`background-color: ${detail};`"
              class="py-12"
              @click="setCurrentColor(detail)"
            ></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-btn
        block
        rounded
        color="primary"
        @click="nextStep"
      >Next</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Color',
  data() {
    return {
      colors: [
        [
          'rgb(16,17,88)', 'rgb(31, 64, 128)', 'rgb(64,128,229)', 'rgb(81,188,255)'
        ],
        [
          'rgb(72,2,87)', 'rgb(107, 2, 127)', 'rgb(146,33,216)', 'rgb(169,3,255)'
        ],
        [
          'rgb(20,87,27)', 'rgb(33, 128, 44)', 'rgb(68,230,91)', 'rgb(75,254,85)'
        ],
        [
          'rgb(27,88,87)', 'rgb(41, 128, 112)', 'rgb(80,231,196)', 'rgb(89,255,213)'
        ],
        [
          'rgb(87,2,36)', 'rgb(128, 6, 53)', 'rgb(229,22,230)', 'rgb(247,0,255)'
        ],
        [
          'rgb(89,76,0)', 'rgb(128, 121, 3)', 'rgb(242,230,6)', 'rgb(249,255,6)'
        ],
        [
          'rgb(87,22,0)', 'rgb(128, 52, 0)', 'rgb(230,120,22)', 'rgb(243,126,3)'
        ],
      ],
      currentColor: null
    }
  },
  methods: {
    ...mapMutations([
      'setColor'
    ]),
    setCurrentColor(color) {
      this.currentColor = color;
      this.setColor(color);
    },
    nextStep() {
      if (this.currentColor === null) {
        return ;
      }
      console.log(this.currentColor);
      this.$router.push({name: 'style'});
    }
  }
}
</script>