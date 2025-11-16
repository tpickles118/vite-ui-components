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
    }

    // Serializes model to plain object
    toJson() {
        return {
            id: this.id,
            size: this.size,
            color: this.color,
            isSoft: this.isSoft,
            isOutline: this.isOutline,
            isDash: this.isDash,
            isGhost: this.isGhost,
            label: this.label,
            isClickable: this.isClickable,
            isDismissible: this.isDismissible,
        }
    }

    // Creates model instance from plain object
    static fromJson(obj = {}) {
        return new BadgeModel({
            id: obj.id,
            size: obj.size,
            color: obj.color,
            isSoft: obj.isSoft,
            isOutline: obj.isOutline,
            isDash: obj.isDash,
            isGhost: obj.isGhost,
            label: obj.label,
            isClickable: obj.isClickable,
            isDismissible: obj.isDismissible,
        })
    }

    // Compares this model with another by ID or properties
    equals(other) {
        if (!other) return false
        if (other.id && this.id) return this.id === other.id
        return (
            this.size === other.size &&
            this.color === other.color &&
            this.isSoft === other.isSoft &&
            this.isOutline === other.isOutline &&
            this.isDash === other.isDash &&
            this.isGhost === other.isGhost &&
            this.label === other.label &&
            this.isClickable === other.isClickable &&
            this.isDismissible === other.isDismissible
        )
    }
}
