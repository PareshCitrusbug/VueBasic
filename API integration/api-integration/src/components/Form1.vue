<template>
<div>
   <div class="container">
        <h2>Vertical (basic) form</h2>

            <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="user.email">
            </div>
            <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="user.password">
            </div>
            <div class="checkbox">
            <label><input type="checkbox" name="remember"> Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
            <br/>
            <br/>
            <hr/>
                <buttton class="btn btn-primary" @click="fetchData">Get Data</buttton>
            <br/>
            <br/>
            <ul class="list-group" >
                <li class="list-group-item" v-for="u in users" v-bind:key="u">{{u.email }} - {{u.password}}</li>
            </ul>

    </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
      return{
          user:{
                email:'',
                password:""
          },
          users:[]
      };
  },
  methods:{
      submit(){
          this.$http.post('https://demofirebase-2d309.firebaseio.com/users.json',this.user)
          .then(response =>{
              console.log('====================================');
              console.log(response);
              console.log('====================================');
          }, error =>{
              console.log('====================================');
              console.log(error);
              console.log('====================================');
          });
          console.log(this.user);

      },
      fetchData(){
          this.$http.get('https://demofirebase-2d309.firebaseio.com/users.json')
          .then(response =>{
              return response.json();
          }).then(data =>{
              const resultArray = [];
              for (let key  in data) {
                  resultArray.push(data[key]);
              }
              this.users = resultArray;
              console.log('====================================');
              console.log(data);
              console.log('====================================');
          });
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
