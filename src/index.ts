import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, (): void => console.log(`server started at http://localhost:${port}/`));