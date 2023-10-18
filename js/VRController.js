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

    LHand;
    RHand;

    init() {
        //console.log('init() with param', this.param);

        this.inputListener();
    }

    start() {
        //console.log('start() with param', this.param);
    }

    update(dt) {
        /* Called every frame. */
    }



    inputListener(){

        this.engine.onXRSessionStart.add((session, mode) => {

            console.log("XR Session Start");
            
            //select
            this.engine.xr.session.addEventListener("selectstart", this.selectstart.bind(this));
            this.engine.xr.session.addEventListener("selectend", this.selectend.bind(this));
            

            //squeeze
            this.engine.xr.session.addEventListener("squeezestart", this.squeezestart.bind(this));
            this.engine.xr.session.addEventListener("squeezeend", this.squeezeend.bind(this));
        })
    }



    //select
    selectstart(e){

        console.log("select start event");
    }
    selectend(e){

        console.log("select end event");
    }

    //squeeze
    squeezestart(e){

        console.log("squeeze start event");
    }
    squeezeend(e){

        console.log("squeeze end event");
    }
    
}
