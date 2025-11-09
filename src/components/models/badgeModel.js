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
        this.id = id;
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
}
