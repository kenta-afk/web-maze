import { Assets, Spritesheet } from "pixi.js"
import { Howl } from "howler"

const ALL_RESOURCE_COUNT = 8

let loadedResouceCount = 0

export let spritesheet: Spritesheet | null = null
export const sounds = {
    bgm: new Howl({ src: ['sounds/nande.mp3'], loop: true, volume: 0.7, onload: onLoadResouce }),
}

let progressFunc: (allCount: number, finishCount: number) => void

export function load(progressCallback: (allCount: number, finishCount: number) => void) {
    progressFunc = progressCallback
    // スプライトシートの読み込み
    Assets.load('images/sprite_sheet.json').then(sheet => {
        spritesheet = sheet
        onLoadResouce()
    })
}

function onLoadResouce() {
    loadedResouceCount++
    progressFunc(ALL_RESOURCE_COUNT, loadedResouceCount)
}    
