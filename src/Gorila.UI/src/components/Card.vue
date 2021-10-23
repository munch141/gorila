<template>
  <div class="rounded shadow-lg w-card h-card flex flex-col relative group" :class="[bgColor]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'bg-white',
    },
  },
};
</script>
