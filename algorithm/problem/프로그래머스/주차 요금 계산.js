function time(fees, list) {
  let min = 0;
  let old;
  let now;
  let isIn = false;
  let result = 0;

  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;

  for (let [time, IsEnter] of list) {
    if (IsEnter === "IN") {
      old = new Date(`2022-06-04 ${time}`).getTime();
      isIn = true;
      continue;
    } else if (IsEnter === "OUT") {
      now = new Date(`2022-06-04 ${time}`).getTime();
      isIn = false;
    }
    min += (now - old) / 1000 / 60;
  }

  if (isIn) {
    now = new Date(`2022-06-04 23:59`).getTime();
    min += (now - old) / 1000 / 60;
    isIn = false;
  }

  if (min < 기본시간) return 기본요금;
  return 기본요금 + Math.ceil((min - 기본시간) / 단위시간) * 단위요금;
}

function solution(fees, records) {
  let answer = [];
  let recordsList = records.map((item) => item.split(" "));
  let sH = new Map();
  let arr = [];

  for (let [time, car, IsEnter] of recordsList) {
    if (!sH.has(car)) sH.set(car, [[time, IsEnter]]);
    else sH.set(car, [...sH.get(car), [time, IsEnter]]);
  }

  [...sH.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([car, list]) => {
      arr.push({ [car]: time(fees, list) });
    });

  arr.forEach((item) => {
    for (let [key, value] of Object.entries(item)) {
      answer.push(value);
    }
  });
  return answer;
}
