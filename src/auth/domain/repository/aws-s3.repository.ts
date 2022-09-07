import { Readable } from 'stream';

export interface IAwsS3Repository {
  saveFile(path: string, image: Buffer | Readable | string): Promise<string>;
  getFile(path: string): Promise<Buffer | Readable>;
}
