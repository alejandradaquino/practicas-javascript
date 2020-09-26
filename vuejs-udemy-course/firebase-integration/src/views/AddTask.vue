<template>
  <div>
    <TaskEditor :task="task" @onSave="onSave" @onCancel="$router.push({path:'/'})"></TaskEditor>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TaskEditor from "../components/TaskEditor";

export default {
  name: "AddTask",
  components: { TaskEditor },
  data() {
    return {
      task: { nombre: "" },
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSave(task) {
      this.addTask({ tarea: task, user: this.user });
      this.$router.push({ path: "/" });
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
