import { ref } from 'vue';

export const useForm = () => {
    const values = ref<{ [key: string]: any }>({});

    return [values, (e: InputEvent) => {
        if(!e.target) return;

        const target = e.target as HTMLInputElement;
        const formName = target.getAttribute('data-form-name') || 'default';

        values.value[formName] = target.value;
    }];
};