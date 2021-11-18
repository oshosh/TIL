{
  /**
   * Intersection Types: &
   * 모든 타입을 전부 수용하여 사용하기 때문에 함수 호출 시 전부 다 사용해야한다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'osh',
    score: 1,
    empolyeeId: 123,
    work: () => { console.log('인턴은 일을 한다.') },
  });
}
