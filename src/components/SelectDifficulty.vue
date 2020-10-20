<template>
    <div>
        <button @click="$emit('show-game',10,10,Math.random()*100 >>> 0)">1111</button>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
} from 'vue';

export default defineComponent({
    name: 'SelectDifficulty',
    emits: {
        'show-game': null,
    },
});
</script>

<style lang="less" scoped>

</style>
