function download(dataurl, filename) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
  }
  
  download(document.getElementsByClassName("fp-engine")[ 0 ].src, "Download")
  