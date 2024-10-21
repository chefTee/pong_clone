const SPEED = .02
export default class Paddle {
    constructor(PaddleElem){
        this.PaddleElem = PaddleElem
        this.reset()
    }
    
    get position() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--position"))

    }

    set position(value) {
        this.ballElem.style.setProperty("--position", value)
    }
    rect() {
        return this.PaddleElem.getBoundingClientRect()
    }

    reset() {
        this.position = 50
    }

    update(delta, ballHeight) {
        this.position += SPEED * delta* (ballHeight - this.position)
    }
}