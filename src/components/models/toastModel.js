
import { v4 as uuidv4 } from 'uuid'

/**
 * Toast model for DaisyUI toast wrapper.
 */
export class ToastModel {
    constructor({
        id = uuidv4(),
        horizontalPosition = 'END',
        verticalPosition = 'BOTTOM',
        alerts = [],
        isVisible = true,
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })
        this.horizontalPosition = horizontalPosition
        this.verticalPosition = verticalPosition
        this.alerts = alerts
        this.isVisible = isVisible
    }
    // Getters
    getId() {
        return this.id
    }
    getAlerts() {
        return this.alerts
    }
    getIsVisible() {
        return this.isVisible
    }
    getHorizontalPosition() {
        return this.horizontalPosition
    }
    getVerticalPosition() {
        return this.verticalPosition
    }

    // Setters (chainable)
    setAlerts(alerts) {
        this.alerts = alerts
        return this
    }
    setIsVisible(val) {
        this.isVisible = !!val
        return this
    }
    setHorizontalPosition(val) {
        this.horizontalPosition = val
        return this
    }
    setVerticalPosition(val) {
        this.verticalPosition = val
        return this
    }

    // Alert array helpers
    addAlert(alert) {
        this.alerts.push(alert)
        return this
    }
    removeAlert(alertId) {
        this.alerts = this.alerts.filter((alert) => alert.id !== alertId)
        return this
    }

    // Serialization
    toJson() {
        return {
            id: this.id,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            alerts: this.alerts.map((a) => (a.toJson ? a.toJson() : a)),
            isVisible: this.isVisible,
        }
    }

    static fromJson(obj = {}) {
        return new ToastModel({
            id: obj.id,
            horizontalPosition: obj.horizontalPosition,
            verticalPosition: obj.verticalPosition,
            alerts: obj.alerts,
            isVisible: obj.isVisible,
        })
    }
}
