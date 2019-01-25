/*
   Copyright 2016, Google, Inc.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var url = require('url');

module.exports = function(config) {
const {Datastore} = require('@google-cloud/datastore');
const {Storage} = require('@google-cloud/storage');

const options = {
    projectId: config.projectId,
    keyFilename: config.keyFilename
    };

datastore = new Datastore(options);
storage = new Storage(options);

var bucket = storage.bucket(config.bucketName);
  
function getAllBooks(user, callback) {
    if (user)
        var query = datastore.createQuery(['Book']).filter('userId', '=', 'Public');
    else
        var query = datastore.createQuery(['Book']).filter('userId', '=', 'Public');
        
  datastore.runQuery(query, (err, books) => callback(err, books, datastore.KEY));                                                   
}

  function getUserBooks(userId, callback) {
  var query = datastore.createQuery(['Book']).filter('userId', '=', userId);
  datastore.runQuery(query, (err, books) => callback(err, books, datastore.KEY));
}

function uploadCoverImage(coverImageData, callback) {
  // Generate a unique filename for this image
  var filename = '' + new Date().getTime() + "-" + Math.random();
  var file = bucket.file(filename);
  var imageUrl = 'https://' + config.bucketName + '.storage.googleapis.com/' + filename;
  var stream = file.createWriteStream();
  stream.on('error', callback);
  stream.on('finish', function() {
    // Set this file to be publicly readable
    file.makePublic(function(err) {
      if (err) return callback(err);
      callback(null, imageUrl);
    });
  });
  stream.end(coverImageData);
}

  function addBook(title, author, coverImageData, userId, callback) {                        
  var entity = {                                                                   
    key: datastore.key('Book'),                                                      
    data: {                                                                        
      title: title,                                                                
      author: author                                                               
    }                                                                              
  };                                                                               
if (userId)
    entity.data.userId = userId;
else
    entity.data.userId = 'Public';
                                                                           
  if (coverImageData)                                                            
    uploadCoverImage(coverImageData, function(err, imageUrl) {                  
      if (err) return callback(err);                                            
      entity.data.imageUrl = imageUrl;                                               
      datastore.save(entity, callback);                                           
    });                                                                         
  else                                                                          
    datastore.save(entity, callback);                                                
}

function deleteBook(bookId, callback) {
  var key = datastore.key(['Book', parseInt(bookId, 10)]);

  datastore.get(key, function(err, book) {
    if (err) return callback(err);

    if (book.imageUrl) {
      var filename = url.parse(book.imageUrl).path.replace('/', '');
      var file = bucket.file(filename);
      file.delete(function(err) {
        if (err) return callback(err);
        datastore.delete(key, callback);
      });
    } else {
      datastore.delete(key, callback);
    }
  });
}

  return {
    getAllBooks: getAllBooks,
    getUserBooks: getUserBooks,
    addBook: addBook,
    deleteBook: deleteBook
  };
};
