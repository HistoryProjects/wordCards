<template>
    <div class="w-full px-5">
        <h1 class="mt-12 text-3xl font-bold text-center">Make Word</h1>

        <div class="mt-8 mx-auto w-full sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 px-2 py-4 border-4 border-blue-400">
            <div class="mx-auto" >
                <h2 class="text-center text-xl font-bold">{{ translate }}</h2>
                <div id="lettersArea" class="mt-3 w-full pl-2 pr-4 pb-2 h-auto max-h-36 overflow-auto relative items-center rounded-xl border-4 border-[#B7E1E4]">
                    
                    <div class="mr-2 mt-2 px-2.5 py-1 inline-block text-center hover:bg-[#5AA6C1]
                        uppercase text-lg cursor-pointer font bold rounded-lg border-2 border-[#B3CDFF]"
                        v-for="(item, i) in selectedLetters" :key="i"
                        @click="unDrawLetter(item, i)"
                        >
                        {{ item }}
                    </div>
                
                    <i v-if="selectedLetters.length !== 0 && compareStr === word" 
                        class="fa-regular fa-circle-check block ml-4 text-2xl text-green-600 absolute right-1 bottom-3"></i>
                    <i v-if="letters.length == 0 && compareStr !== word" 
                        class="fa-solid fa-circle-xmark block ml-4 text-2xl text-red-600 absolute right-1 bottom-3"></i>
                
                </div>

            
                <div class="mt-5 px-2 py-2 w-full h-40 border-2 border-blue-400">
                    <div class="mr-2 mb-2 px-2.5 py-1 inline-block text-center hover:bg-[#5AA6C1]
                        uppercase text-lg cursor-pointer font bold rounded-lg border-2 border-[#B3CDFF]"
                        v-for="(item, i) in letters" :key="i"
                        @click="drawLetter(item, i)"
                        >
                        {{ item }}
                    </div>
                </div>

                <button class="bg-[#E2DEDE] w-full h-10 mt-5 cursor-pointer" @click="generateWord">{{ buttonText }}</button>
                <span 
                    v-if="letters.length == 0 && compareStr !== word" 
                    class="mt-4 block text-center text-lg text-[#2386A6] font-medium cursor-pointer" 
                    @click="randomWord"
                    >
                    Не знаю
                </span>
            
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
           outString:'', //строка хранит выбранную букву
           word: '', //строка хранит en-слово
           letters: [], //массив букв
           selectedLetters: [], //вспомогательный массив для хранения выбранных букв
           translate: '---', //строка хранит ru-слово
           compareStr: '',
           buttonText: "Начать",
           area: null
           
        }
    },
    
    methods:{
        drawLetter(letter, index) {
             this.outString += letter;
            //Remove the letter from the letters array
            this.letters.splice(index, 1);

            this.selectedLetters.push(letter);

            this.compare()

        },
        unDrawLetter(letter, index){
            this.outString += letter;
            this.selectedLetters.splice(index, 1);
            this.letters.unshift(letter); 

            this.area = document.querySelector("#lettersArea");
           

            if(this.letters.length !== 0){
                this.area.classList.remove('wrong')
                /*this.compareStr = this.selectedLetters.join("");
                if(this.compareStr === this.word){
                    //alert("верно")
                    this.area.classList.add('correct')
                }else{
                    this.area.classList.add('wrong')
                    //alert("неверно")
                }*/
            }
            
        },
        compare(){
            if(this.letters.length === 0){
                this.compareStr = this.selectedLetters.join("");
                if(this.compareStr === this.word){
                    //alert("верно")
                    this.area.classList.add('correct')
                   
                    setTimeout(() => this.generateWord(), 1000);
                }else{
                    this.area.classList.add('wrong')
                    //alert("неверно")
                }
            }
        },
        randomIndex(){
            return Math.floor(Math.random() * this.cards.length);
        },
        randomWord(){
            this.area = document.querySelector("#lettersArea");
            this.area.classList.remove('wrong')

            //Очищаем поле вывода при генерации след-го слова
            this.selectedLetters.length = 0;

            //Выбираем случайный индекс из массива карточек слов cards
            let index = this.randomIndex();

            //По индексу выбираем слово и перевод
            this.translate = this.cards[index].translation
            this.word = this.cards[index].word

            //Превращаем En-слово word в массив букв letters
            this.letters = this.word.split('')
            this.letters.sort(() => Math.random() - 0.5 )
        },
        generateWord(){
            this.area = document.querySelector("#lettersArea");
            this.area.classList.remove('correct')

            //textContent в начале "начать", 
            //при первом нажатии меняем на "продолить"
            if (this.buttonText === "Начать") {
                this.buttonText = "Продолжить";
            }

            if(this.letters.length != 0 ){
                alert("соберите слово")
            }
            else if(this.compareStr !== this.word){
                alert("Соберите слово правильно")
            }
            else{
                this.randomWord()
            }

        },
        
    }
}
</script>

<style scoped>
.correct{ border: solid #16A34A 4px }

.wrong{ border: solid #DC2626 4px }
</style>