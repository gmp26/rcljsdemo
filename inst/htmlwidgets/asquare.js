HTMLWidgets.widget({

  name: 'asquare',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var node = el;
    var fill;
    
    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        fill = x.fill;
        console.log(cljsWidgets)
        cljsWidgets.filled_square.render(el, x.fill, width);
        //console.log(x);
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
        console.log("width = ", width, " height = ", height);
        cljsWidgets.filled_rectangle.resize(node, fill, width, height);
      }

    };
  }
});
