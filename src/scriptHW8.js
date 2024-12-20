// 1
export function createDate(inputStr) {
  const [day, month, year] = inputStr.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  return date;
}

export function week(day) {
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return week[day];
}

// 2
export function calcMinutes() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return hours * 60 + minutes;
}

// 3

export function getYounger(birthdayUser1, birthdayUser2) {
  const bdUser1 = createDate(birthdayUser1);
  const bdUser2 = createDate(birthdayUser2);
  if (bdUser1 < bdUser2) {
    console.log("user2 моложе user1");
    return birthdayUser2;
  } else if (bdUser1 > bdUser2) {
    console.log("user1 моложе user2");
    return birthdayUser1;
  }
  console.log("user1 и user2 родились в один день");
  return birthdayUser1;
}
