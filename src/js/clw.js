// 1/2 jQuery/Electron/Node hack via http://stackoverflow.com/a/37480521/2145103
// Insert this line above script imports
if (typeof module === 'object') {window.module = module; module = undefined;}

var clw = new Vue({
  el: '#clw',
  data: {
    title: '',
    longDesc: '',
    date: '',
    time: '',
    location: '',
    url: '',
    contactName: ''
  },
  mounted() {
    var vm = this
    $('input[name=date]').datepicker({
      dateFormat: 'DD, MM dd',
      onSelect: function(dateText) {
        vm.date = dateText
      }
    }),
    $('input[name=time]').timepicker({'scrollDefault': 'now'}).on('changeTime', function() {
      // console.log($('input[name=time]').val());
      vm.time = $('input[name=time]').val();
    })
  }
})

// image preview solution via http://stackoverflow.com/a/41175754/2145103
function previewFile() {
  var preview = document.querySelectorAll('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    for (var img in preview) {
      preview[img].src = reader.result;
    }
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

    /* The origin of datepicker js, css, and code came from:
    - https://jqueryui.com/datepicker/
    - http://stackoverflow.com/a/7844578/2145103
    - http://api.jqueryui.com/datepicker/#option-dateFormat

      Here is the code that worked up until the point of two-way binding with Vue.js:
        ```js
        $(function(){
          $("input[name=date]" ).datepicker({
            dateFormat: 'DD, MM dd'
          });
        });
        ```
    */
    /*
    The origin of timepicker js, css, and code came from:
    - http://jonthornton.github.io/jquery-timepicker/

    Here is the code that worked up until the point of two-way binding with Vue.js:
      ```js
      $('input[name=time]').timepicker({'scrollDefault': 'now'});
      ```
    */

    /*
      The following link answered the datepicker part of my !SO question about
      Vue two-way binding wth jquery datepicker and timepicker:
      - http://stackoverflow.com/a/41204722/2145103
    */

    /* The following links helped me achieve my timepicker-two-way-binding-with-vue solution:
     1. The [datepicker-two-way-binding-with-vue answer to my !SO question](http://stackoverflow.com/a/41204722/2145103)
     2. The ["Event Example" in the timepicker demo docs](http://jonthornton.github.io/jquery-timepicker/)
        that thankfully used the datepicker language of `onSelect`
        for an id attribute, (#onselectExample) This tipped me off that it might be
        useful for my need. Here is the code for archival sake:
          ```js
          $('input[name=time]').timepicker({'scrollDefault': 'now'});
          $('input[name=time]').on('changeTime', function() {
            $('input[name=time]').text($(this).val());
          });
          ```
     3. The [timepicker docs](https://github.com/jonthornton/jquery-timepicker#timepicker-plugin-for-jquery).
     4. Iterating over adaptations of the code from number 1 and 2 above until the shit worked.
    */

    // 2/2 jQuery/Electron/Node hack via http://stackoverflow.com/a/37480521/2145103
    // Insert this line after script imports

if (window.module) module = window.module;
