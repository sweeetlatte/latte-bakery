import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";

interface Validation {
    required?: {
        value: boolean;
        message: string;
    };
    pattern?: {
        value: string;
        message: string;
    };
    custom?: {
        isValid: (value: string) => boolean;
        message: string;
    };
}

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;
type ErrorRecord<T> = Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
    validations?: Validations<T>;
    // Allows a subset of T
    initialValues?: Partial<T>;
    onSubmit?: () => void;
}) => {
    const [data, setData] = useState<T>((options?.initialValues || {}) as T);
    const [errors, setErrors] = useState<ErrorRecord<T>>({});

    // Needs to extend unknown so we can add a generic to an arrow function
    const handleChange =
        <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
        (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
            const value = sanitizeFn
                ? sanitizeFn(e.target.value)
                : e.target.value;
            setData({
                ...data,
                [key]: value,
            });
        };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement> | FormEvent<HTMLFormElement>) => {
        //We need to call e.preventDefault() because it prevents the page from reloading on submission, which is the default HTML form behavior.
        e.preventDefault();
        const validations = options?.validations;
        if (validations) {
            let valid = true;
            const newErrors: ErrorRecord<T> = {};
            for (const key in validations) {
                const value = data[key];
                const validation = validations[key];
                const pattern = validation?.pattern;
                const custom = validation?.custom;
                if (validation?.required?.value && !value) {
                    valid = false;
                    newErrors[key] = validation?.required?.message;
                }

                
                else if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }

                
                else if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }

            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({});

        if (options?.onSubmit) {
            options.onSubmit();
        }
    };

    return {
        data,
        handleChange,
        handleSubmit,
        errors,
    };
};
