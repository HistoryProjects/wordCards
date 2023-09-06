<template>
    <h1 class="mt-12 mb-8 text-3xl font-bold text-center">Learned Word</h1>

    <Vocabulary :learnedWords="learnedWords" :cards="cards" />
</template>

<script>
import Vocabulary from '@/components/Vocabulary.vue';

export default{
   name: 'learnedWords',
   components:{
      Vocabulary
   },
   props:{
        learnedWords:{
            type: Object,
            required: true,
            default: () => {}
        },
        cards:{
            type: Object,
            required: true,
            default: () => {}
        },
   },
  

}
</script>

<style scoped>

</style>