<template>
  <Pyramid @select-phase="goToPhase" />
</template>

<script setup>
import { useRouter } from 'vue-router';
import Pyramid from '../components/Pyramid.vue';

const router = useRouter();
function goToPhase(id) {
  router.push(`/phase/${id}`);
}
</script>
