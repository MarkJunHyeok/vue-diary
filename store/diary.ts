import {defineStore, storeToRefs} from "pinia";
import type {IDiary} from "~/models/diary.model";
import {DiaryType} from "~/enum/diaryType";
import useDateStore from "~/store/date";
import useControlMenuStore from "~/store/controlMenu";
import type {ID} from "@vue/devtools-api";

const useDiaryStore = defineStore('diary', () => {
    const diaries = ref<IDiary[]>([])

    const initDiary = () => {
        if(diaries.value.length == 0){
            diaries.value = [{
                id: 1,
                text: '영한님',
                date: new Date(2023, 11, 10),
                type: DiaryType.GOOD
            }, {
                id: 2,
                text: '준혁님',
                date: new Date(2023, 5, 20),
                type: DiaryType.SO_SO
            }, {
                id: 3,
                text: '명환님',
                date: new Date(2023, 5, 30),
                type: DiaryType.VERY_GOOD
            }, {
                id: 4,
                text: '경민님',
                date: new Date(2023, 11, 30),
                type: DiaryType.VERY_BAD
            }]
        }
    }

    const {date} = storeToRefs(useDateStore());
    const {leftControlMenuDefaultOption, rightControlMenuDefaultOption} = storeToRefs(useControlMenuStore());

    // 선택된 년도와 같은 년도의 일기만 필터링하는 computed 속성
    const filteredDiaries = computed(() => {
        const selectedYear = date.value.getFullYear(); // 현재 선택된 년도
        const selectedMonth = date.value.getMonth(); // 현재 선택된 년도
        let copyDiaries = diaries.value.filter(diary =>
            diary.date.getFullYear() === selectedYear
            && diary.date.getMonth() === selectedMonth
        );

        // 정렬 로직
        if (leftControlMenuDefaultOption.value === 'latest') {
            // 최신순 정렬
            copyDiaries.sort((a: IDiary, b: IDiary) => b.date.getTime() - a.date.getTime());
        } else {
            // 오래된 순 정렬
            copyDiaries.sort((a: IDiary, b: IDiary) => a.date.getTime() - b.date.getTime());
        }

        if (rightControlMenuDefaultOption.value === 'good') {
            copyDiaries = copyDiaries.filter(diary =>
                diary.type === DiaryType.SO_SO
                || diary.type === DiaryType.GOOD
                || diary.type === DiaryType.VERY_GOOD
            )
        } else if (rightControlMenuDefaultOption.value === 'bad') {
            copyDiaries = copyDiaries.filter(diary =>
                diary.type === DiaryType.BAD
                || diary.type === DiaryType.VERY_BAD
            )
        }

        return copyDiaries;
    });

    const getDetail = ((id: number) => diaries.value.find(it => it.id === id))

    const addDiary = (diary: IDiary) => {
        diaries.value.push(diary)
    }

    const editDiary = (diary: IDiary) => {
        const index = diaries.value.findIndex((item) => item.id === diary.id);

        diaries.value[index] = diary;
    }

    const deleteDiary = (id: number) => {
        diaries.value = diaries.value.filter((item) => item.id !== id);
    }

    const getNewDiaryId = computed(() => diaries.value[diaries.value.length - 1].id + 1 )

    return {diaries, initDiary, filteredDiaries, getDetail, addDiary, editDiary, deleteDiary, getNewDiaryId};
})

export default useDiaryStore