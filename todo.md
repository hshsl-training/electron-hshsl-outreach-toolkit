- figure out opening external links in the user's default browser
  - see https://github.com/electron/electron/issues/1344
  - and this http://stackoverflow.com/questions/12627443/jquery-click-vs-onclick#12627478
- js image upload: http://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html#22369599

!so question about inserting multiple images for preview:

How to insert multiple instances of an image into html using FileReader.readAsDataURL()?

I want to insert an image read by `FileReader.readAsDataURL()` into multiple `<img>` elements on a single html page.

Using the example code provided by the [MDN docs for `FileReader.readAsDataURL()`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL), **the image only gets inserted into the first `img` element, not the rest**.

I thought the reason the image is only inserted into the first `<img>` instance is because the example code uses `document.querySelector('img')`. However, when I use `document.querySelectorAll('img')`, it still does not work.

The MDN docs provide [a working codepen example](https://codepen.io/bzelip/pen/dOQdwG) that you can see in action. Here is their static code:

    <!--html-->
    <input type="file" onchange="previewFile()"><br>
    <img src="" height="200" alt="Image preview...">

and

    //js
    function previewFile() {
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();

      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }

Here
