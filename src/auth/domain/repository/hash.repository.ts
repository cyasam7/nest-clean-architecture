export interface IHashRepository {
  hash(value: string): string;
  compare(value: string, hash: string): boolean;
}
