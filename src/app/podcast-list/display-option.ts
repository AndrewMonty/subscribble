export class DisplayOption {
    label: string;
    value: string;
    size: number;
    icon: string;
}

export const displayOptions: DisplayOption[] = [
    {
        label: 'Grid Small',
        value: 'grid',
        size: 5,
        icon: 'view_comfy'
    },
    {
        label: 'Grid Large',
        value: 'grid',
        size: 3,
        icon: 'view_module'
    },
    {
        label: 'List',
        value: 'list',
        size: 1,
        icon: 'view_list'
    }
];
