<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-6">
                <h3>User Edit HERE</h3>
                <p>Age : {{userAge}}</p>
                <button @click="changeAge" >Change the Age</button>
                <button @click="changeAgeFn" >Change the Age</button>
                <!-- <app-user-name></app-user-name> -->
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
        },
        changeAgeFn:Function,
    },
    methods:{
        changeAge(){
            this.userAge = 21;
        }
    },
}
</script>

<style scoped>
    div{
        background-color: aqua;
    }
</style>