<template>
  <div>
    <AddSpine />
  </div>
</template>
<script>
// @ is an alias to /src
import AddSpine from "@/components/AddSpine.vue";

export default {
  //name should be different from component, so cant both be AddSpine
  name: "AddSpineYard",
  components: {
    AddSpine,
  },
};
</script>