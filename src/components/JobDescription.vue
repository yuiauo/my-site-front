<template>
  <v-container fluid class="description-container">
    <v-row>
      <v-col>
        <h2 class="description-title">
          {{ this.title.toUpperCase() }}
        </h2>
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
  border: #181818 5px solid;
  border-radius: 20px;
  width: 700px;
  height: 200px;
}
.description-title {
  font-weight: bold;
  color: #181818;
  font-family: "Fascinate", serif;
  font-size: 40px;
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
</style>