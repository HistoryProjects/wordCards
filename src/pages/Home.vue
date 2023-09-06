<template>

    <div class="wrapper w-full min-h-[45vw] py-16 text-gray-100 px-5 md:px-20"> <!--fixed overflow-hidden-->
        <div class="sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12">
            
            <div class="text ">
                <h1 class=" text-4xl font-bold">Изучайте новые слова<br> с помощью карточек</h1>

                <p class="mt-8 text-lg font-medium">
                    Расширяйте свой словарный запас с помощью нашего 
                    приложения. Независимо от того, 
                    являетесь ли вы новичком или продвинутым - наша 
                    платформа поможет вам продвинуться в изучении 
                    языка. Изучйте слова с карточками и закрепляйте все на упражнениях. 
                    Начните заниматься прямо сейчас и наблюдайте, как 
                    растет ваш прогресс!»
                </p>
            </div>
                
                <router-link :to="'/Studied'">
                    <button class="bg-[#4555F0] w-[300px] px-5 py-5 rounded-[40px] text-3xl font-bold mt-10">Начать сейчас</button>
                </router-link>
                
         
            
        </div>
    </div>
</template>

<style scoped>

.wrapper{
    background-image: url('../assets/baner.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    background-blend-mode: screen;
}

.text{
    width: 100%;
    background: rgba(62, 62, 62, 0.2);
    backdrop-filter: blur(10px); 
    padding: 20px;
}


</style>