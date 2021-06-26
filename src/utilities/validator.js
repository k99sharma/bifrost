function isGood(value) {
  // if string contains any number
  const hasNumber = /\d/.test(value);
  if (!hasNumber) {
    let refactoredValue = value.trim();
    refactoredValue = refactoredValue.toLowerCase();

    return refactoredValue;
  } else {
    return null;
  }
}

export default isGood;
