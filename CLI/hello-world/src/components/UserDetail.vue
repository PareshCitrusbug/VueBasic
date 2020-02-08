<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-6">
               <h2>You May view the detail of User </h2>
                <h3> {{user_name}} </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['user_name']
}
</script>

<style scoped>

</style>

