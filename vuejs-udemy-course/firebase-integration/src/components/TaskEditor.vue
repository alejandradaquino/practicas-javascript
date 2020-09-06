<template>
    <b-card
        title="Edit Task"
        class="mb-2"
    >
        <b-card-text>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" class="form-control"  v-model="task.nombre">
                    </div>
                </div>
            </div>
        </b-card-text>

        <b-button href="#" variant="primary" @click="save">Save</b-button>
        <b-button href="#" variant="outline-primary" @click="cancel">Cancel</b-button>
    </b-card>
</template>
<script>
    export default {
        props:[
             'task'
        ],
        methods:{
            save(){
                this.$emit('onSave', this.task);
            },
            cancel(){
                this.$emit('onCancel');
            }
        }
    }
</script>

<style lang="css" scoped>
.row{
    margin-top:20px;
    margin-bottom:20px;
}
</style>