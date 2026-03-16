<script setup>
import Spinner from '@/components/spinner.vue'
import { store } from '@/store'
import axios from 'axios'
import { onMounted, ref } from 'vue'
const risk_level_name = ref(null)
const rec_item = ref(null)
const rec_desciption = ref(null)


const fetchRiskLevelData = async () => {
    if (store.liveUVIndexTracker == null) {
        return
    }
    try {
        const response = await axios.get(`https://sunwarriorsbackend-production.up.railway.app/postgress/uvrecomendation?index=${store.liveUVIndexTracker ? store.liveUVIndexTracker : 0}`)
        if (response.status == 200) {
            console.log("GOT the response ===================================")
            console.log(response)
            risk_level_name.value = response.data.level_name
            rec_item.value = response.data.item_name
            rec_desciption.value = response.data.item_description
        }
    } catch (error) {
        console.log("Error fetching Risk Level statistics ", error)
    }
}

onMounted(async () => {
    await fetchRiskLevelData()
})
</script>

<template>
    <div>
        <div class="mt-2">
            <div class="flex justify-center text-5xl space-x-4">
                <div><img src="/src/assets/shop.png" class="w-25 h-25 " /></div>
                <h3 class="font-bold underline underline-offset-8 my-5">Welcome to SunShop</h3>
            </div>
        </div>
        <!-- Live UV Insights -->
        <div class="flex items-center space-x-2 border-b-2 w-fit cursor-default">
            <div>
                <img src="/src/assets/clothes.png" alt="Bulb Icon" class="w-12">
            </div>
            <div class="text-3xl">
                <span>Clothes Recomendations</span>
            </div>
        </div>
        <div class="flex flex-col space-y-4 mt-4">
            <div class="flex items-center space-x-2">
                <span><img src="/src/assets/warning.png" class="w-12" /></span><span class="text-2xl">Currently Assessed
                    Risk
                    Level</span>
            </div>
            <div class="text-xl">
                <span v-if="risk_level_name" class="ml-4.25">
                    {{ risk_level_name }}
                </span>
                <Spinner v-else style="margin-left: 10px;" />
            </div>
            <div class="flex flex-col space-y-4 mt-4">
                <div class="flex items-center space-x-2">
                    <span><img src="/src/assets/suggestions.png" class="w-10 ml-1" /></span><span
                        class="text-2xl">Suggestions</span>
                </div>
                <div class="text-xl">
                    <!-- Tabular View -->
                    <div>
                        <!-- First Row -->
                        <div class="flex flex-col lg:flex-row border">
                            <div class="flex flex-col items-center w-full lg:w-[50%]">
                                <div
                                    class="flex w-full items-center justify-center space-x-2 font-bold border-b border-r p-3">
                                    <div>
                                        Item
                                    </div>
                                    <div>
                                        <img src="/src/assets/item.png" class="w-15">
                                    </div>
                                </div>
                                <div class=" w-full h-22.5 flex justify-center items-center border-r border-b p-3">
                                    <span v-if="rec_item">{{ rec_item }}</span>
                                    <Spinner v-else />
                                </div>
                            </div>
                            <div class="flex flex-col items-center w-full lg:w-[50%]">
                                <div
                                    class="flex w-full items-center justify-center space-x-2 font-bold border-b border-r p-3">
                                    <div>
                                        Description
                                    </div>
                                    <div>
                                        <img src="/src/assets/desc.png" class="w-15">
                                    </div>
                                </div>
                                <div class=" w-full h-22.5 flex justify-center items-center border-r border-b p-3">
                                    <span v-if="rec_desciption">{{ rec_desciption }}</span>
                                    <Spinner v-else />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>