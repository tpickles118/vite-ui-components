/**
 * alertModel.js
 * Alert model classes for creating and managing alert component state.
 */

import { v4 as uuidv4 } from 'uuid'

/**
 * Base alert model with configurable properties.
 */
export class AlertModel {
    constructor({
        id = uuidv4(),
        type = null,
        isSoft = false,
        isOutline = false,
        isDash = false,
        direction = null,
        buttons = [],
        isDismissible = false,
        message = 'This is an alert message.',
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.type = type
        this.isSoft = isSoft
        this.isOutline = isOutline
        this.isDash = isDash
        this.direction = direction
        this.buttons = buttons
        this.isDismissible = isDismissible
        this.message = message
    }

    getId() {
        return this.id
    }

    getType() {
        return this.type
    }

    getIsSoft() {
        return this.isSoft
    }

    getIsOutline() {
        return this.isOutline
    }

    getIsDash() {
        return this.isDash
    }

    getDirection() {
        return this.direction
    }

    getMessage() {
        return this.message
    }

    setType(value) {
        this.type = value
        return this
    }

    setIsSoft(value) {
        this.isSoft = !!value
        return this
    }

    setIsOutline(value) {
        this.isOutline = !!value
        return this
    }

    setIsDash(value) {
        this.isDash = !!value
        return this
    }

    setDirection(value) {
        this.direction = value
        return this
    }

    setMessage(value) {
        this.message = value
        return this
    }

    // Serializes model to plain object
    toJson() {
        return {
            id: this.id,
            type: this.type,
            isSoft: this.isSoft,
            isOutline: this.isOutline,
            isDash: this.isDash,
            direction: this.direction,
            message: this.message,
        }
    }

    // Creates model instance from plain object
    static fromJson(obj = {}) {
        return new AlertModel({
            id: obj.id,
            type: obj.type,
            isSoft: obj.isSoft,
            isOutline: obj.isOutline,
            isDash: obj.isDash,
            direction: obj.direction,
            message: obj.message,
        })
    }

    // Compares this model with another by ID or properties
    equals(other) {
        if (!other) return false
        if (other.id) return this.id === other.id
        return (
            this.type === other.type &&
            this.isSoft === other.isSoft &&
            this.isOutline === other.isOutline &&
            this.isDash === other.isDash &&
            this.direction === other.direction &&
            this.message === other.message
        )
    }
}

/**
 * Pre-configured success alert model.
 */
export class SuccessAlertModel extends AlertModel {
    constructor(options = {}) {
        super({ ...options, type: 'SUCCESS' })
    }
}

/**
 * Pre-configured error alert model.
 */
export class ErrorAlertModel extends AlertModel {
    constructor(options = {}) {
        super({ ...options, type: 'ERROR' })
    }
}

/**
 * Pre-configured info alert model.
 */
export class InfoAlertModel extends AlertModel {
    constructor(options = {}) {
        super({ ...options, type: 'INFO' })
    }
}

/**
 * Pre-configured warning alert model.
 */
export class WarningAlertModel extends AlertModel {
    constructor(options = {}) {
        super({ ...options, type: 'WARNING' })
    }
}

/**
 * Custom alert model with additional icon and actions support.
 */
export class CustomAlertModel extends AlertModel {
    constructor(options = {}) {
        super({ ...options, type: 'CUSTOM' })
        this.customIcon = options.customIcon || null
        this.actions = options.actions || []
    }

    getCustomIcon() {
        return this.customIcon
    }

    getActions() {
        return this.actions
    }

    setCustomIcon(value) {
        this.customIcon = value
        return this
    }

    setActions(value) {
        this.actions = value
        return this
    }
}
