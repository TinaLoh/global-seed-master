/*global famous*/
var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var Transform = famous.core.Transform;
var StateModifier = famous.modifiers.StateModifier;
var Transitionable = famous.transitions.Transitionable;
var SpringTransition = famous.transitions.SpringTransition;
Transitionable.registerMethod('spring', SpringTransition);

var mainContext = Engine.createContext();

var surface = new Surface({
  size: [150, 150],
  content: '<bold>Springer!</bold>',
  properties: {
    color: 'black',
    textAlign: 'center',
    paddingTop: '60px',
    border: '2px solid black',
    borderRadius: '75px',
    backgroundColor: 'yellow'
  }
});

var stateModifier = new StateModifier({
  origin: [0.5, 0],
  align: [0.5, 0]
});

mainContext.add(stateModifier).add(surface);

var spring = {
  method: 'spring',
  period: 500,
  dampingRatio: 0.1
};

stateModifier.setTransform(
  Transform.translate(0, 300, 0), spring
);
