{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum을 사용하지 않고 union type으로 대체가 가능하다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

  // enum에 디폴트 값을 안넣으면 0부터 시작한다.
  // 문자열도 넣어도 되지만 문자열은 전부 할당시켜야한다.
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;

  // TS에서는 enum을 사용하게 되면 type이 지정값 외에도 다른 값들을 넣을 수 있기 때문에 문제가 된다.
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
