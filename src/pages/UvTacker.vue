<script setup>
const API_KEY = import.meta.env.VITE_LOCATION_IQ_API_KEY;
import Spinner from '@/components/spinner.vue';
import { store } from '@/store';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const colour_code = ref(null)
const alert_message = ref(null)
const level_name = ref(null)
const user_Location = ref(null)

const fetchRiskLevelData = async () => {
    if (store.liveUVIndexTracker == null) {
        return
    }
    try {
        const response = await axios.get(`https://sunwarriorsbackend-production.up.railway.app/postgress/risklevel?index=${store.liveUVIndexTracker ? store.liveUVIndexTracker : 0}`)
        if (response.status == 200) {
            colour_code.value = response.data.colour_code.toLowerCase()
            level_name.value = response.data.level_name
            alert_message.value = response.data.alert_message
        }
    } catch (error) {
        console.log("Error fetching Risk Level statistics ", error)
    }
}


const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

const fetchLocation = async () => {
    try {
        const position = await getLocation()
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${lat}&lon=${lon}&format=json&`)
        if (response.status == 200) {
            user_Location.value = response.data.display_name
        }
    } catch (error) {
        console.log("Error fetching location ", error)

    }
}

onMounted(async () => {
    await fetchRiskLevelData()
    await fetchLocation()
})
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
                <div class="text-3xl">
                    <span>Live UV Insights</span>
                </div>
            </div>
            <!-- Insights Data -->
            <div class="flex flex-col space-y-8 p-5">
                <!-- Location -->
                <div class="">
                    <div class="flex space-x-2 text-2xl">
                        <span><i class="pi pi-map-marker"></i></span>
                        <span class="font-bold text">Location</span>
                    </div>
                    <div>
                        <p v-if="user_Location" class=" text-xl mt-2"> {{ user_Location }}</p>
                        <Spinner v-else style="margin-left: 30px; margin-top: 10px;" />
                    </div>

                </div>
                <!-- Live UV Index -->
                <div class="">
                    <div class="flex space-x-2 text-2xl">
                        <span><i class="pi pi-sliders-h"></i></span>
                        <span class="font-bold"> Live UV Index</span>
                    </div>
                    <!-- Live Index -->
                    <div class="flex items-center space-x-2">
                        <!-- Index Display-->
                        <div class="font-bold text-xl mt-2">
                            {{ store.liveUVIndexTracker }}
                        </div>
                        <div>
                            <span> = </span>
                        </div>
                        <!-- Color Coding View-->
                        <div class="">
                            <div v-if="colour_code" class="flex items-center space-x-2 text-xl">
                                <div :style="{ backgroundColor: colour_code }" class="w-5 h-5 rounded-full"></div>
                                <p>{{ level_name }}</p>
                            </div>
                            <div v-else>
                                <Spinner />
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Alert Information -->
                <div>
                    <div class="flex space-x-2 text-2xl">
                        <span><i class="pi pi-info-circle"></i></span>
                        <span class="font-bold"> Alert Information</span>
                    </div>
                    <div class="flex space-x-2 text-xl">
                        <div>
                            <span>
                                Disclaimer
                            </span>
                        </div>
                        <div>
                            <span>
                                =
                            </span>
                        </div>
                        <div v-if="alert_message">
                            <span>
                                {{ alert_message }}
                            </span>
                        </div>
                        <Spinner v-else />
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped></style>