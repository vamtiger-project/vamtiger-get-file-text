import { PathLike } from 'fs';
import getFileData from 'vamtiger-get-file-data';

export default async (filePath: FilePath) => {
    const fileText = await getFileData(filePath, 'utf-8');

    return fileText;
}

export type FilePath = PathLike | string;