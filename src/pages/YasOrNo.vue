<template>

    <div class="w-full px-5">
        <h1 class="mt-12 text-3xl font-bold text-center">Yes or No</h1>

        <div class="mt-8 mx-auto w-full sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 px-2 py-4 border-4 border-blue-400">
            <button class="text-3xl font-bold px-2 w-full py-4 border-2 border-blue-400" @click="random">START</button><br>

            <div class="mt-5 flex justify-between items-center text-3xl">
                <div>
                    <i class="fa-solid fa-stopwatch text-[#1687CA]"></i> : {{ count }} сек.
                </div>

                <div>
                    <i class="fa-solid fa-star text-[#F7D000]"></i> : {{ points }}
                </div>
            </div>

            <div class="mt-5">
                <p class="font-bold text-center mb-10">
                    <span class="text-2xl">{{ word }}</span> | <span class="text-base">{{ translate }}</span>
                </p>

                <hr class="w-full h-[2px] border-none bg-blue-400">
            </div>

            <div class="w-full flex mt-6 text-white font-bold text-xl">
                <button :disabled="yesButtonDisabled" id="yes" 
                class="w-6/12 mr-2 py-2 rounded-md bg-[#20BC5C]" 
                @click="checkOfTrue(indexOne, indexTwo)"
                >
                Да
                </button>

                <button :disabled="noButtonDisabled" id="no" 
                class="w-6/12 py-2 rounded-md bg-red-500" 
                @click="checkOfFalse(indexOne, indexTwo)"
                >
                Нет
                </button>
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
           word: 'Слово',
           translate: 'Перевод',
           indexOne: 0,
           indexTwo: 0,
           points: 0,
           count: 60.00,
           timer: null,
           yesButtonDisabled: true,
           noButtonDisabled: true
        }
    },
   
    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.count--;
                if (this.count <= 0) {
                    clearInterval(this.timer);
                    alert("Время вышло");
                    this.yesButtonDisabled = true;
                    this.noButtonDisabled = true;
                }
                
            }, 1000);
        },
        checkOfTrue(ind1, ind2){
            if(ind1 === ind2) {
               this.points++
            } 

            this.generateWords()
        },
        checkOfFalse(ind1, ind2){
            if(ind1 != ind2) {
               this.points++
            } 

            this.generateWords()
        },
        randomIndex(){
            return Math.floor(Math.random() * this.cards.length);
        },
        generateWords(){
            let index1 = this.randomIndex();
            let index2 = this.randomIndex();

            this.indexOne = index1;
            this.indexTwo = index2;
        
            this.word = this.cards[index1].word
            this.translate = this.cards[index2].translation
        },
        random(){
            this.yesButtonDisabled = false;
            this.noButtonDisabled = false;
            this.generateWords()
            this.startTimer();
        
        }
    }
}
</script>

<style scoped>

</style>

