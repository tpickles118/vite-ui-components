import { v4 as uuidv4 } from 'uuid';

// BadgeModel class to represent badge properties
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
    } = {}) {
        // make `id` effectively read-only on the instance
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.size = size;
        this.color = color;
        this.isSoft = isSoft;
        this.isOutline = isOutline;
        this.isDash = isDash;
        this.isGhost = isGhost;
        this.label = label;
        console.log('Badge object created:', this);
    }

    // Getters
    getId() { return this.id; }
    getSize() { return this.size; }
    getColor() { return this.color; }
    getIsSoft() { return this.isSoft; }
    getIsOutline() { return this.isOutline; }
    getIsDash() { return this.isDash; }
    getIsGhost() { return this.isGhost; }
    getLabel() { return this.label; }

    // Setters that return this for chaining
    setSize(value) { 
        this.size = value; 
        return this;
    }
    setColor(value) { 
        this.color = value; 
        return this;
    }
    setIsSoft(value) { 
        this.isSoft = !!value; 
        return this;
    }
    setIsOutline(value) { 
        this.isOutline = !!value; 
        return this;
    }
    setIsDash(value) { 
        this.isDash = !!value; 
        return this;
    }
    setIsGhost(value) { 
        this.isGhost = !!value; 
        return this;
    }
    setLabel(value) { 
        this.label = value; 
        return this;
    }

    // Serializes the model to a plain object (useful for persistence / tests)
    toJSON() {
        return {
            id: this.id,
            size: this.size,
            color: this.color,
            isSoft: this.isSoft,
            isOutline: this.isOutline,
            isDash: this.isDash,
            isGhost: this.isGhost,
            label: this.label,
        }
    }

    // Recreate a BadgeModel from a plain object (reverse of toJSON)
    static fromJSON(obj = {}) {
        return new BadgeModel({
            id: obj.id,
            size: obj.size,
            color: obj.color,
            isSoft: obj.isSoft,
            isOutline: obj.isOutline,
            isDash: obj.isDash,
            isGhost: obj.isGhost,
            label: obj.label,
        })
    }

    // Compare by id when available, else compare field-by-field
    equals(other) {
        if (!other) return false
        if (other.id) return this.id === other.id
        return (
            this.size === other.size &&
            this.color === other.color &&
            this.isSoft === other.isSoft &&
            this.isOutline === other.isOutline &&
            this.isDash === other.isDash &&
            this.isGhost === other.isGhost &&
            this.label === other.label
        )
    }
}
