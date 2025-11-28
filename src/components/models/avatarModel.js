// components/models/avatarModel.js
import { v4 as uuidv4 } from 'uuid'
import { AVATAR_OPTIONS } from '@/constants/index.js'

export class AvatarModel {
    constructor({
        id = uuidv4(),
        src = '',
        alt = '',
        size = AVATAR_OPTIONS.SIZE.MD,
        shape = AVATAR_OPTIONS.SHAPE.CIRCLE,
        isPlaceholder = false,
        placeholderText = '',
        placeholderSize = 'text-xl',
        isOnline = false,
        isOffline = false,
        hasRing = false,
        ringSize = AVATAR_OPTIONS.RING_SIZE.RING_2,
        ringColor = AVATAR_OPTIONS.RING_COLOR.PRIMARY,
        ringOffsetSize = AVATAR_OPTIONS.RING_OFFSET_SIZE.OFFSET_2,
        ringOffsetColor = AVATAR_OPTIONS.RING_OFFSET_COLOR.BASE_100,
        customClasses = [],
    } = {}) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true,
        })

        this.src = src
        this.alt = alt
        this.size = size
        this.shape = shape
        this.isPlaceholder = isPlaceholder
        this.placeholderText = placeholderText
        this.placeholderSize = placeholderSize
        this.isOnline = isOnline
        this.isOffline = isOffline
        this.hasRing = hasRing
        this.ringSize = ringSize
        this.ringColor = ringColor
        this.ringOffsetSize = ringOffsetSize
        this.ringOffsetColor = ringOffsetColor
        this.customClasses = customClasses
    }

    toJson() {
        return {
            id: this.id,
            src: this.src,
            alt: this.alt,
            size: this.size,
            shape: this.shape,
            isPlaceholder: this.isPlaceholder,
            placeholderText: this.placeholderText,
            placeholderSize: this.placeholderSize,
            isOnline: this.isOnline,
            isOffline: this.isOffline,
            hasRing: this.hasRing,
            ringSize: this.ringSize,
            ringColor: this.ringColor,
            ringOffsetSize: this.ringOffsetSize,
            ringOffsetColor: this.ringOffsetColor,
            customClasses: this.customClasses,
        }
    }

    static fromJson(obj) {
        return new AvatarModel(obj)
    }

    equals(other) {
        return (
            other &&
            this.id === other.id &&
            this.src === other.src &&
            this.size === other.size &&
            this.shape === other.shape &&
            this.isPlaceholder === other.isPlaceholder &&
            this.placeholderText === other.placeholderText &&
            this.placeholderSize === other.placeholderSize &&
            this.isOnline === other.isOnline &&
            this.isOffline === other.isOffline &&
            this.hasRing === other.hasRing &&
            this.ringSize === other.ringSize &&
            this.ringColor === other.ringColor &&
            this.ringOffsetSize === other.ringOffsetSize &&
            this.ringOffsetColor === other.ringOffsetColor &&
            JSON.stringify(this.customClasses) === JSON.stringify(other.customClasses)
        )
    }
}

export default AvatarModel
