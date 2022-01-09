<template>
    <div>
        <h1 id="title">Select Matchup</h1>
    </div>
    <div class="container">
        <MatchupCard />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import MatchupCard from '../components/MatchupCard.vue';

export default defineComponent({
  name: 'MatchupPicker',
  components: {
    MatchupCard,
  },
});
</script>

<style scoped>
#title {
  padding: 0em 1.2em;
}
.aboutItem {
  padding: 0em 2em;
}
.container {
  text-align: center;
}
</style>
