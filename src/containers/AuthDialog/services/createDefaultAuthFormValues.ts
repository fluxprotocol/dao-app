export interface NewAuthFormValues {
    accountId: string
}

export default function createDefaultAuthFormValues(): NewAuthFormValues {
    return {
        accountId: ''
    }
}