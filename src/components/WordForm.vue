<template>
<form class="card-form mt-16" @submit.prevent>
    <!--width: 400px;
    height: 35px;
    padding: 10px;
    margin: 15px 20px;-->
    <input type="text" 
            class="w-full h-8 p-5 border-[3px] border-[#2386A6]" 
            id="word" 
            placeholder="Слово"
            :value="word"
            @input="word = $event.target.value"
    ><br>
    <input type="text" 
            class="w-full h-8 p-5 border-[3px] border-[#2386A6] mt-5" 
            id="translate" 
            placeholder="Перевод"
            :value="translation"
            @input="translation = $event.target.value"
    ><br>

    <input type="text" 
            class="w-full h-8 p-5 border-[3px] border-[#2386A6] mt-5" 
            id="imgURL" 
            placeholder="Путь к файлу изображения"
            :value="imgURL"
            @input="imgURL = $event.target.value"
    ><br>

 
    <button class="mt-5 float-right bg-[#2386A6] p-3 text-lg font-medium text-white cursor-pointer" @click="addWord">Добавить</button>
 </form>
</template>

<script>


export default{
    name: 'WordForm',
    props:{
      cards: Array
   },
    data(){
        return{
            word:'',
            translation:'',
            imgURL: '',
            //cyrilic: /^[а-яА-Я]+$/,
            //latin: /^[a-zA-Z]+$/,
            //symbols: /^[0-9@#$%:^&?!";,.*()_+-=]+$/
        }
    },
    methods:{
        addWord(){

            const newCard = {
                id: this.cards.length + 1,
                word: this.word,
                translation: this.translation,
                img: this.imgURL,
            }

            this.imgURL = '';

            if(this.word != '' && this.translation != ''){
                for(let item of this.cards){
                    if(this.word == item.word){
                        alert("Вы уже добавляли данное слово")
                    }

                }
                this.cards.push(newCard)
            }
            
            else if(this.word == '') alert('Введите слово')
            else if(this.translation == '') alert('Введите перевод')

            this.word = '';
            this.translation = '';
        }
    }
}
</script>

