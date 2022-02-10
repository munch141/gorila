<template>
  <section class="container p-6">
    <UploadFile @file-uploaded="copyFileTemplate"></UploadFile>
    <WhatsAppEditor v-if="templateText" :initial-content="templateText"></WhatsAppEditor>
  </section>
</template>

<script>
import UploadFile from '../components/UploadFile.vue';
import WhatsAppEditor from '../components/WhatsAppEditor.vue';

export default {
  components: { UploadFile, WhatsAppEditor },
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
