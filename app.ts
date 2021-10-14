import * as fs from 'fs';
import * as readline from 'readline-sync';

function main(): void {
  // 시도한 횟수는 여기서 처리하자.
  // 최고기록일 때 data에 저장해주기 (최고기록은 많이 맞출수록 갱신 되니까!)
  // 맞췄을 때 꺼주기

  let fileData: string = '';
  let tryCount: number = 0;

  try {
    fileData = fs.readFileSync('./test.txt', 'utf8');
  } catch {
    console.log(`최고기록이 아직 없습니다.`);
  }

  while (true) {
    fs.writeFileSync('./test.txt', `${tryCount}`);
    console.log('홀,짝 중 고르세요');
    const input: string = readline.question();
    const randomAnswer: string = oddOrEven();
    if (input === randomAnswer) {
      tryCount += 1;
      if (Number(fileData) >= tryCount || fileData === '0') {
        fs.writeFileSync('./test.txt', `${tryCount}`);
        console.log(
          `정답입니다! 시도횟수 ${tryCount}번 시도, 최고 기록입니다!`
        );
      } else {
        console.log(
          `정답입니다! 시도횟수 ${tryCount} 시도, 최고기록은 ${fileData}번 입니다!`
        );
      }
      break;
    } else {
      console.log('틀렸습니다. 다시 시도해주세요!');
      tryCount += 1;
      console.log();
    }
  }
}

function oddOrEven(): string {
  const oddEven: string[] = ['홀', '짝'];
  const randomIndex: number = Math.round(Math.random() * 1);

  return oddEven[randomIndex];
}

main();
