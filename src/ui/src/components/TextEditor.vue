<template>
  <div v-if="editor">
    <button
      @click="
        editor
          .chain()
          .focus()
          .toggleBold()
          .run()
      "
      :class="{ 'is-active': editor.isActive('bold') }"
    >
      bold
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      v-on:click="copyToClipboard"
    >
      copiar 📋
    </button>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import apiClient from '../services/apiClient';

export default {
  components: {
    EditorContent,
  },

  props: ['initialContent'],

  data() {
    return {
      editor: null,
      content: this.initialContent,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: this.content,
      extensions: [StarterKit],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },

  methods: {
    async copyToClipboard() {
      try {
        const json = this.editor.getJSON();
        const result = await apiClient.parseTiptapDocAsync(json);

        await navigator.clipboard.writeText(result);
      } catch ($e) {
        alert('No se pudo copiar');
        console.error($e);
      }
    },
  },
};
</script>

<style scoped></style>
