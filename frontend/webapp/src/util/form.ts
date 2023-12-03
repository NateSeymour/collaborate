import {Ref, ref} from 'vue';

interface JsonMap {
    [key: string]: any,
}

export function useForm(): [Ref<JsonMap>, (e: InputEvent) => void]  {
    const values = ref<JsonMap>({});

    return [values, (e: InputEvent) => {
        if(!e.target) return;

        const target = e.target as HTMLInputElement;
        const formName = target.getAttribute('data-form-name') || 'default';

        values.value[formName] = target.value;
    }];
};