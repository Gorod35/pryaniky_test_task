export const InitialValues = {
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    companySignatureName: '',
    employeeSignatureName: '',
}

export const inputs = [
    {
        id: 'documentName',
        name: 'documentName',
        label: "Название документа",
        type: 'text',
        required: true,
    },
    {
        id: 'documentStatus',
        name: 'documentStatus',
        label: "Статус документа",
        type: 'text',
        required: true,
    },
    {
        id: 'documentType',
        name: 'documentType',
        label: "Тип документа",
        type: 'text'
    },
    {
        id: 'employeeNumber',
        name: 'employeeNumber',
        label: "Номер сотрудника",
        type: 'text'
    },
    {
        id: 'companySignatureName',
        name: 'companySignatureName',
        label: "Подпись компании",
        type: 'text'
    },
    {
        id: 'companySigDate',
        name: 'companySigDate',
        label: "Дата подписи компании",
        type: 'text'
    },
    {
        id: 'employeeSignatureName',
        name: 'employeeSignatureName',
        label: "Подпись сотрудника",
        type: 'text'
    },
    {
        id: 'employeeSigDate',
        name: 'employeeSigDate',
        label: "Дата подписи сотрудника",
        type: 'text'
    },
]