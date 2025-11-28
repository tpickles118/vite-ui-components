/**
 * toastModel.js
 * Toast model class for managing toast notification positioning and alert content.
 */

import { v4 as uuidv4 } from 'uuid'

/**
 * Toast model with configurable positioning, alerts, and auto-hide duration.
 */
export class ToastModel {
    constructor({
        id = uuidv4(),
        horizontalPosition = 'END',
        verticalPosition = 'BOTTOM',
        alerts = [],
        isVisible = true,
        duration = null,    // display time in ms
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
        this.duration = duration

    }


    // Adds an alert to the alerts array
    addAlert(alert) {
        this.alerts.push(alert)
        return this
    }

    // Removes an alert by ID from the alerts array
    removeAlert(alertId) {
        this.alerts = this.alerts.filter((alert) => alert.id !== alertId)
        return this
    }

    // Serializes model to plain object
    toJson() {
        return {
            id: this.id,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            alerts: this.alerts.map((a) => (a.toJson ? a.toJson() : a)),
            isVisible: this.isVisible,
        }
    }

    // Creates model instance from plain object
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
