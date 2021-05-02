// when user enter the value which is not number, it will be transited to "".
function onlyNumber(value = "") {
  return value.replace(/\D+/g, "");
}
export function formatCardNumber(value) {
  if (!value) {
    return value;
  }
  const onlyNumbrValue = onlyNumber(value);
  let nextValue;
  // format the cardNumber like ".... .... .... ...."
  nextValue = `${onlyNumbrValue.slice(0, 4)} ${onlyNumbrValue.slice(
    4,
    8
  )} ${onlyNumbrValue.slice(8, 12)} ${onlyNumbrValue.slice(12, 16)}`;
  return nextValue.trim();
}
//set the maxLength of the CVV is 4
export function formatCVV(value) {
  const onlyNumbrValue = onlyNumber(value);
  let maxLength = 4;
  return onlyNumbrValue.slice(0, maxLength);
}
// substring the last two numbers of the Year.
export function formatExpires (expire){
  if(expire !== 'YY'){
    expire = expire.substr(2,2)
  }
  return expire
}