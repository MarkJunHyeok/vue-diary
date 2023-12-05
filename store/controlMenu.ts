import {defineStore, storeToRefs} from "pinia";
import type {IDiary} from "~/models/diary.model";
import {DiaryType} from "~/enum/diaryType";
import useDateStore from "~/store/date";

const useControlMenuStore = defineStore('controlMenu', () => {
    const leftControlMenuDefaultOption = ref('latest');
    const rightControlMenuDefaultOption = ref('all');

    const setLeftControlMenuDefaultOption = (value: string) => {
        leftControlMenuDefaultOption.value = value
    }

    const setRightControlMenuDefaultOption = (value: string) => {
        rightControlMenuDefaultOption.value = value
    }

    return { leftControlMenuDefaultOption, rightControlMenuDefaultOption, setLeftControlMenuDefaultOption, setRightControlMenuDefaultOption };
})

export default useControlMenuStore