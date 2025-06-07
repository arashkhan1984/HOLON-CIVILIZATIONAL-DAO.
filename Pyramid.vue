<template>
  <div class="text-center">
    <h2 class="text-4xl font-bold mb-8">Select a Phase</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="phase in 6"
        :key="phase"
        class="border border-gold p-6 rounded-lg bg-dark hover:bg-gold hover:text-dark transition cursor-pointer"
        @click="selectPhase(phase)"
      >
        <h3 class="text-2xl font-semibold mb-2">Phase {{ phase }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['select-phase']);

function selectPhase(id) {
  emit('select-phase', id);
}
</script>
