import * as fs from 'fs';
import { format } from 'prettier';
import * as ts from 'typescript';

let codeToWrite: string[] = [];

export function appendFile(filename: string) {
    const code: string = fs.readFileSync(filename, 'utf-8');
    code.split('\n').map((line) => {
            if (!line.startsWith('import')) {
                codeToWrite.push(line);
            }
        }
    );
}

export function appendNode(node: ts.Node) {
    const data: string = printer.printNode(
        ts.EmitHint.Unspecified,
        node,
        sourceFile
    );
    codeToWrite.push(data);
}

const sourceFile = ts.createSourceFile(
    'emotive.ts',
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
);

const printer = ts.createPrinter({
    newLine: ts.NewLineKind.CarriageReturnLineFeed
});

export function writefile() {
    fs.writeFileSync('build/emotive.ts', format(codeToWrite.join(''), {
        printWidth: 120,
        parser: 'typescript',
        tabWidth: 4
    }));
}
