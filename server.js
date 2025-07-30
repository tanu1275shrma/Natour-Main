const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ DB connection successful!'))
  .catch((err) => {
    console.error('❌ DB connection error:', err.message);
    process.exit(1);
    console.log('👉 Final DB URI:', DB);
    // Optional: Stop app if DB connection fails
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ App running on port ${port}...`);
});
