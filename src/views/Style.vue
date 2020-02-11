<template>
  <v-row>
    <v-col cols="12">
      <p class="title text-center mb-2 font-weight-bold">Let's figure out your style next</p>
      <p class="body-2 text-center">Choose a style that suits your logo</p>
    </v-col>

    <v-col cols="12" v-for="style in styleList" class="mb-2" :key="style.first+style.second">
      <v-card 
        :style="`background-color: ${getColor}`" 
        :id="`logo-${style.id}`" 
        @click="setStyle(style.id)"
      >
        <v-card-text class="pa-12 display-1">
          <span :class="style.first" class="white--text">{{getCompanyName.split(' ')[0]}}</span>
          <span :class="style.second" class="white--text">{{getCompanyName.split(' ')[1]}}</span>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12">
      <v-btn rounded block color="primary" @click="generate">Generate Logo</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import htmlToImage from 'html-to-image'

export default {
  name: 'Style',
  computed: {
    ...mapGetters([
      'getCompanyName',
      'getColor'
    ])
  },
  data() {
    return {
      styleList: [
        { id: 0, first: 'text-capitalize font-weight-bold mr-4', second: 'text-capitalize font-weight-bold' },
        { id: 1, first: 'text-lowercase font-weight-bold mr-4', second: 'text-lowercase font-weight-bold' },
        { id: 2, first: 'text-uppercase font-weight-bold mr-4', second: 'text-uppercase font-weight-bold' },
        { id: 3, first: 'text-capitalize font-weight-bold', second: 'text-capitalize font-thin' },
        { id: 4, first: 'text-capitalize font-think', second: 'text-capitalize font-weight-bold' },
      ],
      currentStyle: null,
    }
  },
  methods: {
    setStyle(id) {
      this.currentStyle = id;
    },
    generate() {
      if (this.currentStyle === null) {
        return;
      }
      const node = document.getElementById('logo-'+this.currentStyle);
      htmlToImage.toPng(node).then( dataUrl => {
        const a = document.createElement('a');
        a.setAttribute("download", "Logo.png");
        a.setAttribute("href", dataUrl);
        a.click();
      }).catch(err => {
        throw err;
      });

      htmlToImage.toSvgDataURL(node).then( dataUrl => {
        const a = document.createElement('a');
        a.setAttribute("download", "Logo.svg");
        a.setAttribute("href", dataUrl);
        a.click();
      }).catch(err => {
        throw err;
      });
    }
  }
}
</script>