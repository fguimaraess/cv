$('#menuSmall').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'center', // Displays dropdown with edge aligned to the left of button
    stopPropagation:true // Stops event propagation
  }
);