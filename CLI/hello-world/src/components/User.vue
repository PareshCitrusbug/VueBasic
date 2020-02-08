<template>
    <div class="component">
        <h1>Parent Components</h1>
        <hr>
        <button @click="changeName">Change Name</button>
        <div class="row">
            <div class="col-xs-6 col-sm-6">
                <app-user-detail :user_name="user_name"></app-user-detail>
            </div>
            <div class="col-xs-6 col-sm-6">
                <app-user-edit></app-user-edit>
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
            user_name:'Rathod Paresh'
        };
    },
    methods:{
        changeName(){
            this.user_name = 'JP Rathod';
        }
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

