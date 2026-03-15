<script setup>
import { onMounted, ref } from 'vue';
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
const colorCode = ref('red')
const totalcases = ref(0)
const curedcases = ref(0)
const cancercases = ref(0)

const chartData = ref({
    labels: ['Total Cases', 'Cured Cases', 'Cancer Cases'],
    datasets: [
        {
            label: 'UV Impact Reports',
            data: [3, 2, 4],
            backgroundColor: ['#3b82f6', '#22c55e', 'red'],
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

// const fetchStatistic = async () => {
//     try {
//         const response = await axios.get('http://localhost:8080/postgress/cancerincidence')
//         if (response) {
//             console.log("Postgress response is", response)
//         }
//     } catch (error) {
//         console.log("Error fetching statistics ", error)
//     }

// }



// onMounted(async () => {
//     await fetchStatistic()

// })


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
                <div>
                    <span>Live UV Impacts</span>
                </div>
                <div>
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