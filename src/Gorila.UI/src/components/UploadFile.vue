<template>
  <div class="container">
    <div>
      <hr />
      <label
        >File
        <input type="file" @change="handleFileUpload($event)" />
      </label>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-on:click="copyToClipboard">copiar 📋</button>
    </div>
    <div>
      <p><pre v-if="categories">{{ templateText }}</pre></p>
    </div>
  </div>
</template>

<script>
import treintaReportParser from '../services/treintaReportParser';

export default {
  data() {
    return {
      categories: {},
      templateText: '',
    };
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.templateText);
        alert('Copiado!');
      } catch ($e) {
        alert('Cannot copy');
        console.log($e);
      }
    },
    async handleFileUpload(event) {
      this.categories = {};
      this.templatetext = '';
      const file = event.target.files[0];

      this.categories = await treintaReportParser.getCategoriesFromFile(file);
      this.templateText = treintaReportParser.getTemplateFromCategories(this.categories);
    },
  },
};
</script>
