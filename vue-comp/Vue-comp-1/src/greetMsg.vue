<template>
    <div>
<h2>hello {{name}} ({{movie}})</h2>
    </div>
</template>

<script>
export default {
   
      name : "greetMsg",
      props : ['name','movie']

    }

</script>

<style>

</style>