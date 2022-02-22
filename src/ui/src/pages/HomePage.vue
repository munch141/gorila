<template>
  <section class="container p-6">
    <FileLoader @file-loaded="copyFileTemplate"></FileLoader>
    <TextEditor v-if="templateText" :initial-content="templateText"></TextEditor>
  </section>
</template>

<script>
import FileLoader from '../components/FileLoader.vue';
import TextEditor from '../components/TextEditor.vue';

export default {
  components: { FileLoader, TextEditor },
  data() {
    return {
      templateText: '',
    };
  },
  methods: {
    copyFileTemplate(text) {
      this.templateText = text;
    },
  },
};
</script>
