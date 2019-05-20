<template>
  <div>
    <ul v-if="messages.length > 0">
      <message-item v-for="msg in messages" v-bind:message="msg" v-bind:key="msg.text"></message-item>
    </ul>
  </div>
</template>

<script>
import MessageItem from "@/components/MessageItem";
require("vue2-animate/dist/vue2-animate.min.css");

export default {
  name: "MessageContainer",
  props: {
    messages: Array
  },
  components: {
    "message-item": MessageItem
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>