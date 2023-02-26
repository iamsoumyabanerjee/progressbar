import { IOptions } from '../formFields/Select/Select';

export const createOptions = (obj: Array<any> | Object): Array<IOptions> => {
    return Object.keys(obj).map((elm, index) => {
        const option: IOptions = {
            label: `#progress ${index + 1}`,
            value: index
        };
        return option;
    });
};
