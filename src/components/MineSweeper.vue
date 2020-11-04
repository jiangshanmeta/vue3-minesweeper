<template>
    <div class="game-container">
        <div
            class="mine-sweeper-container"
            @contextmenu.prevent
        >
            <div
                v-for="i in height"
                :key="i"
                class="mine-sweeper-row"
            >
                <div
                    v-for="j in width"
                    :key="j"
                    class="mine-sweeper-item"
                    :class="{'is-open':openStatus[(i - 1) * width + j - 1]}"
                    @click.left="handleLeftClick(i-1,j-1)"
                    @click.right="handleRightClick(i-1,j-1)"
                >
                    <span
                        v-if="markStatus[(i-1)*width+(j-1)] === 1"
                        class="iconfont"
                    >&#xe778;</span>
                    <span
                        v-else-if="markStatus[(i-1)*width+(j-1)] === 2"
                        class="iconfont"
                    >&#xe720;</span>
                    <template v-else-if="openStatus[(i-1)*width+(j-1)]">
                        <span
                            v-if="mines[(i-1)*width+(j-1)]"
                            class="iconfont"
                        >&#xe63a;</span>
                        <span v-else-if="neighbourMineCount[(i-1)*width+(j-1)]>0">
                            {{ neighbourMineCount[(i-1)*width+(j-1)] }}
                        </span>
                    </template>
                </div>
            </div>

        </div>
        <div class="panel-container">
            <div class="panel-data-container">
                <span
                    class="iconfont"
                    style="font-size: 60px;"
                >&#xe778;</span>
                <div>
                    {{ selectedMineCount }} / {{ mineCount }}
                </div>
            </div>
            <div>
                <button
                    class="mine-sweeper-button"
                    @click="reStart"
                >
                    重开一局
                </button>

                <button
                    class="mine-sweeper-button"
                    style="margin-top: 15px;"
                    @click="$emit('show-select-difficulty')"
                >
                    改变难度
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    watch,
    toRefs,
    ref,
    computed,
    nextTick,
} from 'vue';

function shuffle<T> (mines: T[], start = 0) {
    for (let i = start; i < mines.length; i++) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const tmp = mines[randomIndex];
        mines[randomIndex] = mines[i];
        mines[i] = tmp;
    }
}

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

        const isEnd = ref(false);
        const mines = ref<number[]>([]);
        const openStatus = ref<number[]>([]);
        const markStatus = ref<number[]>([]);
        const selectedMineCount = ref(0);

        function init (width: number, height: number, mineCount: number) {
            isEnd.value = false;
            const total = width * height;
            const minesValue: number[] = new Array(total).fill(0);
            for (let i = 0; i < mineCount; i++) {
                minesValue[i] = 1;
            }
            shuffle(minesValue, mineCount);
            mines.value = minesValue;
            openStatus.value = new Array(total).fill(0);
            markStatus.value = new Array(total).fill(0);
            selectedMineCount.value = 0;
        }

        function reStart () {
            init(width.value, height.value, mineCount.value);
        }

        const neighbourMineCount = computed(() => {
            const result: number[] = new Array(width.value * height.value).fill(0);
            for (let i = 0; i < result.length; i++) {
                if (!mines.value[i]) {
                    continue;
                }
                const y = i % width.value;
                const x = (i - y) / width.value;
                for (let j = -1; j < 2; j++) {
                    const newX = x + j;
                    if (newX < 0 || newX === height.value) {
                        continue;
                    }
                    for (let k = -1; k < 2; k++) {
                        const newY = y + k;
                        if (newY < 0 || newY === width.value) {
                            continue;
                        }
                        result[newX * width.value + newY]++;
                    }
                }
            }
            return result;
        });

        function floodfill (x: number, y: number) {
            if (x < 0 || y < 0 || x === height.value || y === width.value) {
                return;
            }
            const index = x * width.value + y;
            if (openStatus.value[index] === 1) {
                return;
            }
            openStatus.value.splice(index, 1, 1);
            if (neighbourMineCount.value[index] > 0) {
                return;
            }
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    floodfill(x + i, y + j);
                }
            }
        }

        function handleLeftClick (x: number, y: number) {
            if (isEnd.value) {
                return;
            }
            const index = x * width.value + y;
            if (openStatus.value[index] === 1 || markStatus.value[index] === 1) {
                return;
            }
            if (mines.value[index]) {
                openStatus.value.splice(index, 1, 1);
                isEnd.value = true;
                nextTick(() => {
                    alert('mine');
                });
                return;
            }
            if (neighbourMineCount.value[index] > 0) {
                openStatus.value.splice(index, 1, 1);
                return;
            }
            floodfill(x, y);
        }

        function handleRightClick (x: number, y: number) {
            if (isEnd.value) {
                return;
            }
            const index = x * width.value + y;
            if (openStatus.value[index] === 1) {
                return;
            }
            markStatus.value.splice(index, 1, (markStatus.value[index] + 1) % 3);
            if (markStatus.value[index] === 1) {
                selectedMineCount.value++;
            } else if (markStatus.value[index] === 2) {
                selectedMineCount.value--;
            }
        }

        watch(() => play.value, (play) => {
            if (!play) {
                return;
            }

            init(width.value, height.value, mineCount.value);
        });

        watch(() => selectedMineCount.value, (selectedMineCount) => {
            if (selectedMineCount !== mineCount.value) {
                return;
            }

            const match = mines.value.every((isMine, index) => {
                if ((isMine && markStatus.value[index] === 1) || (!isMine && markStatus.value[index] !== 1)) {
                    return true;
                }
                return false;
            });

            if (match) {
                nextTick(() => {
                    alert('win');
                });
                isEnd.value = true;
            }
        });

        return {
            isEnd,
            mines,
            openStatus,
            markStatus,
            selectedMineCount,

            neighbourMineCount,

            reStart,
            handleLeftClick,
            handleRightClick,
        };
    },
});
</script>

<style lang="less" scoped>
.game-container {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
}
.mine-sweeper-container {
    overflow: hidden;
    width: fit-content;
    margin: 0 auto;
    background-color: #f2f1f0;
}
.mine-sweeper-row {
    display: flex;
}
.mine-sweeper-item {
    width: 50px;
    height: 50px;
    margin: 2px;
    line-height: 50px;
    font-size: 34px;
    text-align: center;
    background-color: #babdb6;
    cursor: pointer;
}
.mine-sweeper-item.is-open {
    background-color: #dededc;
}
.panel-container {
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.panel-data-container {
    padding-top: 15px;
    text-align: center;
}

</style>
