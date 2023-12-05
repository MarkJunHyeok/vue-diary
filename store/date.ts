import {defineStore} from "pinia";

const useDateStore = defineStore('date', () => {
    const date = ref(new Date())

    const incrementDate = () => {
        const currentDate = date.value;
        let newMonth = currentDate.getMonth() + 1;
        let newYear = currentDate.getFullYear();

        // 월이 12월인 경우 다음 년도로 이동하고 월을 1로 설정
        if (newMonth === 12) {
            newYear++;
            newMonth = 0; // 1은 2월을 나타냅니다.
        }

        const newDate = new Date(newYear, newMonth, currentDate.getDate());
        date.value = newDate;
    }

    const decrementDate = () => {
        const currentDate = date.value;
        let newMonth = currentDate.getMonth() - 1;
        let newYear = currentDate.getFullYear();

        // 월이 12월인 경우 다음 년도로 이동하고 월을 1로 설정
        if (newMonth === 0) {
            newYear--;
            newMonth = 12; // 1은 2월을 나타냅니다.
        }

        const newDate = new Date(newYear, newMonth, currentDate.getDate());
        date.value = newDate;
    }


    const month = computed(() => {
        return date.value.getMonth() + 1
    });

    return {date, incrementDate, decrementDate, month}
})

export default useDateStore