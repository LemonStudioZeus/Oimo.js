/**
 * A ball-and-socket joint limits relative translation on two anchor points on rigid bodies.
 * @author saharan
 * @author lo-th
 */

OIMO.BallAndSocketJoint = function(config){

    OIMO.Joint.call( this, config );

    this.type = OIMO.JOINT_BALL_AND_SOCKET;
    
    this.lc = new OIMO.LinearConstraint(this);

};

OIMO.BallAndSocketJoint.prototype = Object.create( OIMO.Joint.prototype );
OIMO.BallAndSocketJoint.prototype.constructor = OIMO.BallAndSocketJoint;

OIMO.BallAndSocketJoint.prototype.preSolve = function (timeStep,invTimeStep) {

    this.updateAnchorPoints();
    this.lc.preSolve(timeStep,invTimeStep);

};

OIMO.BallAndSocketJoint.prototype.solve = function () {

    this.lc.solve();

};

OIMO.BallAndSocketJoint.prototype.postSolve = function () {
};