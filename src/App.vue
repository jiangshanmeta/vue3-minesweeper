<template>
    <div class="app">
        <div
            class="app-main"
            :class="{'show-game':isShowGame}"
        >
            <SelectDifficulty
                class="app-section"
                @show-game="showGame"
            />
            <MineSweeper
                class="app-section"
                :play="isShowGame"
                :width="width"
                :height="height"
                :mine-count="mineCount"
                @show-select-difficulty="showSelectDifficulty"
            />
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
} from 'vue';

import SelectDifficulty from './components/SelectDifficulty.vue';
import MineSweeper from './components/MineSweeper.vue';

export default defineComponent({
    name: 'App',
    setup () {
        const isShowGame = ref(false);
        const width = ref(0);
        const height = ref(0);
        const mineCount = ref(0);

        function showGame (w: number, h: number, c: number) {
            isShowGame.value = true;
            width.value = w;
            height.value = h;
            mineCount.value = c;
        }

        function showSelectDifficulty () {
            isShowGame.value = false;
        }

        return {
            isShowGame,
            width,
            height,
            mineCount,
            showGame,
            showSelectDifficulty,
        };
    },
    components: {
        SelectDifficulty,
        MineSweeper,
    },
});
</script>

<style lang="less" scoped>
.app {
    display: flex;
    min-height: 100vh;
    overflow: hidden;
}
.app-main {
    width: 100%;
    display: flex;
    align-items: center;
    transition: transform 1s ease;
    &.show-game{
        transform: translateX(-100%);
    }
}

.app-section {
    width: 100%;
    flex: 0 0 auto;
}
</style>
