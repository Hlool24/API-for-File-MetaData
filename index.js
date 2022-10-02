var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer= require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'),(req,res) => {
  const fileInfo= req.file;
  
  
  res.status(200).json({"name":decodeURIComponent(escape( fileInfo.originalname)),"type":fileInfo.mimetype,"size":fileInfo.size})
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
