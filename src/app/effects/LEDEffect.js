import Effect from 'core/Effect';
import ShaderPass from 'graphics/ShaderPass';
import LEDShader from 'shaders/LEDShader';

export default class LEDEffect extends Effect {
    static label = 'LED';

    static className = 'LEDEffect';

    static defaults = {
        spacing: 10,
        size: 4,
        blur: 4,
    }

    constructor(options) {
        super(LEDEffect, options);
    }

    addToScene() {
        this.setPass(new ShaderPass(LEDShader));
        this.updatePass();
    }

    removeFromScene() {
        this.pass = null;
    }
}