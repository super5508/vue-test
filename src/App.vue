<template>
  <v-app>
    <v-app-bar
      app
      color="white"
    >
      <v-row justify="center" align="center">
        <h3 class="title text-center primary--text">Founder's Design</h3>
      </v-row>
    </v-app-bar>
    <v-content class="grey lighten-4">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
</style>
