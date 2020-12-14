<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
           type="text"
           class="text-input"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
        />
    <button type="submit"
            class="add-button"
            v-if="isEdithing || bodyExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },

  data: function() {
    return {
      body: '',
      isEdithing: false,
    }
  },
  computed: {
    classlist: function() {
      const classlist = ['addcard']
      if(this.isEdithing) {
        classlist.push('active')
      }
      if(this.bodyExists) {
        classlist.push('addable')
      }
      return classlist
    },
    bodyExists() {
      return this.body.length > 0
    }
  },

  methods: {
    startEdithing: function() {
      this.isEdithing = true
    },
    finishEdithing: function() {
      this.isEdithing = false
    },
    addCardToList: function() {
      this.$store.dispatch('addCardToList', {body: this.body, listIndex: this.listIndex})
    }
  },
}
</script>