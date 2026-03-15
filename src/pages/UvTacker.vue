<script setup>
import { ref } from 'vue';

const colorCode = ref('red')
</script>

<template>
    <div>
        <div class="mt-2">
            <div class="flex justify-center text-5xl">
                <h3 class="font-bold underline underline-offset-8 my-5">UV Tracker</h3>
            </div>
            <!-- Live UV Insights -->
            <div class="flex items-center space-x-2 border-b-2 w-fit cursor-default">
                <div>
                    <img src="/src/assets/bulb.png" alt="Bulb Icon" class="w-12">
                </div>
                <div>
                    <span>Live UV Insights</span>
                </div>
            </div>
            <!-- Insights Data -->
            <div class="flex flex-col space-y-8 p-5">
                <!-- Location -->
                <div class="">
                    <div class="flex space-x-2">
                        <span><i class="pi pi-map-marker"></i></span>
                        <span class="font-bold"> Location</span>
                    </div>
                    <div>
                        <p class="mx-6"> Some Locaiton , 3171</p>
                    </div>

                </div>
                <!-- Live UV Index -->
                <div class="">
                    <div class="flex space-x-2">
                        <span><i class="pi pi-sliders-h"></i></span>
                        <span class="font-bold"> Live UV Index</span>
                    </div>
                    <!-- Live Index -->
                    <div class="flex items-center space-x-2">
                        <!-- Index Display-->
                        <div>
                            6
                        </div>
                        <div>
                            <span> = </span>
                        </div>
                        <!-- Color Coding View-->
                        <div class="">
                            <div v-if="colorCode == 'red'" class="flex items-center space-x-2">
                                <div class="w-5 h-5 rounded-full bg-red-500"></div>
                                <p>Very High</p>
                            </div>
                            <div v-if="colorCode == 'yellow'" class="flex items-center space-x-2">
                                <div class="w-5 h-5 rounded-full bg-yellow-500"></div>
                                <p>Moderate</p>
                            </div>
                            <div v-if="colorCode == 'green'" class="flex items-center space-x-2">
                                <div class="w-5 h-5 rounded-full bg-green-500"></div>
                                <p>Safe</p>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Alert Information -->
                <div>
                    <div class="flex space-x-2">
                        <span><i class="pi pi-info-circle"></i></span>
                        <span class="font-bold"> Alert Information</span>
                    </div>
                    <div>
                        <p> Some Alert information goes here</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped></style>