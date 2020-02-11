<template>
  <v-row class="py-12">
    <v-col cols="12">
      <v-text-field
        outlined
        rounded
        dense
        placeholder="Enter Your Business Name"
        color="primary"
        v-model="companyName"
        :error="err"
        :error-messages="err ? errMessage : ''"
      ></v-text-field>
    </v-col>
    <v-col cols="12" class="mb-12">
      <v-btn
        rounded
        color="primary"
        block
        @click="nextStep"
      >Next</v-btn>
    </v-col>
    <v-col cols="12" class="mt-12">
      <h3 class="headline primary--text text-center">"Dream Big. 
        Start Small. 
        But most of all, Start." 
        - Simon Sinek</h3>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Splash',
  data() {
    return {
      companyName: '',
      errMessage: '',
      err: false,
    }
  },
  methods: {
    ...mapMutations([
      'setCompanyName'
    ]),
    nextStep() {
      if (!this.companyName) {
        this.err = true;
        this.errMessage = 'Required';
        return ;
      }
      if (this.companyName.split(' ').length !== 2) {
        this.err = true;
        this.errMessage = 'Input 2 words.';
        return ;
      }
      this.setCompanyName(this.companyName);
      this.$router.push({name: 'color'});
    }
  }
}
</script>
