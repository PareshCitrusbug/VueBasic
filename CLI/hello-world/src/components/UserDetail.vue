<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-6">
               <h2>You May view the detail of User </h2>
                <h3> {{user_name}} </h3>
                <h3>Age: {{userAge}} </h3>
                <button @click="resetName" >Reset Name</button>
                <button @click="resetFn" >Reset Name FN</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        user_name: {
            type:String,
        },
        resetFn:Function,
        userAge:{
            type:Number,
        }
    },
    methods:{
        resetName(){
            this.user_name = 'Rathod Paresh';
            this.$emit('nameWasChange',this.user_name);
        }
    },
}
</script>

<style scoped>

</style>

