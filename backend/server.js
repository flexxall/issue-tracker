import express from 'express'
import cors from 'cors'
import connectDB  from './config/connectDB.js'
import issueRouter from './routes/issueRouter.js'
import currentIssueRouter from './routes/currentIssueRouter.js'

const app = express()

app.use(cors())
app.use(express.json())

//connect database
connectDB()

//require route
app.use('/', issueRouter)
app.use('/currentIssue', currentIssueRouter)

//Creating API for user
//app.use('/api/users', userRouter)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
