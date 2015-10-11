

var DisplaySystem = System.extend({
    displayWidth:0, 
    displayHeight: 0,
    canvasContainer: null,
    canvas: null,

    init: function (components, intervalPeriod, canvasContainer, displayWidth, displayWidth) {
        this.displayWidth = displayWidth;
        this.displayHeight = displayHeight;
        this.canvasContainer = canvasContainer;
        this.canvas = new TwoDCanvas(this.canvasContainer, this.displayWidth, this.displayWidth);
        this.componentClasses = ["Ball", "Paddle", "Score", "SideWall", "BackWall", "Net"];
        this._super(components, intervalPeriod);
    },

    before: function (){
        this.canvas.clear();
    },

    action: function (component) {
        component.draw();
    },

    after: function () {

    }
});