import { PropTypes } from 'react'
import THREE from 'three'
import Object3D from './Object3D'


export default class Scene extends Object3D {

  static contextTypes = {
    ...Object3D.contextTypes,
    setScene: PropTypes.func.isRequired,
  };

  static propTypes = {
    ...Object3D.propTypes,
    obj: PropTypes.object,
  };

  constructor (props, context) {
    super(props, context)
    this.obj = props.obj || new THREE.Scene()
    this.obj.name = this.obj.name || this.constructor.name
    context.setScene(this.obj)


    // for threejs-inspector to work
    // https://github.com/jeromeetienne/threejs-inspector
    if (process.env.NODE_ENV === 'development') {
      window.THREE = THREE
      window.scene = this.obj
    }
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    this.obj.add(light);  
    var light2 = new THREE.DirectionalLight( 0xdb64ad );
    light2.position.set( -0.5, -0.5, -2).normalize();
    this.obj.add(light2);  
  }
}
