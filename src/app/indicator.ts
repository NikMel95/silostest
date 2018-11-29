export class Indicator {
  constructor(
    public id: string,
    public title: string,
    public value: number,
    public minValue: number,
    public maxValue: number
  ) {}
}
