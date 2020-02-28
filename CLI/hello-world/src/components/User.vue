<template>
    <div class="component">
        <h1>Parent Components</h1>
        <hr>
        <button @click="changeName">Change Name</button>
        <p>{{user_name}}</p>
        <p>Age {{userAge}}</p>
        <div class="row">
            <div class="col-xs-6 col-sm-6">
                <app-user-detail
                :user_name="user_name"
                @nameWasChange="user_name = $event"
                :resetFn="resetName"
                :userAge='userAge'
                ></app-user-detail>
            </div>
            <div class="col-xs-6 col-sm-6">
                <app-user-edit
                :user_name="user_name"
                :userAge="userAge"
                :resetFn="resetName"
                @ageWasChange="userAge = $event"
                :changeAgeFn="changeAge"
                ></app-user-edit>
            </div>
        </div>
    </div>


</template>

<script>

import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'
export default {
     data:function(){
        return {
            user_name:'Rathod Paresh',
            userAge:29
        };
    },
    methods:{
        changeName(){
            this.user_name = 'JP Rathod';
        },
        resetName(user_name){
            this.user_name = user_name; /* Notify Changes in Child component */
            this.user_name = 'Rathod Paresh'; /* Set by Fn */
        },
        changeAge(){
            this.userAge = 21;
        },

    },
   components:{
       'app-user-detail':UserDetail,
       'app-user-edit':UserEdit
   }
}
</script>
<style>
    div{
        background-color:red;
    }
</style>


