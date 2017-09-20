export default (data) => data
    .split('\n')
    .filter(item => item)
    .map(el => JSON.parse(el));