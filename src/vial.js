var Sburb = (function(Sburb){



//////////////////
// vials - health bars, charge bars, etc (for strife mode)
// can perform an action at a specified amount
//////////////////

// vials req three assets to work in "vial" mode, background image, vial bar, and inside bar;

Sburb.Vial = function(name, width, height, bg, outside, inside, init, max, chargeable){
	this.name = name;
	this.width = width;
	this.height = height;
	this.bg = bg;
	this.outside = outside;
	this.inside = inside;
	this.init = init?init:0;
	this.level = init?init:0;
	this.max = max;
	this.chargeable = chargable?true:false;
	this.hidden = true;
	
	this.x = 0;
	this.y = 0;
}

Sburb.Vial.prototype.change = function(amount){
	if(this.level > this.max){
		level += amount;
	}
}

Sburb.Vial.prototype.performActionAt(amount, action){
	if(this.level === amount){
		Sburb.performAction(action);
	}
}

Sburb.Vial.prototype.reset = function(){
	this.level = this.init;
}


Sburb.Vial.prototype.update(){
	if(this.chargable){
		this.charge(1);
	}
}


Sburb.Vial.prototype.draw(){
	if(this.hidden){return} // no drawing for you!
	var outsideOffset = -width*(1 - init/max);
}

Sburb.Vial.prototype.show(){
	this.hidden = false;
}

Sburb.Vial.prototype.hide(){
	this.hidden = true;
}

///////////////////////////////////////////////
//Related Utility Functions
///////////////////////////////////////////////

Sburb.parseVial(






return Sburb;
})(Sburb || {});