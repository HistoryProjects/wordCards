<template>
    <div class="w-full px-5">
       <h1 class="mt-12 text-3xl font-bold text-center">Write Word</h1>

        <div class="mt-8 mx-auto w-full sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 px-2 py-4 border-4 border-blue-400">
            <div class="mx-auto" >
                <h2 class="text-center text-xl font-bold">Перевод: {{ translate }}</h2>
            
                <!--
                <i v-if="selectedLetters.length !== 0 && compareStr === word" 
                        class="fa-regular fa-circle-check block ml-4 text-2xl text-green-600 absolute right-1 bottom-3"></i>
                <i v-if="letters.length == 0 && compareStr !== word" 
                        class="fa-solid fa-circle-xmark block ml-4 text-2xl text-red-600 absolute right-1 bottom-3"></i>-->

                <input @input="compare" v-model="inputValue" placeholder="Englesh translate" class="mt-2 w-full h-16 border-4 border-[#B7E1E4]">
                
                <p>{{inputValue }}</p>
                <p>{{ word }}</p>


                <button class="bg-[#E2DEDE] w-full h-10 mt-5 cursor-pointer" @click="generateWord()">{{ buttonText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        cards:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return{
           inputValue: '',
           word: '', 
           translate: 'text', 
           buttonText: "Начать",
        }
    },
    
    methods:{
        compare(){
           if(this.inputValue.length == this.word.length && this.inputValue === this.word){
              alert("верно")
           }
        },
        randomIndex(){
            return Math.floor(Math.random() * this.cards.length);
        },
        generateWord(){
            //textContent в начале "начать", 
            //при первом нажатии меняем на "продолить"
            if (this.buttonText === "Начать") {
                this.buttonText = "Продолжить";
            }

           //Выбираем случайный индекс из массива карточек слов cards
           let index = this.randomIndex();

            //По индексу выбираем слово и перевод
            this.translate = this.cards[index].translation
            this.word = this.cards[index].word

        },
        
    }
}
</script>

<style scoped>
.correct{ border: solid #16A34A 4px }

.wrong{ border: solid #DC2626 4px }
</style>