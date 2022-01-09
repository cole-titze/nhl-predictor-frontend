<template>
  <div id="TopNavigation">
    <n-grid x-gap="12" :cols="3">
      <n-gi class="nav-items">
        <n-space>
          <n-button style="font-weight: 600" @click="$router.push('/')" text>Home</n-button>
          <n-button
            style="font-weight: 600"
            @click="$router.push('/matchup')"
            text
            >Matchups</n-button
          >
        </n-space>
      </n-gi>
      <n-gi></n-gi>
      <n-gi>
        <img
          height="50"
          alt="vue logo"
          src="../assets/logo.png"
        />
      </n-gi>
    </n-grid>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {
  NButton, NGrid, NGi, NSpace,
} from 'naive-ui';

export default defineComponent({
  components: {
    NButton,
    NGrid,
    NGi,
    NSpace,
  },
});
</script>

<style scoped>
#TopNavigation {
  background-color: #18181c;
  text-align: center;
  padding: 10px 0px;
  height: 50px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #2d2d30;
}

.nav-items {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
