<template>
  <form :class="classlist" @submit.prevent="addlist">
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
           @focusin="startEditing"
           @focusout="finishEditing"
    >
    <button type="submit" 
            class="add-button"
            v-if="isEditing || titleExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function(){
    return {
      title: "",
      isEditing: false,
    }
  },
   computed: {
    classlist() {
      const classlist = ['addlist']
      if(this.isEditing) {
        classlist.push('active')
      }
      if(this.titleExists) {
        classlist.push('addable')
      }
      return classlist
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addlist(){
      this.$store.dispatch('addlist', this.title)
      this.title = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    },
  },
}
</script>