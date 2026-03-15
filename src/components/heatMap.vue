<script setup>
import { HeatMapComponent as EjsHeatMap, Tooltip } from '@syncfusion/ej2-vue-heatmap'
import { provide } from 'vue';
const heatmap = [Tooltip]
provide('heatmap', heatmap)

const heatMapData = [
    [10, 43, 51, 43, 90, 123, 4],
    [90, 43, 51, 43, 12, 123, 4],
    [1, 43, 51, 43, 12, 123, 4],
    [1, 43, 51, 50, 12, 123, 4],
    [1, 43, 51, 43, 12, 123, 4],
    [1, 43, 51, 43, 12, 123, 4],
    [1, 43, 51, 43, 12, 123, 4],
    [1, 43, 51, 43, 12, 123, 4]

]

const xAxis = {
    labels: ['Clayton', 'Springvale', 'Morrabin', 'KnoxFiled', 'Croydon', 'Capital', 'Suburb', 'XYZ']
}

const yAxis = {
    labels: ['Quantity 1', 'Quantity 2', 'Quantity 3', 'Quantity 4', 'Quantity 5', 'Quantity 6', 'Quantity 7', 'Quantity 8']
}

const titleSettings = {
    text: 'UV Impacted Cases By Suburubs, Melbourne'
}

const cellSettings = {
    tileType: 'Bubble',
    bubbleType: 'Sector'
}
</script>

<template>
    <EjsHeatMap :data-source="heatMapData" :title-settings="titleSettings" :x-axis="xAxis" :y-axis="yAxis"
        height="350px" width="auto" :cell-settings="cellSettings" />
</template>

<style></style>