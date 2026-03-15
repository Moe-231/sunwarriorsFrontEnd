<script setup>
</script>

<template>
    <div>
        <div class="h-[70vh] bg-black">
            <div class="h-full">
                <div class="flex flex-col justify-center items-center h-full space-y-4">
                    <!-- Top Description-->
                    <div class="flex flex-col text-white text-7xl">
                        <div class="relative">
                            <h2 class=" font-mono">Warriors</h2>
                            <img class="absolute -top-6 rotate-69 left-[50%] w-12.5" src="/src/assets/daggerIcon.png">
                        </div>
                        <div>
                            <h2 class="font-mono -my-2">
                                Sun
                            </h2>
                        </div>
                    </div>
                    <!-- Middle Desc -->
                    <div>
                        <p class="text-white text-2xl underline underline-offset-8">
                            Fight the battle against the sun
                        </p>
                    </div>
                    <!-- Button -->
                    <div class="my-6">
                        <router-link to="">
                            <span
                                class="bg-white text-black font-bold p-4 rounded-2xl hover:underline underline-offset-8">Track
                                UV</span>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>