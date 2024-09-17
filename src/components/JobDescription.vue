<template>
  <v-container fluid class="description-container">
    <v-row align-content="space-around">
      <v-col cols="12" class="description-title">
        {{ this.title.toUpperCase() }}
      </v-col>
      <v-col cols="12" class="logo" justify="start">
        <img src="@/static/sber-cropped.svg" class="img-class">
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="description-date">{{ this.sinceDate }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <p class="description-description">{{ this.description }}</p>
    </v-row>
  </v-container>
</template>

<script>
import "@fontsource/fascinate/400.css"
export default {
  name: 'JobDescription',
  data() {
    return {
      title: null,
      employer: null,
      description: null,
      sinceDate: null,
      tillDate: null,
      personalFeelings: null,
      decisionToLeave: null,
      personalRate: null,
      employerLogo: null,
      order: null

    }
  },
  props: ["positionId"],
  methods: {
    savePosition(positionId) {
      console.log("POST", positionId);
    },
    getPosition(positionId) {
      console.log("GET", positionId);
      this.title = "Python Developer";
      this.employer = "";
      this.description = "Developer Developer Developer Developer Developer Developer Developer v Developer";
      this.sinceDate = "04.2024";
      this.tillDate = "";
      this.personalFeelings = null;
      this.decisionToLeave = null;
      this.personalRate = 4.5;
      this.employerLogo = null;
      this.order = null;
    },
  },
  created() {
    this.getPosition(1);
  }
}
</script>

<style scoped>
.description-container {
  border: #181818 10px solid;
  border-radius: 20px;
  width: 800px;
  height: 200px;
}
.description-title {
  font-weight: bold;
  padding: 10px;
  color: #181818;
  font-family: "Fascinate", serif;
  font-size: 34px;
  margin-left: 15px;
}
.description-date {
  color: #7c7474;
  margin-left: 15px;
  font-family: Fascinate, serif;
}
.description-description {
  color: #181818;
  margin-left: 15px;
  font-family: monospace, serif;
}
.img-class {
  height: 30px;
}
.logo {
  padding: 100px;
}
</style>