import { readCsv } from './utils/csv.reader'
import { Reader } from './utils/reader';
import UserDto from './models/users-request.dto';

readCsv<UserDto>('user.csv', () => new UserDto(), [','], 2, false).then((userReader: Reader<UserDto>) => console.log(userReader));