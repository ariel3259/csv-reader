import { createReadStream, rm } from 'fs';
import { Parser, parse } from 'csv-parse';
import { Reader } from './reader';
import {
  AttributesValidation,
  Validation,
} from './attributes-validation';
import { ValidationFactory } from './validation-factory';
import { validate } from './validate';
import { cast } from './cast';

/*
  The readCsv method read an csv and parse csv data to an Generic that implements Validation interface.
  Needs five arguments for work. The first is the fileName, the second is an array of attributes(AttributesValidation),
  with this, the function can validate fields and parse fields to its needed type, the third is delimiter of the csv files,
  is an array of string because if need a files with two kinds of delimiters, the fourth is the first number of the row data(without the table name).
*/
export async function readCsv<DTO extends Validation>(
  fileName: string,
  make: () => DTO,
  delimiter: string[],
  from_line: number,
  removeFile: boolean,
): Promise<Reader<DTO>> {
  const path = `uploads/${fileName}`;
  const brokenElements: string[] = [];
  const elements: DTO[] = [];
  const factory: ValidationFactory<DTO> = new ValidationFactory(make);
  const rows: Parser = createReadStream(path).pipe(
    parse({
      delimiter,
      from_line,
    }),
  );

  for await (const row of rows) {
    try {
      const element: DTO = factory.getInstance();
      const attributes: AttributesValidation[] = element.getAttributesValidation()
  
      for (let n = 0; n < attributes.length; n++) {
        const { name, required, type,  }: AttributesValidation = attributes[n];
        validate(type, row[n], name, required)
        const value = cast(type, row[n]);
        element[name] = value;
      }
      elements.push(element);
    } catch (err) {
      brokenElements.push(err.message);
    }
  }
  if (removeFile) {
    rm(path, () => console.log(`file ${fileName} deleted`));
  }
  return {
    elements,
    brokenElements,
  };
}