export function parseAirResult(result) {
  const airData = result['data']['RealtimeCityAir'];
  const RESULT = airData['RESULT'];
  switch (RESULT['CODE']) {
    case 'INFO-000':
      return airData['row'][0];
    default:
      alert(RESULT['CODE'] + " : " + RESULT['MESSAGE']);
      return;
  }
}
