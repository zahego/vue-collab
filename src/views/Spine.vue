<template>
<div>
  <AddSpine />
  <FilterSpine />
    <Spine />
</div>
</template>

<script>
// @ is an alias to /src
import Spine from "@/components/Spine.vue";
import AddSpine from "@/components/AddSpine.vue";
import FilterSpine from '@/components/FilterSpine.vue';

export default {
  name: "Spineyard",
  components: {
    Spine,
    AddSpine,
    FilterSpine
  }
};
</script>
