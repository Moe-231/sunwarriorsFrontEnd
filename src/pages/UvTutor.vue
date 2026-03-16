<script setup>
import { onMounted, ref } from 'vue';
const API_KEY = import.meta.env.VITE_LOCATION_IQ_API_KEY;
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { Bar } from 'vue-chartjs';
import HeatMap from '@/components/heatMap.vue';
import axios from 'axios';
import Spinner from '@/components/spinner.vue';

const user_Location = ref(null)
const cancerReport = ref(null)
const colorCode = ref('red')
const totalcases = ref(0)
const curedcases = ref(0)
const cancercases = ref(0)

const chartData = ref({
    labels: ['Melanoma of Skin', 'Non Melanoma'],
    datasets: [
        {
            label: 'Cancer Impact Report (Age Group 15-19, 2026)',
            data: [0, 0],
            backgroundColor: ['#3b82f6', '#22c55e'],
            borderRadius: 3
        }
    ]
})

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'bottom', labels: { color: 'black', pointStyle: 'triangle', usePointStyle: true } },
        tooltip: { enabled: true }
    },
    scales: {
        x: {
            ticks: { color: 'black' }
        },
        y: { beginAtZero: true, ticks: { stepSize: 1, color: 'black' } }
    }
}

const fetchCancerReport = async () => {
    try {
        const response = await axios.get('https://sunwarriorsbackend-production.up.railway.app/postgress/cancerreport')
        if (response.status == 200) {
            console.log(response.data)
            cancerReport.value = response.data
            chartData.value = {
                ...chartData.value,
                datasets: [
                    {
                        ...chartData.value.datasets[0],
                        data: [parseInt(response.data[0].total_cases), parseInt(response.data[1].total_cases)]
                    }
                ]
            }
        }
    } catch (error) {
        console.log("Error fetching statistics ", error)
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
    await fetchLocation()
    await fetchCancerReport()
})
</script>

<template>
    <div>
        <div class="mt-2">
            <div class="flex justify-center text-5xl">
                <h3 class="font-bold underline underline-offset-8 my-5">UV Tutor</h3>
            </div>
            <!-- Live UV Impacts -->
            <div class="flex items-center space-x-2 border-b-2 w-fit cursor-default">
                <div>
                    <img src="/src/assets/warning.png" alt="Bulb Icon" class="w-12">
                </div>
                <div class="text-2xl">
                    <span>Live UV Impacts</span>
                </div>
                <div>
                </div>
            </div>
            <!-- Insights Data -->
            <div class="flex flex-col space-y-8 p-5">
                <!-- Location -->
                <div class="">
                    <div class="flex space-x-2 text-xl underline underline-offset-8">
                        <span><i class="pi pi-map-marker"></i></span>
                        <span class="font-bold"> Location</span>
                    </div>
                    <div>
                        <div class="ml-3 mt-5 text-xl" v-if="user_Location">{{ user_Location }}</div>
                        <Spinner style="margin-left: 25px; margin-top: 10px;" v-else />
                    </div>

                </div>
                <div>
                    <!-- Graph -->
                    <div class="flex flex-col space-y-5">
                        <div class="flex space-x-2">
                            <span><i class="pi pi-chart-bar"></i></span>
                            <span class="font-bold border-b-2"> Live Impact Graph</span>
                        </div>
                        <!-- Actual Graph Implementation -->
                        <!-- Bar Graph-->
                        <div class="w-auto lg:w-150 h-auto">
                            <Bar :data="chartData" :options="chartOptions" />
                        </div>
                        <!-- Heat Map-->
                        <div class="flex space-x-2">
                            <span><i class="pi pi-chart-bar"></i></span>
                            <span class="font-bold border-b-2"> Live HeatMap</span>
                        </div>
                        <HeatMap />

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>