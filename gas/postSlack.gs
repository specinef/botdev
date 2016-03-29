 
function postSlack(e) {
 
  var textColumnIndex = 1;
  var helpColumnIndex = 4;
  var sheet = SpreadsheetApp.getActive().getSheetByName('シート1');
  var data = sheet.getDataRange().getValues();
  var channel = 'xxx';
  var userName = 'ハレゼナ';
  
  for (var i = 0; i < data.length; i++) {    
    var text = data[i][textColumnIndex];
    var jsonData =
        {
          "channel" : channel,
          "username" : userName,
          "text" : text,
          "attachments": [
            {
              "text": data[i][helpColumnIndex]
            }
          ]
        };
    var payload = JSON.stringify(jsonData);
    var options =
        {
          "method" : "post",
          "contentType" : "application/json",
          "payload" : payload
        };
    UrlFetchApp.fetch('https://hooks.slack.com/services/xxx/xxx/xxx', options);
  }
  
  sheet.clear();
}
 
