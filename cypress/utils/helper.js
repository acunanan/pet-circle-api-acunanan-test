export function setRequestField (obj, path, value) {
    const keys = path.split('.');
    let current = obj;
    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            current[key] = value;
        } else {
            current = current[key];
        }
    });
}
export default { setRequestField }; 