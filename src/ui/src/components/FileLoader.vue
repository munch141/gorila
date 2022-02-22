<template>
  <div class="container">
    <div>
      <hr />
      <label
        >File
        <input type="file" @change="handleFileLoad($event)" />
      </label>
    </div>
    <div></div>
  </div>
</template>

<script>
import treintaReportParser from '../services/treintaReportParser';

export default {
  methods: {
    async handleFileLoad(event) {
      const file = event.target.files[0];
      const categories = await treintaReportParser.getCategoriesFromFile(file);
      const templateText = treintaReportParser.getTemplateFromCategories(categories);

      this.$emit('fileLoaded', templateText);
    },
  },
};
</script>
