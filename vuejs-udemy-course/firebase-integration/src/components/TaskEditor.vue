<template>
    <b-card
        title="Edit Task"
        tag="taskedit"
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

        <b-button href="#" variant="primary">Save</b-button>
    </b-card>
</template>
<script>
    export default {
        props:[
             'task'
        ]
    }
</script>

<style lang="css" scoped>
.row{
    margin-top:20px;
    margin-bottom:20px;
}
</style>