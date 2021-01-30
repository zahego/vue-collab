<template>
  <div>
    <h3>Spine Application</h3>
    <div class="legend">
      <span>Double click to mark as finish</span>
      <span> 
          <span class="incomplete-box"></span> = Incomplete </span>
      <span>
        <span class="complete-box"> </span> = Complete
      </span>
    </div>
    <div class="spineays">
      <div
      @dblclick="onDblClickUpdate(oneSpine)"
        v-for="oneSpine in getAllSpinesWithGetter"
        :key="oneSpine.id"
        v-bind:class="{'is-complete': oneSpine.completed}"
        class="spineay"
      >
        {{ oneSpine.title }}
        <i
          class="fas fa-trash-alt"
          @click="deleteSpineFromActions(oneSpine.id)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Spine",
  methods: {
    ...mapActions(["fetchAllspineFromActions", "deleteSpineFromActions", "updateSpineFromActions"]),
    onDblClickUpdate(spineStuffy){
        const updateSpineFromSpine = {
            id: spineStuffy.id,
            title: spineStuffy.title,
            completed: !spineStuffy.completed
        }
        this.updateSpineFromActions(updateSpineFromSpine);
    }
  },
  computed: mapGetters(["getAllSpinesWithGetter"]),
  //life cycle method
  created() {
    this.fetchAllspineFromActions();
  },
};
</script>

<!--scope means the css only pertains to this Spine.vue-->
<style scope>
.spineays {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.spineay {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
display: flex;
justify-content: space-around;
margin-bottom: 1rem;
}
.complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    color: #fff;
    background: #35495e;
}
.incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
}
.is-complete{
color: #fff;
    background: #35495e;
}
@media (max-width: 500px){
    .spineays{
        grid-template-columns: 1fr;
    }
}
</style>