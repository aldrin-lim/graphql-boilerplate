import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import expressGraphQL from "express-graphql";
import graphqlSchema from './graphql';
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/graphql', cors(), expressGraphQL(async () => {
    return {
      schema: graphqlSchema,
      graphiql: process.env.NODE_ENV !== 'production'
    }
  })
);

module.exports = app;
