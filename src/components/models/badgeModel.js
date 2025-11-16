/**
 * badgeModel.js
 * Badge model class for creating and managing badge component state.
 */
import { v4 as uuidv4 } from 'uuid'
/**
 * Badge model with configurable styling and interaction properties.
 */
export class BadgeModel {
    constructor({
        id = uuidv4(),
        size = null,
        color = null,
        isSoft = false,
        isOutline = false,
        isDash = false,
        isGhost = false,
        label = 'Badge',
        isClickable = false,
        isDismissible = false,
        ariaLabel = null,
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.size = size
        this.color = color
        this.isSoft = isSoft
        this.isOutline = isOutline
        this.isDash = isDash
        this.isGhost = isGhost
        this.label = label
        this.isClickable = isClickable
        this.isDismissible = isDismissible
        this.ariaLabel = ariaLabel
    }

    // Add getters and setters
    getIsClickable() { return this.isClickable }
    getIsDismissible() { return this.isDismissible }
    getAriaLabel() { return this.ariaLabel }

    setIsClickable(value) { 
        this.isClickable = !!value
        return this
    }
    setIsDismissible(value) { 
        this.isDismissible = !!value
        return this
    }
    setAriaLabel(value) { 
        this.ariaLabel = value
        return this
    }
}
