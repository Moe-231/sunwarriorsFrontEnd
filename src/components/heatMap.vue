<script setup>
import { HeatMapComponent as EjsHeatMap, Tooltip } from '@syncfusion/ej2-vue-heatmap'
import axios from 'axios';
import { onMounted, provide, ref } from 'vue';
const heatmap = [Tooltip]
provide('heatmap', heatmap)

const formattedData = ref(null)

const heatMapData = ref([])

// const xAxis = {
//     labels: ['Clayton', 'Springvale', 'Morrabin', 'KnoxFiled', 'Croydon', 'Capital', 'Suburb', 'XYZ']
// }

const xAxis = ref({})
const yAxis = ref({})

const titleSettings = {
    text: 'AVG UV over 24 hours - Melbourne (Highly Impacted Suburbs)'
}

const cellSettings = {
    tileType: 'Rect',
}


const formatData = (dbData) => {
    // Unique Labels for Axes
    const suburbs = [...new Set(dbData.map(item => item.suburb))].sort();
    const hours = [... new Set(dbData.map(item => item.hour_of_day))].sort()

    // Rows = hours, Columns - suburbs
    const heatMapData = hours.map(hour => {
        return suburbs.map(suburb => {
            const record = dbData.find(d => d.suburb === suburb && d.hour_of_day === hour)
            return record ? parseFloat(record.avg_uv) : 0
        })
    })

    return { heatMapData, xAxis: { labels: hours }, yAxis: { labels: suburbs } }
}

const fetchHeatMapData = async () => {
    try {
        const response = axios.get('https://sunwarriorsbackend-production.up.railway.app/postgress/uvhistorical')
        // const response = await axios.get('http://localhost:8080/postgress/uvhistorical')
        console.log("UV Historical response is ", response)
        if (response.status == 200) {
            formattedData.value = formatData(response.data)
            heatMapData.value = formattedData.value.heatMapData
            xAxis.value = formattedData.value.xAxis
            console.log("x Axis values are", xAxis.value)
            yAxis.value = formattedData.value.yAxis
            console.log("y Axis values are", yAxis.value)

        }
    } catch (error) {
        console.log("Error fetching heatMap data", error)
    }
}

onMounted(async () => {
    await fetchHeatMapData()
})
</script>

<template>
    <EjsHeatMap :data-source="heatMapData" :title-settings="titleSettings" :x-axis="xAxis" :y-axis="yAxis" height="auto"
        width="auto" :cell-settings="cellSettings" />
</template>

<style></style>