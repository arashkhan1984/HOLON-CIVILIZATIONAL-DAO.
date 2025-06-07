<template>
  <div>
    <h2 class="text-3xl font-bold mb-4">Phase {{ phaseId }}</h2>
    <BookList :books="books" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BookList from '../components/BookList.vue';

const route = useRoute();
const phaseId = computed(() => route.params.id);

const booksByPhase = {
  1: [
    { title: 'The Social Construction of Reality', author: 'Peter L. Berger & Thomas Luckmann' },
    { title: 'Emergence', author: 'Steven Johnson' },
  ],
  2: [
    { title: 'Thinking in Systems', author: 'Donella H. Meadows' },
  ],
  3: [],
  4: [],
  5: [],
  6: [],
};

const books = computed(() => booksByPhase[phaseId.value] || []);
</script>
