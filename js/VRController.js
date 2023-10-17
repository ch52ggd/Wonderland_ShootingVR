import {Component, Property} from '@wonderlandengine/api';

/**
 * VRController
 */
export class VRController extends Component {
    static TypeName = 'VRController';
    /* Properties that are configurable in the editor */
    static Properties = {
        param: Property.float(1.0)
    };

    static onRegister(engine) {
        /* Triggered when this component class is registered.
         * You can for instance register extra component types here
         * that your component may create. */
    }

    init() {
        console.log('init() with param', this.param);
    }

    start() {
        console.log('start() with param', this.param);

        this.engine.xr.session.addEventListener("selectstart", this.selectstart.bind(this));
        

        if(this.checking === true){

            console.log("???");
        }
    }

    update(dt) {
        /* Called every frame. */
    }

    selectstart(e){

        this.checking = true;
    }
}
