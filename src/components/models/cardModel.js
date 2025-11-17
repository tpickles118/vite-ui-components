/**
 * cardModel.js
 * Card model class for managing card component layout, styling, and content configuration.
 */

import { v4 as uuid4 } from 'uuid'

/**
 * Card model with configurable size, layout, borders, shadows, and custom classes.
 */
export class CardModel {
    constructor({
        id = uuid4(),
        size = null,
        layout = null,
        isBordered = false,
        isDash = false,
        isImageFull = false,
        shadow = null,
        width = null,
        customClasses = [],
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.size = size
        this.layout = layout
        this.isBordered = isBordered
        this.isDash = isDash
        this.isImageFull = isImageFull
        this.shadow = shadow
        this.width = width
        this.customClasses = customClasses
    }

    // Serializes model to plain object
    toJson() {
        return {
            id: this.id,
            size: this.size,
            layout: this.layout,
            isBordered: this.isBordered,
            isDash: this.isDash,
            isImageFull: this.isImageFull,
            shadow: this.shadow,
            width: this.width,
            customClasses: this.customClasses,
        }
    }

    // Creates model instance from plain object
    static fromJson(obj = {}) {
        return new CardModel({
            id: obj.id,
            size: obj.size,
            layout: obj.layout,
            isBordered: obj.isBordered,
            isDash: obj.isDash,
            isImageFull: obj.isImageFull,
            shadow: obj.shadow,
            width: obj.width,
            customClasses: obj.customClasses,
        })
    }

    // Compares this model with another by ID or properties
    equals(other) {
        if (!other) return false
        if (other.id && this.id) return this.id === other.id
        return (
            this.size === other.size &&
            this.layout === other.layout &&
            this.isBordered === other.isBordered &&
            this.isDash === other.isDash &&
            this.isImageFull === other.isImageFull &&
            this.shadow === other.shadow &&
            this.width === other.width
        )
    }
}
