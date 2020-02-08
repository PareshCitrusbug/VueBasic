<template>
    <div>
        <h1>{{username}}</h1>
        <hr/>
        <button @click="ChangeUser()">Change User</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            username: 'Paresh Rathod',
        }
    },
    methods: {
        ChangeUser(){
            this.username = "JP Rathod";
        }

    }
}
</script>

<style  scoped>
    div{
        background-color:royalblue;
    }
    h1{
        color:salmon;
    }
    button{
        padding:10px;
        font-size: 18px;
    }
</style>