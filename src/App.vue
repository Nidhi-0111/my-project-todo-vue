<template>
  <div id="app">
    <Header />
    <router-view />
    <div>
      <app-slot>
        <div slot="header">
          <h3>This is the title of a form</h3>
          <p>This is some info about the form</p>
        </div>
        <div slot="fields">
          <input type="text" placeholder="name" required />
          <input type="password" placeholder="password" required />
        </div>
        <div slot="controls">
          <button v-on:click="handleSubmit">Submit</button>
        </div>

        <div id="data" slot-scope="{data}">
          <span>{{data.name}}</span>
           <span>{{data.company}}</span>
        </div>
        <!-- <div v-slot:default="slotProps">
              <span>{{slotProps.data.name}}</span>
        </div>-->
      </app-slot>
    </div>
  </div>
</template>

<script>
import Slots from "./components/Slots.vue";

import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
    "app-slot": Slots
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for submitting");
    }
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
span{
  border: 1px solid black;
}
</style>
