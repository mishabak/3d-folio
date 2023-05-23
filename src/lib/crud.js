import { YourModel2 } from '@/model/user';
import dbConnect from './connectdb';

export const GetImage = async () => {
  await dbConnect();
  var resp = await YourModel2.find();
  return resp;
};
