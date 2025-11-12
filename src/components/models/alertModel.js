import { v4 as uuidv4 } from 'uuid';

export class AlertModel {
    constructor({
        id = uuidv4(),
        type = null, // 'INFO', 'SUCCESS', 'WARNING', 'ERROR'
        isSoft = false,
        isOutline = false,
        isDash = false,
        direction = null,
        message = 'This is an alert message.',
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.type = type;
        this.isSoft = isSoft;
        this.isOutline = isOutline;
        this.isDash = isDash;
        this.direction = direction;
        this.message = message;
    }

    // Getters
    getId() { return this.id; }
    getType() { return this.type; }
    getIsSoft() { return this.isSoft; }
    getIsOutline() { return this.isOutline; }
    getIsDash() { return this.isDash; }
    getDirection() { return this.direction; }
    getMessage() { return this.message; }

    // Setters
    setType(value) { 
        this.type = value; 
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
    setDirection(value) { 
        this.direction = value; 
        return this;
    }
    setMessage(value) { 
        this.message = value; 
        return this;
    }

    toJson() {
        return {
            id: this.id,
            type: this.type,
            isSoft: this.isSoft,
            isOutline: this.isOutline,
            isDash: this.isDash,
            direction: this.direction,
            message: this.message,
        };
    }

    static fromJson(obj = {}) {
        return new AlertModel({
            id: obj.id,
            type: obj.type,
            isSoft: obj.isSoft,
            isOutline: obj.isOutline,
            isDash: obj.isDash,
            direction: obj.direction,
            message: obj.message,
        });
    }

    equals(other) {
        if (!other) return false;
        if (other.id) return this.id === other.id;
        return (
            this.type === other.type &&
            this.isSoft === other.isSoft &&
            this.isOutline === other.isOutline &&
            this.isDash === other.isDash &&
            this.direction === other.direction &&
            this.message === other.message
        );
    }
}
