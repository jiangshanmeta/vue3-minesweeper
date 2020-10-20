<template>
    <div>
        {{mineCount}}

        <button @click="$emit('show-select-difficulty')">meow</button>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    watch,
    toRefs,
} from 'vue';

export default defineComponent({
    name: 'MineSweeper',
    emits: {
        'show-select-difficulty': null,
    },
    props: {
        play: {
            type: Boolean as PropType<boolean>,
            required: true,
        },
        width: {
            type: Number as PropType<number>,
            required: true,
        },
        height: {
            type: Number as PropType<number>,
            required: true,
        },
        mineCount: {
            type: Number as PropType<number>,
            required: true,
        },
    },
    setup (props) {
        const {
            play,
            width,
            height,
            mineCount,
        } = toRefs(props);
        watch(() => play.value, (play) => {
            console.log(play);
            if (!play) {
                return;
            }
            console.log('here', width.value, height.value, mineCount.value);
        });
    },
});
</script>

<style lang="less" scoped>

</style>
