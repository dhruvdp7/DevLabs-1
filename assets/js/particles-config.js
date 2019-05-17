(function($) {

  "use strict";

  var mainControl = {
	  "particles": {
		"number": {
		  "value": 50,
		  "density": {
			"enable": true,
			"value_area": 500
		  }
		},
		"color": {
		  "value": "#e2e2e2"
		},
		"shape": {
		  "type": "polygon",
		  "stroke": {
			"width": .1,
			"color": "#e2e2e2"
		  },
		  "polygon": {
			"nb_sides": 8
		  },
		  "image": {
			"src": "img/github.svg",
			"width": 100,
			"height": 100
		  }
		},
		"opacity": {
		  "value": .5,
		  "random": false,
		  "anim": {
			"enable": false,
			"speed": 1,
			"opacity_min": 0.1,
			"sync": false
		  }
		},
		"size": {
		  "value": 2,
		  "random": true,
		  "anim": {
			"enable": false,
			"speed": 40,
			"size_min": 0.1,
			"sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 130,
		  "color": "#e2e2e2",
		  "opacity": .8,
		  "width": 1.5
		},
		"move": {
		  "enable": true,
		  "speed": 2,
		  "direction": "top",
		  "random": false,
		  "straight": false,
		  "out_mode": "out",
		  "bounce": false,
		  "attract": {
			"enable": false,
			"rotateX": 600,
			"rotateY": 1200
		  }
		}
	  },
	  "interactivity": {
		"detect_on": "canvas",
		"events": {
		  "onhover": {
			"enable": false,
			"mode": "repulse"
		  },
		  "onclick": {
			"enable": true,
			"mode": "repulse"
		  },
		  "resize": true
		},
		"modes": {
		  "grab": {
			"distance": 150,
			"line_linked": {
			  "opacity": 1
			}
		  },
		  "bubble": {
			"distance": 400,
			"size": 40,
			"duration": 2,
			"opacity": 8,
			"speed": 3
		  },
		  "repulse": {
			"distance": 200,
			"duration": 0.4
		  },
		  "push": {
			"particles_nb": 4
		  },
		  "remove": {
			"particles_nb": 2
		  }
		}
	  },
	  "retina_detect": true
	}


	if( $('#particles-js1').length > 0 ) {
	  particlesJS("particles-js1", mainControl);
	}

})(jQuery);