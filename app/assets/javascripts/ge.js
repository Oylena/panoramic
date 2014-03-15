var ge = null;
google.load("earth", "1", {sensor: true});
google.setOnLoadCallback(init);

function init() {
  google.earth.createInstance('map3d', initCB, failureCB);
}
function initCB(instance) {
   ge = instance;
   ge.getWindow().setVisibility(true);
}
function failureCB(errorCode) {}

function create3dModel() {
  // Create a 3D model, initialize it from a Collada file, and place it in the world.
  var placemark = ge.createPlacemark('');
  placemark.setName('model');
  var model = ge.createModel('');
  ge.getFeatures().appendChild(placemark);
  var loc = ge.createLocation('');
  model.setLocation(loc);
  var link = ge.createLink('');

  // A textured model created in Sketchup and exported as Collada.
  link.setHref('http://kml.t.proxylocal.com/kmls/2.dae');

  model.setLink(link);
  var la = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
  loc.setLatitude(la.getLatitude());
  loc.setLongitude(la.getLongitude());
  placemark.setGeometry(model);  
  la.setRange(300);
  la.setTilt(45);
  ge.getView().setAbstractView(la);
}