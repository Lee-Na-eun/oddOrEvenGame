import * as fs from 'fs';

function main(): void {
  console.log(oddOrEven());
}

function oddOrEven(): string {
  const oddEven: string[] = ['홀', '짝'];
  const randomIndex: number = Math.round(Math.random() * 1);

  return oddEven[randomIndex];
}

main();
