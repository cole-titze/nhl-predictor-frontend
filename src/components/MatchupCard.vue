<template>
  <n-card class="basicCard">
      <div class="photoSection">
        <img class="teamImage" :src="awayImage"/>
        <img class="teamImage" :src="homeImage"/>
      </div>
      <h2 class="matchup">{{ matchupText }}</h2>
      <div class="teamRow">
        <n-dropdown @select="handleAwayTeamSelect" trigger="hover" :options="options">
          <n-button class="button">Away Team</n-button>
        </n-dropdown>
        <n-dropdown @select="handleHomeTeamSelect" trigger="hover" :options="options">
          <n-button>Home Team</n-button>
        </n-dropdown>
      </div>
      <div class="computeRow">
          <n-button class="compute" @click="computeMatchup()">
            Compute
          </n-button>
      </div>
  </n-card>
  <br>
  <n-card v-if="showComputation" class="basicCard">
    <div>
        <img class="teamImage" :src="winnerImage"/>
    </div>
    <h2 class="matchup">{{ winner }}</h2>
  </n-card>
</template>

<script>
import { defineComponent } from 'vue';
import { NCard, NButton, NDropdown } from 'naive-ui';
import teams from '../scripts/teams';
import Axios from '../axios/index';

const imageURI = 'https://vuepractice.blob.core.windows.net/logos/';
export default defineComponent({
  name: 'Matchup Card',
  components: {
    NCard,
    NButton,
    NDropdown,
  },
  data() {
    return {
      awayTeam: 'Oilers',
      homeTeam: 'Penguins',
      awayImage: `${imageURI}Oilers.png`,
      homeImage: `${imageURI}Penguins.png`,
      options: teams,
      showComputation: false,
      winner: '',
      winnerImage: '',
    };
  },
  methods: {
    handleAwayTeamSelect(key) {
      this.showComputation = false;
      this.awayTeam = key;
      this.awayImage = `${imageURI}${this.awayTeam}.png`;
    },
    handleHomeTeamSelect(key) {
      this.showComputation = false;
      this.homeTeam = key;
      this.homeImage = `${imageURI}${this.homeTeam}.png`;
    },
    computeMatchup() {
      const axios = new Axios();
      this.showComputation = true;
      // Call api and set data properties
      const number = axios.getRandom0or1();
      if (number === 0) {
        this.winner = this.awayTeam;
        this.winnerImage = `${imageURI}${this.awayTeam}.png`;
      } else if (number === 1) {
        this.winner = this.homeTeam;
        this.winnerImage = `${imageURI}${this.homeTeam}.png`;
      }
    },
  },
  computed: {
    matchupText() {
      const string = `${this.awayTeam} At ${this.homeTeam}`;
      return string;
    },
  },
});
</script>

<style scoped>
.compute {
  margin: 6em auto 0 auto;
}
.basicCard {
  margin: 25px;
  width: 600px;
  box-shadow: 1px 1px 10px #0000001c;
  display: inline-block;
}
.teamRow {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
}
.photoSection {
  display: flex;
  justify-content: space-between;
}
.teamImage {
  height: 180px;
  width: 180px;
}
.matchup {
  border-top-style: solid;
  border-width: 1px;
  padding-top: 10px;
}
</style>
