<template>
  <div>
    <TaskEditor :task="tarea" @onSave="onSave" @onCancel="$router.push({path:'/'})"></TaskEditor>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TaskEditor from "../components/TaskEditor";

export default {
  name: "EditTask",
  components: { TaskEditor },
  mounted() {
    if (this.user) {
      this.getTask({ id: this.$route.params.id });
    } else {
      setTimeout(
        () => this.getTask({ id: this.$route.params.id }),
        1000
      );
    }
  },
  data() {
    return {
      task: { nombre: "" },
    };
  },
  methods: {
    ...mapActions(["getTask", "editTask"]),
    onSave(tarea) {
      this.editTask({ tarea });
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    ...mapState(["tarea", "user"]),
  },
};
</script>
