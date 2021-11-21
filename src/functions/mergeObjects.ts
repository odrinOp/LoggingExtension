import { LogOptions } from '..';

/**
 * Function to merge 2 LogOption objects.
 * This function will return all the fields on the object1 with the properties from object2.
 * @param obj1 -> the parent object(used as template)
 * @param obj2 -> the object which we want to be merged.
 */
export const mergeLogOptions: (obj1: LogOptions, obj2: LogOptions) => LogOptions = (obj1, obj2) => {
	let tempObj = obj1;
	for (let keys in obj2) {
		tempObj[keys] = obj2[keys];
	}

	return tempObj;
};
