function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//  Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.htpp.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //here inside a function, this keyword pertains to that particular function. We can replace this by arrow functions (es6) concept
      callback(null, self.http.responseText);
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send();
};
//  Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  //data is a regular js object
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json"); //(header, value)

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data)); //we have to convert as a string
};

//  Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  //data is a regular js object
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json"); //(header, value)

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data)); //we have to convert as a string
};

//  Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.htpp.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      //here inside a function, this keyword pertains to that particular function. We can replace this by arrow functions (es6) concept
      callback(null, "Post Deleted");
    } else {
      callback("Error:" + self.http.status);
    }
  };

  this.http.send();
};
