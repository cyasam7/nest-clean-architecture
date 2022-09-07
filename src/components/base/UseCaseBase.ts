export abstract class UseCaseBase<T, V> {
  abstract run(data: T): Promise<V> | V;
}
