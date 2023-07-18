<template>
  // eslint-disable-next-line
  <div>
    <pre>
      {{JSON.stringify(formValues,null,2)}}
    </pre>
  </div>
 <!-- Form Handling -->
<form @submit="submitForm">
  <div>
    <label for="name">Name</label>
          <!--vue modifier trim(ignore whitespaces ), lazy (reflect input val after completely ebtering it and clicking outside) -->
  <input type="text" id="name" v-model.trim.lazy="formValues.name">
  </div>
  <div>
    <label for="profileSummary">Profile Summary</label>
    <textarea  id="profileSummary" v-model="formValues.profileSummary"/>
  </div>
  <!-- Select box Handling -->
   <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <!-- Select box (Multiple values) Handling -->
     <div>
      <label for="job-location">Job location</label>
      <select id="job-location" v-model="formValues.jobLocation" multiple>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
         <option value="thailand">Thailand</option>
        <option value="china">China</option>
        <option value="tokyo">Tokyo</option>
      </select>
    </div>
    <!-- checkbox Handling -->
     <div>
      <input
        id="remoteWork"
        type="checkbox"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <!-- Multiple checkbox Handling -->
    <div>
       <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <!-- RadioButton handling -->
     <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">5-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <div>
      <!-- vue modifier number (def=str,takes i/p as num),keyup(when enter i/p form submitss) -->
      <label for="age">Age</label>
      <input @keyup.enter="submitForm" type="number" id="age" v-model.number="formValues.age"/>
    </div>
    <!-- submitting Form -->
    <div>
      <button>Submit</button>
    </div>
</form>
</template>
<script>
export default {
  data() {
    return {
    formValues:{
      name:'',
      profileSummary:'',
      country:'',
      jobLocation:[],
      remoteWork:'',
      skillSet:[],
      yearsOfExperience:'',
      age:null
    }

    };
  },
  methods: {
   submitForm(event){
    event.preventDefault()
    console.log('Form Values',this.formValues)
   }
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
.pad-1{
  padding: 4px 8px;
}
.mar-1{
  margin: 6px;
}
.flex{
  display: flex;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>