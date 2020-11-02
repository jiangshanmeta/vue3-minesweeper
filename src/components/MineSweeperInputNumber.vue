<template>
    <div class="input-group">
        <div
            class="input-group-addon"
            @click="doMinus"
        >
            -
        </div>
        <input
            ref="inputRef"
            v-model="model"
            class="form-control"
        >
        <div
            class="input-group-addon"
            @click="doPlus"
        >
            +
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    computed,
    watch,
    toRefs,
    ref,
} from 'vue';

export default defineComponent({
    name: 'MineSweeperInputNumber',
    props: {
        modelValue: {
            type: Number as PropType<number>,
            required: true,
        },
        min: {
            type: Number as PropType<number>,
            default: -Infinity,
        },
        max: {
            type: Number as PropType<number>,
            default: Infinity,
        },
        step: {
            type: Number as PropType<number>,
            default: 1,
        },
    },
    emits: {
        'update:modelValue': null,
    },
    setup (props, {
        emit,
    }) {
        const {
            modelValue,
            min,
            max,
            step,
        } = toRefs(props);
        const inputRef = ref<HTMLFormElement|null>(null);
        const model = computed<number>({
            get () {
                return modelValue.value;
            },
            set (val) {
                const numberVal = Number(val);
                if (Number.isNaN(numberVal) || !Number.isInteger(numberVal) || numberVal > max.value || numberVal < min.value) {
                    if(inputRef.value !== null){
                        inputRef.value.value = modelValue.value;
                    }
                    return;
                }

                emit('update:modelValue', numberVal);
            },
        });

        function doMinus () {
            model.value -= step.value;
        }

        function doPlus () {
            model.value += step.value;
        }

        function handleMinMaxChange () {
            if (model.value > max.value) {
                model.value = max.value;
            }
            if (model.value < min.value) {
                model.value = min.value;
            }
        }
        // TODO flush 不太理解
        watch([
            min,
            max,
        ], handleMinMaxChange, {
            flush: 'post',
        });

        return {
            model,
            doMinus,
            doPlus,
            inputRef,
        };
    },
});
</script>

<style scoped>
.input-group {
    margin-left: 80px;
    display: flex;
}
.input-group-addon {
    padding: 6px 12px;
    background-color: #eee;
    color: #555;
    font-size: 14px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}
.input-group-addon:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.input-group-addon:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.form-control {
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    outline: none;
}
</style>
