import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getFileText from '../..';

const filePath = resolvePath(
    __dirname,
    'mock-data',
    'index.js'
);

describe('vamtiger-get-file-text should', function () {
    it('get text for a defined file path', async function () {
        const fileText = await getFileText(filePath);

        expect(fileText).to.contain('some file with text');
    })
})