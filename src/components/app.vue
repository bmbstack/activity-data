<template>
  <div>
    <h1>activity-data</h1>
    <first></first>
    <second></second>
    <third></third>
  </div>
</template>

<script>
  import first from './first/first.vue';
  import second from './second/second.vue';
  import third from './third/third.vue';

  export default {
    components: {
        first,
        second,
        third
    },
  };
</script>
