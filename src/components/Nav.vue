<template>
    <div class="w-full bg-white border-b-[6px] border-[#C6D1D9]">
        <nav class="nav w-11/12 md:w-11/12 mx-auto px-5 py-5 text-[#2386A6] font-bold flex justify-between items-center">
    
            
            <div class="w-full md:w-auto flex items-center justify-between">
                <router-link :to="'/'"><img src="../assets/logo.png" alt="logo" width="120" height="40"></router-link>
                <img src="../assets/menu32.png" alt="bar" class="cursor-pointer block md:hidden" @click="toggleMenu">
            </div>


            <ul class="menu w-full md:w-9/12  list-none md:flex flex-col md:flex-row justify-start md:justify-end gap-0 md:gap-10  items-center
            h-full pt-8 md:pt-0 hidden 
            absolute top-20 right-0  md:static z-[99999]
            bg-[#2386A6] md:bg-transparent 
            text-white md:text-[#2386A6]
            ">
                
                <li class="w-full md:w-auto text-center md:text-left py-2">
                    <router-link tag="a" :to="'/'" active-class="activeUrl">Home</router-link>
                </li>
                <li class="has-submenu relative w-full md:w-auto text-center md:text-left py-2">
                    
                        
                    <span>Слова</span>
                    <!--<i class="triangle fa-solid fa-sort-down fa-xl ml-2  cursor-pointer" @click="subMenu($event)"></i>-->
                    <img src='../assets/down-blue.png' class="hidden md:inline ml-2  cursor-pointer" @click="subMenu($event)">
                    <img src='../assets/down-white.png' class="inline md:hidden ml-2  cursor-pointer" @click="subMenu($event)">
            
                    <ul class="mt-2 md:mt-0 submenu w-full md:w-[180px] relative  md:absolute md:top-12 bg-[#F4F4F4] shadow-lg hidden text-[#2386A6]">
                        <li class="py-2 px-5 border-[3px] border-t-[#2386A6]">
                            <router-link 
                               tag="a" 
                               active-class="activeUrl" 
                               :to="'/Studied'"
                            >
                               На изучении
                            </router-link>
                        </li>
                        <li class="py-2 px-5 border-[3px] border-t-[#2386A6] border-b-[#2386A6]"><router-link tag="a" active-class="activeUrl" :to="'/LearnedWords'" >Выучено</router-link></li>
                    </ul>
                </li>
                <li class="has-submenu relative w-full md:w-auto text-center md:text-left py-2 ">
                    <span>Упражнения</span>
                    <!--<i class="triangle fa-solid fa-sort-down fa-xl ml-2 cursor-pointer" @click="subMenu($event)"></i>-->
                    <img src='../assets/down-blue.png' class="hidden md:inline ml-2  cursor-pointer" @click="subMenu($event)">
                    <img src='../assets/down-white.png' class="inline md:hidden ml-2  cursor-pointer" @click="subMenu($event)">
        

                    <ul class="mt-2 md:mt-0 submenu w-full md:w-[180px] relative  md:absolute md:top-12 bg-[#F4F4F4] shadow-lg hidden text-[#2386A6]">
                        <li class="py-2 px-5 border-[3px] border-t-[#2386A6]">
                            <router-link tag="a" :to="'/MakeWord'" active-class="activeUrl">
                                собери слово
                            </router-link>
                        </li>
                        <li class="py-2 px-5 border-[3px] border-t-[#2386A6]"><router-link tag="a" :to="'/YasOrNo'" active-class="activeUrl">да / нет</router-link></li>
                        <li class="py-2 px-5 border-[3px] border-t-[#2386A6] border-b-[#2386A6]"><router-link tag="a" :to="'/WriteWord'" active-class="activeUrl">Напиши слово</router-link></li>
                    </ul>
                </li>
            </ul>
            
        </nav>
    </div>
</template>
    
<script>
import { RouterLink } from 'vue-router'

export default{
    name: 'Navigation',
    components: {
       RouterLink
    },
    data(){
        return{
            downDesctop: '../assets/down-while.png',
            downMobile: '../assets/down-blue.png',
            links: [
                { id: 1, name: 'Home', url: '/'},
                { id: 2, name: 'Слова', 
                    subLinks: [
                        { id: 2.1, name: 'На изучении', url: '/Studied' },
                        { id: 2.2, name: 'Выучено', url: '/LearnedWords' }
                    ]
                },
                { id: 3, name: 'Упражнения',
                    subLinks: [
                        { id: 3.1, name: 'собери слово', url: '/MakeWord' },
                        { id: 3.2, name: 'да / нет', url: '/YasOrNo' },
                        { id: 3.3, name: 'Напиши слово', url: '/WriteWord' }
                    ]
                }
            ],
            activeLink: null 
        }
    
    },
    methods:{
        toggleElement(link){
            this.activeLink = link === this.activeLink ? null : link;
        },
        elemHidden(){
            this.$emit('elemHidden')
        },
        subMenu(event){
            const triangle = event.target;
            const currentLink = triangle.parentElement;
            const subMenu = currentLink.lastChild;

            const openSubMenus = document.querySelectorAll('.submenu:not(.hidden)'); // Ищем все открытые подменю

            // Перебираем все открытые подменю и скрываем их, если они не соответствуют текущему
            openSubMenus.forEach(openSubMenu => {
                if (openSubMenu !== subMenu) {
                  openSubMenu.classList.add('hidden');
                }
            });

            subMenu.classList.toggle('hidden');
        },
        toggleMenu(){
            //const menuIcon = document.querySelector('.menu-toggle');
            const menu = document.querySelector('.menu');
            menu.classList.toggle('hidden');
        }
       
    }

}
</script>
    
<style scoped>

.activeUrl{
    border-bottom: solid #2386A6 3px;
}

.triangleActive{ 
    transform: rotate(180deg);
}




    
</style>

