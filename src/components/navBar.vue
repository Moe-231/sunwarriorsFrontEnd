<script setup>
import { ref } from 'vue';

const isMenuVisible = ref(false)

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
    <nav class="relative flex bg-black">
        <!-- Nav Bar Left Section-->
        <div class="flex items-center justify-between overflow-hidden">
            <span class="flex items-center my-1">
                <router-link to="/" aria-label="Home Button">
                    <img class="animate-spin [animation-duration:15s]" src="/src/assets/sunIcon.png" alt="Logo image"
                        aria-label="Home Logo" height="20px" width="120px">
                </router-link>

            </span>
        </div>
        <!-- Nav Bar Right Section-->
        <div class=" w-full">
            <div class="flex h-full">
                <!-- Navigations -->
                <div class="hidden lg:flex h-full w-[70%] p-3 items-center justify-around">
                    <!-- Navigation Link -->
                    <span class="flex items-center bg-white rounded-2xl">
                        <router-link to="/" aria-label="Home navigation link">
                            <span class="flex items-center justify-between cursor-pointer mx-5 p-2 ">

                                <span class="hover:underline underline-offset-8 transition">UV Tracker</span>
                            </span>
                        </router-link>
                    </span>
                    <span class="flex items-center justify-center bg-white rounded-2xl">
                        <router-link to="/" aria-label="Home navigation link">
                            <span class="flex items-center justify-between cursor-pointer mx-5 p-2 ">

                                <span class="hover:underline underline-offset-8 transition">UV Tutor</span>
                            </span>
                        </router-link>
                    </span>
                    <span class="flex items-center justify-center bg-white rounded-2xl">
                        <router-link to="/" aria-label="Home navigation link">
                            <span class="flex items-center justify-between cursor-pointer mx-5 p-2 ">

                                <span class="hover:underline underline-offset-8 transition">Tailored Advice</span>
                            </span>
                        </router-link>
                    </span>
                    <span class="flex items-center justify-center bg-white rounded-2xl">
                        <router-link to="/" aria-label="Home navigation link">
                            <span class="flex items-center justify-between cursor-pointer mx-5 p-2 ">

                                <span class="hover:underline underline-offset-8 transition">Sun Shop</span>
                            </span>
                        </router-link>
                    </span>

                </div>
                <!-- Functionalities -->
                <div class="hidden lg:flex h-full w-[30%] items-center justify-end mr-2">
                    <div class="flex items-center">
                        <div class="flex items-center space-x-2 cursor-default p-4">
                            <span class="text-white">Live Index: </span>
                            <span class="relative pi pi-sun text-2xl text-yellow-500" style="color: yellow">
                                <span class="absolute -top-4 text-red-500 font-bold">2</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div class="relative border border-white flex justify-end w-full items-center lg:hidden">
                    <div class="mr-2">
                        <i class="pi pi-bars p-2 border rounded-2xl hover:bg-white cursor-pointer hover:text-black!"
                            style="color: white;" @click="toggleMenu"></i>
                    </div>
                    <div class="absolute w-[50%] bg-white p-2 top-0" v-if="isMenuVisible">
                        <div>
                            <div class="flex flex-col">
                                <!-- Close Icon -->
                                <div class="pb-2 border-b-2 flex justify-end">
                                    <i class="pi pi-times border p-2 rounded-2xl hover:bg-black hover:text-white! cursor-pointer"
                                        style="color: black;" @click="toggleMenu"></i>
                                </div>
                                <!-- Index Viewer -->
                                <div
                                    class="flex items-center justify-center space-x-2 cursor-default pt-5 pb-4 border-b-2">
                                    <span class="text-black">Live Index: </span>
                                    <span class="relative pi pi-sun text-2xl text-yellow-500" style="color: yellow">
                                        <span class="absolute -top-4 text-red-500 font-bold text-[20px]">2</span>
                                    </span>
                                </div>
                                <!-- Navigations -->
                                <ul class="flex flex-col p-2 space-y-2 justify-center">
                                    <router-link @click="toggleMenu" to="/" aria-label="Home navigation link">
                                        <li class="flex justify-center"><span
                                                class="hover:underline cursor-pointer underline-offset-8">UV
                                                Tracker</span></li>
                                    </router-link>
                                    <router-link @click="toggleMenu" to="/" aria-label="Home navigation link">
                                        <li class="flex justify-center"><span
                                                class="hover:underline cursor-pointer underline-offset-8">UV
                                                Tutor</span></li>
                                    </router-link>
                                    <router-link @click="toggleMenu" to="/" aria-label="Home navigation link">
                                        <li class="flex justify-center"><span
                                                class="hover:underline cursor-pointer underline-offset-8">Tailored
                                                Advice</span></li>
                                    </router-link>
                                    <router-link @click="toggleMenu" to="/" aria-label="Home navigation link">
                                        <li class="flex justify-center"><span
                                                class="hover:underline cursor-pointer underline-offset-8">Sun
                                                Shop</span></li>
                                    </router-link>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>