const columns = [
    { header: '포인트 지급 예약 ID', width: 100, Header: '포인트 지급 예약 ID', accessor: 'id', isVisible: undefined },
    { header: '포인트 지급 사유', width: 200, Header: '포인트 지급 사유', accessor: 'reason', isVisible: undefined },
    { header: 'CS메모', width: 200, Header: 'CS메모', accessor: 'memo', isVisible: undefined },
    { header: '예약 상태', width: 100, Header: '예약 상태', accessor: 'statusCode', isVisible: undefined },
    { header: '지급 예약일', isVisible: false, Header: '지급 예약일', accessor: 'expectedDay', width: undefined },
    { header: '지급 예약 시간', width: 150, Header: '지급 예약 시간', accessor: 'expectedDate', isVisible: undefined },
    { header: '지급할 포인트 금액', width: 100, Header: '지급할 포인트 금액', accessor: 'pointPrice', isVisible: undefined },
    { header: '지급 된(예정) 유저수', width: 80, Header: '지급 된(예정) 유저수', accessor: 'pointCount', isVisible: undefined },
    { header: '포인트 유효기간', width: 120, Header: '포인트 유효기간', accessor: 'expiryDay', isVisible: undefined },
    { header: '생성일시', width: 120, Header: '생성일시', accessor: 'createdAt', isVisible: undefined },
    { header: '작업자', width: 120, Header: '작업자', accessor: 'workerName', isVisible: undefined },
    { header: '사용자 목록', width: 80, Header: '사용자 목록', accessor: 'userList', isVisible: undefined },
]

const data = [
    {
        "id": 70,
        "statusCode": "대기중",
        "reason": "테스트",
        "memo": null,
        "expectedDate": "2021-12-10 19:45:00",
        "expiryDay": "2021-12-10",
        "pointPrice": 123,
        "pointCount": 16,
        "createdAt": "2021-12-10 15:46:00",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 69,
        "statusCode": "비활성",
        "reason": "1000",
        "memo": null,
        "expectedDate": "2021-12-10 20:45:00",
        "expiryDay": "2021-12-22",
        "pointPrice": 100,
        "pointCount": 0,
        "createdAt": "2021-12-10 11:27:47",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 68,
        "statusCode": "대기중",
        "reason": "ㅁㄴㅇ",
        "memo": null,
        "expectedDate": "2021-12-06 17:45:00",
        "expiryDay": "2021-12-06",
        "pointPrice": 123,
        "pointCount": 14,
        "createdAt": "2021-12-06 16:52:37",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 67,
        "statusCode": "대기중",
        "reason": "test",
        "memo": null,
        "expectedDate": "2021-12-08 06:45:00",
        "expiryDay": "2021-12-08",
        "pointPrice": 111,
        "pointCount": 14,
        "createdAt": "2021-12-06 16:49:37",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 66,
        "statusCode": "지급 완료",
        "reason": "test",
        "memo": null,
        "expectedDate": "2021-12-06 16:45:00",
        "expiryDay": "2021-12-07",
        "pointPrice": 100,
        "pointCount": 15,
        "createdAt": "2021-12-06 16:05:31",
        "workerName": "테스트 유저 입니다 ㅎ"
    },
    {
        "id": 65,
        "statusCode": "지급 완료",
        "reason": "지급 테스트",
        "memo": null,
        "expectedDate": "2021-12-06 15:45:00",
        "expiryDay": "2021-12-06",
        "pointPrice": 100,
        "pointCount": 14,
        "createdAt": "2021-12-06 15:08:41",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 64,
        "statusCode": "지급 완료",
        "reason": "ddd",
        "memo": null,
        "expectedDate": "2021-12-06 14:45:00",
        "expiryDay": "2021-12-16",
        "pointPrice": 1,
        "pointCount": 14,
        "createdAt": "2021-12-03 15:47:31",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 63,
        "statusCode": "비활성",
        "reason": "test",
        "memo": null,
        "expectedDate": "2021-12-15 15:45:00",
        "expiryDay": "2021-12-18",
        "pointPrice": 123,
        "pointCount": 0,
        "createdAt": "2021-12-02 17:11:25",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 62,
        "statusCode": "비활성",
        "reason": "할로윈호박",
        "memo": null,
        "expectedDate": "2021-12-09 06:45:00",
        "expiryDay": "2022-01-01",
        "pointPrice": 100,
        "pointCount": 0,
        "createdAt": "2021-12-01 18:25:48",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 61,
        "statusCode": "비활성",
        "reason": "안옻나어롳나어ㅗㅊ나옻너ㅏㅗㅊ",
        "memo": null,
        "expectedDate": "2021-12-22 04:45:00",
        "expiryDay": "2022-01-01",
        "pointPrice": 300,
        "pointCount": 0,
        "createdAt": "2021-12-01 18:22:40",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 60,
        "statusCode": "비활성",
        "reason": "등록 테스",
        "memo": null,
        "expectedDate": "2021-12-31 07:45:00",
        "expiryDay": "2021-10-01",
        "pointPrice": 100,
        "pointCount": 0,
        "createdAt": "2021-12-01 17:27:17",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 59,
        "statusCode": "지급 완료",
        "reason": "등록 테스",
        "memo": null,
        "expectedDate": "2021-12-30 07:45:00",
        "expiryDay": "2021-10-01",
        "pointPrice": 100,
        "pointCount": 14,
        "createdAt": "2021-12-01 17:22:56",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 58,
        "statusCode": "비활성",
        "reason": "등록 테스트!6",
        "memo": null,
        "expectedDate": "2021-12-30 00:45:00",
        "expiryDay": "2021-10-01",
        "pointPrice": 100,
        "pointCount": 0,
        "createdAt": "2021-12-01 17:11:57",
        "workerName": "엑셀 유저 테스트 ㅋ)"
    },
    {
        "id": 57,
        "statusCode": "비활성",
        "reason": "안뇽",
        "memo": null,
        "expectedDate": "2021-12-01 11:45:00",
        "expiryDay": "2021-12-04",
        "pointPrice": 300,
        "pointCount": 0,
        "createdAt": "2021-11-30 23:01:23",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 56,
        "statusCode": "비활성",
        "reason": "안뇽ㅇㅇㅇㅇ",
        "memo": null,
        "expectedDate": "2021-12-01 09:45:00",
        "expiryDay": "2021-12-04",
        "pointPrice": 300,
        "pointCount": 0,
        "createdAt": "2021-11-30 22:56:58",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 55,
        "statusCode": "비활성",
        "reason": "안녕디지몬",
        "memo": null,
        "expectedDate": "2021-12-01 09:45:00",
        "expiryDay": "2021-12-02",
        "pointPrice": 300,
        "pointCount": 0,
        "createdAt": "2021-11-30 22:11:13",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 54,
        "statusCode": "비활성",
        "reason": "잘등록도니아ㅛ",
        "memo": null,
        "expectedDate": "2021-11-30 14:45:00",
        "expiryDay": "2021-12-03",
        "pointPrice": 4,
        "pointCount": 0,
        "createdAt": "2021-11-29 17:34:22",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 53,
        "statusCode": "비활성",
        "reason": "에러~~~!",
        "memo": null,
        "expectedDate": "2021-11-30 08:45:00",
        "expiryDay": "2021-12-02",
        "pointPrice": 4,
        "pointCount": 0,
        "createdAt": "2021-11-29 17:33:45",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 52,
        "statusCode": "비활성",
        "reason": "에러 후에 정상 등록? ",
        "memo": null,
        "expectedDate": "2021-11-30 11:45:00",
        "expiryDay": "2021-12-02",
        "pointPrice": 12,
        "pointCount": 0,
        "createdAt": "2021-11-29 17:29:36",
        "workerName": "엑셀 유저 테스트 ㅋ"
    },
    {
        "id": 51,
        "statusCode": "비활성",
        "reason": "에러 후에 정상 등록? ",
        "memo": null,
        "expectedDate": "2021-11-30 10:45:00",
        "expiryDay": "2021-12-02",
        "pointPrice": 12,
        "pointCount": 0,
        "createdAt": "2021-11-29 17:28:23",
        "workerName": "엑셀 유저 테스트 ㅋ"
    }
]

const fakeData = {
    columns,
    data
};

export default fakeData;