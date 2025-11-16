/**
 * buttonModel.js
 * Button model class for managing button component configuration and state.
 */

import { v4 as uuidv4 } from 'uuid'

/**
 * Button model with configurable styling, states, and icon support.
 */
export class ButtonModel {
    constructor({
        id = uuidv4(),
        color = 'PRIMARY',
        size = 'MD',
        variant = null, // SOFT, OUTLINE, DASH, GHOST, LINK
        shape = null, // SQUARE, CIRCLE, WIDE, BLOCK
        isActive = false,
        isDisabled = false,
        isLoading = false,
        label = 'Button',
        icon = null,
        iconPosition = 'START', // 'START' or 'END'
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.color = color
        this.size = size
        this.variant = variant
        this.shape = shape
        this.isActive = isActive
        this.isDisabled = isDisabled
        this.isLoading = isLoading
        this.label = label
        this.icon = icon
        this.iconPosition = iconPosition
    }

    // Serializes model to plain object
    toJson() {
        return {
            id: this.id,
            color: this.color,
            size: this.size,
            variant: this.variant,
            shape: this.shape,
            isActive: this.isActive,
            isDisabled: this.isDisabled,
            isLoading: this.isLoading,
            label: this.label,
            icon: this.icon,
            iconPosition: this.iconPosition,
        }
    }

    // Creates model instance from plain object
    static fromJson(json) {
        return new ButtonModel({
            id: json.id,
            color: json.color,
            size: json.size,
            variant: json.variant,
            shape: json.shape,
            isActive: json.isActive,
            isDisabled: json.isDisabled,
            isLoading: json.isLoading,
            label: json.label,
            icon: json.icon,
            iconPosition: json.iconPosition,
        })
    }   

    // Compares this model with another by ID or properties
    equals(other) {
        if (!other) return false
        if (other.id) return this.id === other.id
        return (
            this.color === other.color &&
            this.size === other.size &&
            this.variant === other.variant &&
            this.shape === other.shape &&
            this.isActive === other.isActive &&
            this.isDisabled === other.isDisabled &&
            this.isLoading === other.isLoading &&
            this.label === other.label &&
            this.icon === other.icon &&
            this.iconPosition === other.iconPosition
        )
    }
    
}