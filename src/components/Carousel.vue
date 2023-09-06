<template>
<div class="">
    <div v-if="cards.length > 0" class="carousel-container w-full flex flex-col justify-center  mt-12 pb-12 relative">  
        <!--<p class="text-lg font-bold text-center mb-2.5" v-if="cards.length > 0">
          {{ currentIndex + 1 }} / {{ cards.length }}
        </p>-->
        <div class="cardWrapper mx-auto flex flex-col items-center justify-center">
            <div class="arrows mx-auto flex justify-between items-center">
              <i class="fa-solid fa-circle-chevron-left leafBtn" @click="prevCard"></i>
               <p class="text-lg font-bold text-center mb-2.5" v-if="cards.length > 0">
                    {{ currentIndex + 1 }} / {{ cards.length }}
                </p>
              <i class="fa-solid fa-circle-chevron-right leafBtn" @click="nextCard"></i>
            </div>
          
          
            <div class="carousel cursor-pointer mt-5">
            <div class="card" v-for="card, index in cards" :key="index" @click="rotateCard" :class="{ 'card-slider__card--center': index === currentIndex,'card-slider__card--inactive':index!==currentIndex }">
               
                <div class="card-content front" >
                    <img class='slide__image' :src="card.img" v-if="card.img != '' ">
                    {{card.word}}
                    <!--<span style="">{{item}}</span>--> 
                </div>

                <div class="card-content back">
                    
                    <img class='slide__image' :src="card.img" v-if="card.img != '' ">
                    {{card.translation}}
                </div> 

                 
            </div>
            </div>
            
            <!--<i class="fa-solid fa-circle-chevron-right leafBtn" @click="nextCard"></i>-->
        </div>

        <div class="cardFooter flex justify-center mt-5 px-5">
            <button class="resultBtn learn" @click="learned(currentIndex)">
                <i class="fa-solid fa-check"></i>
                <span>Запомнил</span>
            </button>
        </div>  
    </div>

    <div v-else class="learned-messsage mt-12">
    
        <img src="../assets/face.png" alt="face">
       

        <p v-if="learnedWords.length == 0 && cards.length == 0">
           У вас пока нет слов. Добавьте новые.
        </p>
        <p v-else-if="learnedWords.length > 0 && cards.length == 0">
           Поздравляем! Вы выучили все слова. Добавьте новые.
        </p>
    </div>

     <!---->
    <button  
        class="plus
        ml-40  bg-[#EA163E] rounded-full 
        text-3xl text-bold text-white
        absolute sm:w-[70px] sm:h-[70px] 
        sm:right-[10%] md:right-[12%] 
        lg:right-[20%]  xl:right-[25%] 2xl:right-[30%]
        "
        @click="elemHidden">+
    </button>

    <div v-if="this.visible == true" class="modal-wrapper">
        <div class="modalForm px-5 py-5">
          <div class="flex justify-between">
             <h3 class="text-2xl font-bold ">Добавить слово</h3>
             <i class="fa-solid fa-xmark text-3xl text-[#2386A6] cursor-pointer" @click="elemHidden()"></i>
          </div>
           
          <WordForm :cards="cards" />
          
        </div>
    </div>
</div>
</template>

<script>
import WordForm from './WordForm.vue';

export default{
   name: 'Carousel',
   components:{
      WordForm
   },
   props:{
      currentIndex: Number,
      cards:{
            type: Object,
            required: true,
            default: () => {}
      },
      learnedWords:{
            type: Object,
            required: true,
            default: () => {}
      }
   },
   data(){
      return{
        visible: false
      }
   },
    methods:{
      elemHidden(){
          this.visible = !this.visible;
      },
         //carousel
         rotateCard(event){
            event.srcElement.parentNode.classList.toggle("active");
        }, 
        learned(index){
            const lernedWord = {
              id: this.learnedWords.length + 1,
              word: this.cards[index].word,
              translation: this.cards[index].translation,
              img: this.cards[index].img,
            }

            this.learnedWords.push(lernedWord);
            this.cards.shift();
        },
        nextCard() {
          this.$emit('next');
        },
        prevCard() {
           this.$emit('prev');
        },
        showElement(elementIndex) {
           this.currentitem = elementIndex;
        }
    }
    

}
</script>

<style scopeds>
@import url(../assets/css/carousel.css);

</style>



