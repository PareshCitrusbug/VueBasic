<template>


    <div>
        <div>
            <app-user></app-user>
        </div>
        <div>
            <!-- <user-name v-for="user in 5" v-bind:key="user"></user-name> -->
        </div>
    </div>

</template>

<script>
// import UserName from './UserName.vue'
import User from './User.vue'
export default {
   components:{
    //    'user-name':UserName,
       'app-user':User,
   }
}
</script>

<style  scoped>
    div{
        background-color: bisque;
    }
</style>

