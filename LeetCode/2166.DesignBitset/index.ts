// Lv.Medium

class Bitset {
  private default = 0;
  private different = new Set<number>();

  constructor(private size: number) {}

  fix(idx: number): void {
    this.different[this.default ? "delete" : "add"](idx);
  }

  unfix(idx: number): void {
    this.different[this.default ? "add" : "delete"](idx);
  }

  flip(): void {
    this.default = +!this.default;
  }

  all(): boolean {
    return this.count() === this.size;
  }

  one(): boolean {
    return this.count() > 0;
  }

  count(): number {
    return this.default ? this.size - this.different.size : this.different.size;
  }

  toString(): string {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      str += this.different.has(i) ? +!this.default : this.default;
    }
    return str;
  }
}

const bs = new Bitset(5);
bs.fix(3);
console.log(bs);
bs.fix(1);
bs.flip();
bs.all();
bs.unfix(0);
bs.flip();
bs.one();
bs.unfix(0);
bs.count();
bs.toString();
