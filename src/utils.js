import _ from 'lodash';

export const determineCase = (alphaCase,value) => {
    if(_.isEqual(alphaCase, 'upper'))
        return value.toLocaleUpperCase();
    if(_.isEqual(alphaCase,'lower'))
        return value.toLocaleLowerCase();
    return value;  
}