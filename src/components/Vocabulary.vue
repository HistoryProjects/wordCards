<template>
    <div class="wordsWrapper w-full lg:w-9/12 mx-auto p-4">
        <div class="learnedWords  flex flex-col sm:flex-row items-center sm:justify-around" v-for="(item, index) in learnedWords" :key="item.id">
            <div class="text-[#303030] font-bold text-2xl text-center sm:text-left">{{uppercase(item.word)}}</div>
            <div class="mt-4 sm:mt-0 text-[#303030] font-bold text-2xl text-center sm:text-left">{{uppercase(item.translation)}}</div>

            
            <button class="wordAction repeatWrd" @click="repeatWord(index)">
                <i class="fa-solid fa-rotate-right"></i>
            </button>
        
        
            <button class="wordAction removeWrd w-full" @click="deleteWord(index)">
                <i class="fa-solid fa-trash"></i>
            </button>
          
        </div>

        <p v-if="learnedWords.length == 0" class="text-3xl font-bold">
           У вас пока нет выученых нет слов.
        </p>
    </div>
</template>
    
<script>
export default{
    name: 'Vocabulary',
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
    data(){
      return{
        learned: ''
      }
    },
    methods:{
        uppercase(text){
            return text.charAt(0).toUpperCase() + text.slice(1)
        },
        repeatWord(index){
            const repeat = {
                id: this.cards.length + 1,
                word: this.learnedWords[index].word,
                translation: this.learnedWords[index].translation,
                img: this.learnedWords[index].img,
            }
            this.cards.unshift(repeat);
            
            this.learnedWords.splice(index,1)
        },
        deleteWord(index){
            this.learnedWords.splice(index,1)
        }
    }
}
</script>
    
<style scoped>
/*.wordsWrapper{
 width: 70%;
 padding: 15px; 
 margin: 0 auto;
}*/

.learnedWords{
    border: solid 2px #d6d6d6;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px; 
    padding-right: 20px;
    /*display: flex;
    justify-content: space-around;
    align-items: center;*/
    margin-bottom: 10px;
    border-radius: 10px;
}

.wordAction{
    width: 90px;
    padding: 10px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
}

/*.line{
    width: 10%;
    text-align: center;
}*/

/*.word-text{
    font-size: 24px;
    font-weight: 600;
    color: #303030;
}*/

/*.wordAction{
    width: 90px;
    padding: 10px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
}*/

.repeatWrd{background-color: #4CBCDA}
.removeWrd{background-color: #E31A0F}

@media (min-width: 320px){
    .wordAction{
        width: 90%;
        margin-top: 20px;
    }
}

@media (min-width: 480px){
    .wordAction{
        width: 75%;
        margin-top: 20px;
    }

    
}

@media (min-width: 640px){
.wordAction{
    width: 90px;
    padding: 10px;
}


}
</style>