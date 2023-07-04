export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const result = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return result;
}
