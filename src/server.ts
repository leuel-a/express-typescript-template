import * as dotenv from 'dotenv';
import app from '@/app';

import validateEnv from '@/utils/validateEnv';

dotenv.config();
validateEnv();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});

export default app;
