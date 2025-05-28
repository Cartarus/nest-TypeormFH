import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: (error: Error | null, name: string) => void,
) => {
  if (!file) return callback(new Error('File is empty'), '');

  const fileExtension: string = file.mimetype.split('/')[1];

  const fileName: string = `${uuid()}.${fileExtension}`;

  callback(null, fileName);
};
