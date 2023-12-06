import {defineStore} from "pinia";

const useControlMenuStore = defineStore('controlMenu', () => {
    const leftControlMenuDefaultOption = ref('latest');
    const rightControlMenuDefaultOption = ref('all');

    const setLeftControlMenuDefaultOption = (value: string) => {
        leftControlMenuDefaultOption.value = value
    }

    const setRightControlMenuDefaultOption = (value: string) => {
        rightControlMenuDefaultOption.value = value
    }

    return {
        leftControlMenuDefaultOption,
        rightControlMenuDefaultOption,
        setLeftControlMenuDefaultOption,
        setRightControlMenuDefaultOption
    };
})

export default useControlMenuStore