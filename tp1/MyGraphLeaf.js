/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
 **/

 function MyGraphLeaf(graph, xmlelem) {
 	this.graph = graph;
 	this.xmlelem = xmlelem;
 	this.type = null;
 	this.args = null;
 	this.obj = null;

 	if(this.xmlelem.attributes.length === 2){
 		this.type = this.xmlelem.attributes[0].value;
 		this.args = this.xmlelem.attributes[1].value;
 	} else {
 		this.type = this.xmlelem.attributes[1].value;
 		this.args = this.xmlelem.attributes[2].value;
 	}

 	if(this.type === 'triangle'){
 		this.obj = new MyTriangle(this.graph.scene,this.args);
 	} else if(this.type === 'rectangle') {
 		this.obj = new MyQuad(this.graph.scene,this.args);
 	} else if(this.type === 'cylinder') {
 		this.obj = new MyCylinder(this.graph.scene,this.args);
	} else if(this.type === 'sphere') {
		this.obj = new MySphere(this.graph.scene,this.args);
	}
}


MyGraphLeaf.prototype.displayLeaf = function(texture) {
	if(texture != null && this.type !== 'cylinder'){
		this.obj.updateTexCoords(texture[1], texture[2]);
	}
	this.obj.display();
}

