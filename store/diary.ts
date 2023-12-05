import {defineStore, storeToRefs} from "pinia";
import type {IDiary} from "~/models/diary.model";
import {DiaryType} from "~/enum/diaryType";
import useDateStore from "~/store/date";
import useControlMenuStore from "~/store/controlMenu";

const useDiaryStore = defineStore('diary', () => {
    const diaries = ref<IDiary[]>([])

    const initDiary = () => {
        diaries.value = [{
            text: '영한님',
            date: new Date(2023, 11, 10),
            type: DiaryType.GOOD
        }, {
            text: '준혁님',
            date: new Date(2023, 5, 20),
            type: DiaryType.SO_SO
        }, {
            text: '명환님',
            date: new Date(2023, 5 , 30),
            type: DiaryType.VERY_GOOD
        }, {
            text: '경민님',
            date: new Date(2023, 11, 30),
            type: DiaryType.VERY_BAD
        }]
    }

    const { date } = storeToRefs(useDateStore());
    const { leftControlMenuDefaultOption, rightControlMenuDefaultOption } = storeToRefs(useControlMenuStore());

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
            copyDiaries = copyDiaries.filter(diary=>
                diary.type === DiaryType.SO_SO
                || diary.type === DiaryType.GOOD
                || diary.type === DiaryType.VERY_GOOD
            )
        } else if (rightControlMenuDefaultOption.value === 'bad') {
            copyDiaries = copyDiaries.filter(diary=>
                diary.type === DiaryType.BAD
                || diary.type === DiaryType.VERY_BAD
            )
        }

        return copyDiaries;
    });

    return { diaries, initDiary, filteredDiaries };
})

export default useDiaryStore