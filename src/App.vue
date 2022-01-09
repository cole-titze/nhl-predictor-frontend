<template class="darkTheme">
    <n-config-provider :theme-overrides="darkTheme">
      <header>
        <TopNavigation />
      </header>
      <main>
        <router-view/>
      </main>
    </n-config-provider>
</template>

<script>
import { NConfigProvider, darkTheme } from 'naive-ui';
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'App',
  components: {
    TopNavigation,
    NConfigProvider,
  },
  data() {
    return {
      darkTheme,
    };
  },
};
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1{
  color: #e7e7e7;
  font: 'Segoe UI';
  font-weight: 600;
  font-size: 35px;
}

h2{
  font: 'Segoe UI';
  font-weight: 400;
}

h3{
  font: 'Segoe UI';
  margin: 0px 0px;
  font-weight: 600;
}

.loading {
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loadingImage {
  width: 150px;
}
body {
  background: #101014
}
</style>
