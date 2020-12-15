<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total:{{ totalCardList }}</p>
      <div class="deletelist" @click="removeList">x</div>
    </div>
    <draggable group="cards" 
              :list="cards"
              @end="$emit('change')">
    <Card v-for="(item, index) in cards"
          :body="item.body"
          :key="item.id"
          :cardIndex="index"
          :listIndex="listIndex"
      />
    <CardAdd :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CardAdd from './CardAdd'
import Card from './Card'

  export default {
    components: {
      draggable,
      CardAdd,
      Card
    },

    props: {
      title: {
        type: String,
        required: true
      },
      cards: {
        type: Array,
        required: true
      },
      listIndex: {
        type: Number,
        required: true
      }
    },
    computed: {
      totalCardList() {
        return this.cards.length
      }
    },
    methods: {
      removeList: function() {
        if(confirm('本当にこのリストを削除しますか？')) {
          this.$store.dispatch('removeList', { listIndex: this.listIndex})
        }
      },
    }
  }
</script>
