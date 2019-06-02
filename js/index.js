var slider9 = {
	current : 0,
	delay: 5, //delay in seconds
	
	// refrencing things, finding ids and classes
	init: function(){
		var self = this
		this.slider = $("#slider9")
		this.slides = (this.slider).find(".slide")
		this.noOfSlides = (this.slides).length
		this.nextButton = $(this.slider).find("#slider_next"),
		this.backButton = $(this.slider).find("#slider_back"),
		
		this.nextButton.click(function(){
			console.log(self.current)
			self.nextSlide()
		})
		
		this.backButton.click(function(){
			console.log("going back")
			self.prevSlide()
		})
		
	},
	
	// this will change current slide to slide refrenced by slider9.current
	changeSlide: function() {
		var active = $(".slider").find('.active')
		var currentSlide = $(this.slides)[this.current]		
		
		// fadeOut current animation and run handler
		$(active).fadeTo(1000, 0, function(){

			$(active).removeClass('active') // display none
			$(active).css('opacity', 1) 		// opaque for the next iteration

			$(currentSlide).css('opacity', 0) // will fade in from opacit 0 to 1
			$(currentSlide).addClass('active') // display block
			$(currentSlide).fadeTo(1000, 1)

			$(currentSlide).find(".title").addClass('fall_animation')
			$(currentSlide).find(".action").addClass('rise_animation')

			// this.current = this.current +  1
			// this.current %= this.noOfSlides

		})
	},
	
	// will set a interval of this.delay seconds on nextSlide
	slide: function() {
			var self = this
			this.init()
			this.timer = setInterval(function(){
				self.nextSlide()
			}, self.delay * 1000)
	},
	
	// will restrat the 5sec interval from 0
	resetInterval: function() {
		var self = this
		clearInterval(this.timer)
		this.timer = setInterval(function(){
				self.nextSlide()
			}, self.delay * 1000)
	},
	
	// move a slide forward
	nextSlide: function() {
				// recall this functions after some time
				this.current += 1
				this.current %= this.noOfSlides
		
				this.changeSlide()
				this.resetInterval()
				
		
				
	}	,
	
	// move a slide backward
	prevSlide: function() {
		this.current -= 1
		if(this.current == -1)
			this.current += this.noOfSlides
		this.changeSlide()
		this.resetInterval()
		
	},
	
	
}


slider9.slide()