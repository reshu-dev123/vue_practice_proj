<template>
  // eslint-disable-next-line
  <!-- Binding Attributes -->
  <h1 :id="isDynamicId">Dynamic id Attribute Binding</h1>
  <button :disabled="isDisabled">Button</button>
  <button :disabled="isEnabled">Button</button>
  <h1 :class="['Underline', 'text-color', 'bg']">{{ msg }}</h1>

  <!-- Binding Classes -->
  <h1 :class="isPromoted && 'promoted'">Promoted Movie</h1>
  <h1 :class="isSoldOut ? 'soldOut' : 'new'">SoldOut Movie</h1>
  <h1 :class="['new', 'promoted']">newly promoted Movie</h1>
  <h1 :class="[isPromoted && 'promoted', isSoldOut ? 'soldOut' : 'new']">
    Array conditional movie
  </h1>
  <h1
    :class="{
      promoted: isPromoted,
      new: !isSoldOut,
      soldOut: isSoldOut,
    }"
  >
    Object Conditional movie (promoted but SoldOut)
  </h1>

  <!-- inline style -->
  <h1 :style="{ color: highlightColor, 'font-size': headerSize + 'px' }">
    Inline Style
  </h1>
  <h1
    :style="{
      color: Textcolor,
      fontStyle: Textstyle, //css prop camelcase
      padding: '30px', //we can also bind static styles directly
      background: 'black',
      'font-size': Textsize + 'px', //css prop inside single code
    }"
  >
    Vue is awesome!
  </h1>
  <!-- obj approach for adding inline style-->
  <h1 :style="vueTxtStyleObj">Vue is awesome!(style object)</h1>
  <!-- Array approach for adding inline style(last obj overrides first)-->
  <div :style="[baseStyleObject, successStyleObject]">Success Style</div>

  <!-- Conditional Rendering -->
  <h1 v-if="num === 0">The number is zero</h1>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is positive</h2>
  <h2 v-else>Not a number</h2>
  <!-- template = seperate bolck , Div= inside 1 block -->
  <template v-if="display">
    <h2>Vishwas</h2>
    <h2>Codevolution</h2>
    <h2>Vue 3</h2>
  </template>
  <h2 v-show="showElement" :class="['Underline', 'text-color']">
    V-show toggles html with display none doesn't remove element from DOM
  </h2>
  <h2 v-if="showElement" :class="['Underline', 'text-color']">
    V-if toggles html removes element from DOM
  </h2>

  <!-- List Rendering -->
            <!-- Rendering array of strings V-for -->
  <h1
    v-for="name in names"
    :key="name"
    :style="{ fontSize: 20 + 'px', color: 'blueviolet' }"
  >
    {{ name }}
  </h1>
            <!-- Rendering array of Objects using V-for -->
  <h1 v-for="emp in employees" :key="emp" :style="{ fontSize: 20 + 'px' }">
    {{ emp.name }} , {{ emp.email }}
  </h1>
            <!-- Rendering array of arrays using V-for -->
  <div v-for="actor in actors" :key="actor">
    <h1>{{ actor.name }}</h1>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
            <!-- iterate through properties of an object -->
  <h1 v-for="(value,index,key) in myInfo" :key="value">{{key}}{{value}}{{index}}</h1>


  <!--Conditional List Rendering -->
  <template v-for="name in names" :key="name"> 
    <h1 :style="{color:'blueviolet'}" v-if="name == 'Casy'"> {{name}}</h1>
  </template>
</template>
<script>
export default {
  data() {
    return {
      isPromoted: true,
      isSoldOut: true,
      isDynamicId: "dynamicId",
      isDisabled: true,
      isEnabled: false,
      display: true,
      showElement: true,
      num: 5,
      msg: "hello world",
      highlightColor: "orange",
      headerSize: 50,
      Textcolor: "violet",
      Textstyle: "italic",
      Textsize: 30,
      awesome: true,
      // obj approach for adding inline style
      vueTxtStyleObj: {
        color: "violet",
        padding: "30px",
        background: "black",
        fontStyle: "italic",
        fontSize: 30 + "px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
      names: ["Jack", "Casy", "Kwhetzal"],
      employees: [
        { name: "Ram", email: "ram@gmail.com", age: 23 },
        { name: "Shyam", email: "shyam23@gmail.com", age: 28 },
        { name: "John", email: "john@gmail.com", age: 33 },
        { name: "Bob", email: "bob32@gmail.com", age: 41 },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "American Psycho"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
       myInfo: {
        name: 'Vishwas',
        channel: 'Codevolution',
        course: 'Vue 3',
      },
    };
  },
  methods: {
    toggle() {},
  },
};
</script>
<style>
.promoted {
  font-style: italic;
}
.new {
  font-style: normal;
  color: rgb(23, 177, 23);
}
.soldOut {
  color: gray;
}
#dynamicId {
  color: red;
  background-color: rgb(240, 202, 152);
  font-weight: 500;
}
.Underline {
  text-decoration: Underline;
}
.text-color {
  color: blue;
}
.bg {
  background-color: yellow;
  font-weight: 500;
}
</style>