export function transformObjectKeys(obj: any) {
  const transformedObject: any = {};
  for (const key in obj) {
    const newKey = key.replace(/_/g, " ");
    const formattedKey = newKey.replace(/([A-Z])/g, " $1").trim();
    const innerObject = obj[key];

    const transformedInnerObject: any = {};
    for (const innerKey in innerObject) {
      const formattedInnerKey = innerKey.replace(/([A-Z])/g, " $1").trim();
      transformedInnerObject[formattedInnerKey] = innerObject[innerKey];
    }

    transformedObject[formattedKey] = transformedInnerObject;
  }

  return transformedObject;
}
